"use client";

import { useEffect, useState } from "react";
import type { Profile } from "./types";

type ProfileState = {
  profile: Profile | null;
  loading: boolean;
  refresh: () => void;
};

export function useProfile(): ProfileState {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- refetch loading indicator, guarded by `cancelled`
    if (version > 0) setLoading(true);
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setProfile(data.profile);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [version]);

  return { profile, loading, refresh: () => setVersion((v) => v + 1) };
}
