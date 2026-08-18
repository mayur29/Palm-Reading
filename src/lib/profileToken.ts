import { cookies } from "next/headers";

export const PROFILE_COOKIE = "palmora_profile_id";

export async function getProfileIdFromCookies(): Promise<string | null> {
  const store = await cookies();
  return store.get(PROFILE_COOKIE)?.value ?? null;
}
