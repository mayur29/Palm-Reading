export async function downscaleImage(source: Blob | HTMLVideoElement, maxDimension = 1024): Promise<string> {
  const bitmap =
    source instanceof Blob ? await createImageBitmap(source) : source;

  const width = "videoWidth" in bitmap ? bitmap.videoWidth : bitmap.width;
  const height = "videoHeight" in bitmap ? bitmap.videoHeight : bitmap.height;

  const scale = Math.min(1, maxDimension / Math.max(width, height));
  const targetWidth = Math.round(width * scale);
  const targetHeight = Math.round(height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas_unsupported");

  if (source instanceof Blob) {
    ctx.drawImage(bitmap as ImageBitmap, 0, 0, targetWidth, targetHeight);
  } else {
    ctx.drawImage(source, 0, 0, targetWidth, targetHeight);
  }

  return canvas.toDataURL("image/jpeg", 0.85);
}
