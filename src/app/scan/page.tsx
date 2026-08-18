"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/LanguageProvider";
import type { PalmAnalysisSchema } from "@/lib/palmAnalysisSchema";
import { downscaleImage } from "@/lib/downscaleImage";
import { QuizFlow } from "./QuizFlow";

type ScanState = "idle" | "camera" | "analyzing" | "lowConfidence" | "quiz" | "error" | "offline";

export default function ScanPage() {
  const { t } = useTranslations();
  const router = useRouter();

  const [state, setState] = useState<ScanState>("idle");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (state !== "camera") return;
    const stream = streamRef.current;
    const video = videoRef.current;
    if (!stream || !video) {
      setDebugInfo((prev) => `${prev} | effect ran but stream=${!!stream} video=${!!video}`);
      return;
    }
    const track = stream.getVideoTracks()[0];
    video.srcObject = stream;

    const attemptPlay = (source: string) => {
      video
        .play()
        .then(() => setDebugInfo((prev) => `${prev} | play() resolved via ${source}, videoWidth=${video.videoWidth}`))
        .catch((err) => setDebugInfo((prev) => `${prev} | play() rejected via ${source}: ${err}`));
    };

    video.onloadedmetadata = () => attemptPlay("loadedmetadata");
    video.oncanplay = () => attemptPlay("canplay");
    video.onerror = () => setDebugInfo((prev) => `${prev} | video element error: ${video.error?.message}`);
    attemptPlay("immediate");

    const timeout = setTimeout(() => {
      setDebugInfo(
        (prev) =>
          `${prev} | after 3s: paused=${video.paused} readyState=${video.readyState} videoWidth=${video.videoWidth} trackReadyState=${track?.readyState}`,
      );
    }, 3000);
    return () => clearTimeout(timeout);
  }, [state]);

  const startCamera = async () => {
    if (!navigator.onLine) {
      setState("offline");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      const track = stream.getVideoTracks()[0];
      setDebugInfo(
        `track: enabled=${track?.enabled} muted=${track?.muted} readyState=${track?.readyState} settings=${JSON.stringify(track?.getSettings())}`,
      );
      setState("camera");
    } catch (err) {
      setDebugInfo(`getUserMedia failed: ${err}`);
      setState("error");
    }
  };

  const capturePhoto = async () => {
    if (!videoRef.current) return;
    const dataUrl = await downscaleImage(videoRef.current);
    streamRef.current?.getTracks().forEach((track) => track.stop());
    setCapturedImage(dataUrl);
    await analyze(dataUrl);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await downscaleImage(file);
    setCapturedImage(dataUrl);
    await analyze(dataUrl);
  };

  const analyze = async (dataUrl: string) => {
    if (!navigator.onLine) {
      setState("offline");
      return;
    }
    setState("analyzing");
    try {
      const res = await fetch("/api/scan/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageDataUrl: dataUrl }),
      });
      const data = await res.json();
      if (data.needsFallback || !data.analysis) {
        setState("lowConfidence");
        return;
      }
      await finalize(data.analysis, "vision");
    } catch {
      setState("lowConfidence");
    }
  };

  const finalize = async (analysis: PalmAnalysisSchema, source: "vision" | "quiz") => {
    setState("analyzing");
    try {
      const res = await fetch("/api/reading/finalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analysis, source }),
      });
      if (!res.ok) throw new Error("failed");
      router.push("/reading");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="flex min-h-dvh flex-col px-6 py-10">
      <h1 className="mb-6 font-display text-3xl text-plum">{t("scan.title")}</h1>

      {state === "idle" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <PalmOutline />
          <p className="max-w-xs text-plum/70">{t("scan.guideHint")}</p>
          <button
            onClick={startCamera}
            className="w-full rounded-full bg-coral py-4 font-semibold text-cream shadow-md shadow-coral/30"
          >
            {t("scan.capture")}
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full rounded-full border border-plum/20 py-4 font-semibold text-plum"
          >
            {t("scan.upload")}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      )}

      {state === "camera" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6">
          <div className="relative w-full overflow-hidden rounded-3xl bg-black">
            <video ref={videoRef} autoPlay playsInline muted className="h-auto w-full" />
            <div className="pointer-events-none absolute inset-6 rounded-3xl border-4 border-dashed border-marigold" />
          </div>
          <p className="text-center text-sm text-plum/70">{t("scan.guideHint")}</p>
          {debugInfo && (
            <p className="max-w-xs break-words text-center text-xs text-plum/50">{debugInfo}</p>
          )}
          <button
            onClick={capturePhoto}
            className="w-full rounded-full bg-coral py-4 font-semibold text-cream shadow-md shadow-coral/30"
          >
            {t("scan.capture")}
          </button>
        </div>
      )}

      {state === "analyzing" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          {capturedImage && (
            // eslint-disable-next-line @next/next/no-img-element -- transient local preview, not worth next/image here
            <img src={capturedImage} alt="" className="h-40 w-40 rounded-3xl object-cover opacity-70" />
          )}
          <HennaSpinner />
          <p className="font-display text-xl text-plum">{t("scan.analyzing")}</p>
          <p className="max-w-xs text-sm text-plum/60">{t("scan.analyzingHint")}</p>
        </div>
      )}

      {state === "lowConfidence" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <h2 className="font-display text-2xl text-plum">{t("scan.lowConfidenceTitle")}</h2>
          <p className="max-w-xs text-plum/70">{t("scan.lowConfidenceBody")}</p>
          <button
            onClick={() => setState("quiz")}
            className="w-full rounded-full bg-coral py-4 font-semibold text-cream shadow-md shadow-coral/30"
          >
            {t("scan.quizStart")}
          </button>
        </div>
      )}

      {state === "quiz" && (
        <QuizFlow onComplete={(analysis) => finalize(analysis, "quiz")} />
      )}

      {state === "error" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <p className="max-w-xs text-plum/70">{t("scan.cameraDenied")}</p>
          {debugInfo && (
            <p className="max-w-xs break-words text-center text-xs text-plum/50">{debugInfo}</p>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full rounded-full bg-coral py-4 font-semibold text-cream shadow-md shadow-coral/30"
          >
            {t("scan.upload")}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      )}

      {state === "offline" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <p className="max-w-xs text-plum/70">{t("scan.offline")}</p>
          <button
            onClick={() => setState("idle")}
            className="w-full rounded-full border border-plum/20 py-4 font-semibold text-plum"
          >
            {t("onboarding.back")}
          </button>
        </div>
      )}
    </div>
  );
}

function PalmOutline() {
  return (
    <svg width="180" height="220" viewBox="0 0 180 220" fill="none" className="text-marigold">
      <path
        d="M60 200V60c0-11 9-20 20-20s20 9 20 20v40M100 200V40c0-11 9-20 20-20s20 9 20 20v60M140 200V70c0-9 7-16 16-16s16 7 16 16v50"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="10 8"
      />
      <path
        d="M40 200c0-25 12-45 12-70 0-14 10-25 24-25h80c26 0 44 22 44 52v43c0 35-29 64-64 64H84c-35 0-64-29-64-64z"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray="10 8"
      />
    </svg>
  );
}

function HennaSpinner() {
  return (
    <motion.svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      className="text-marigold"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
    >
      <motion.g
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        style={{ originX: "36px", originY: "36px" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="36"
            cy="14"
            rx="4"
            ry="9"
            fill="currentColor"
            opacity={0.85}
            transform={`rotate(${i * 45} 36 36)`}
          />
        ))}
        <circle cx="36" cy="36" r="6" fill="var(--color-coral)" />
      </motion.g>
    </motion.svg>
  );
}
