import fs from "node:fs";
import path from "node:path";
import type { Database, Profile, PalmReading, DailyInsight } from "./types";

const DB_PATH = path.join(process.cwd(), "data", "db.json");

function emptyDb(): Database {
  return { profiles: [], palmReadings: [], dailyInsights: [] };
}

function readDb(): Database {
  if (!fs.existsSync(DB_PATH)) {
    return emptyDb();
  }
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    return { ...emptyDb(), ...JSON.parse(raw) };
  } catch {
    return emptyDb();
  }
}

function writeDb(db: Database) {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

export function getProfile(id: string): Profile | null {
  const db = readDb();
  return db.profiles.find((p) => p.id === id) ?? null;
}

export function createProfile(profile: Profile): Profile {
  const db = readDb();
  db.profiles.push(profile);
  writeDb(db);
  return profile;
}

export function updateProfile(id: string, patch: Partial<Profile>): Profile | null {
  const db = readDb();
  const index = db.profiles.findIndex((p) => p.id === id);
  if (index === -1) return null;
  db.profiles[index] = { ...db.profiles[index], ...patch };
  writeDb(db);
  return db.profiles[index];
}

export function getLatestPalmReading(profileId: string): PalmReading | null {
  const db = readDb();
  const readings = db.palmReadings.filter((r) => r.profileId === profileId);
  if (readings.length === 0) return null;
  return readings.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
}

export function addPalmReading(reading: PalmReading): PalmReading {
  const db = readDb();
  db.palmReadings.push(reading);
  writeDb(db);
  return reading;
}

export function getDailyInsight(profileId: string, date: string): DailyInsight | null {
  const db = readDb();
  return db.dailyInsights.find((d) => d.profileId === profileId && d.date === date) ?? null;
}

export function addDailyInsight(insight: DailyInsight): DailyInsight {
  const db = readDb();
  db.dailyInsights.push(insight);
  writeDb(db);
  return insight;
}

export function getDailyInsightStreak(profileId: string): number {
  const db = readDb();
  const dates = db.dailyInsights
    .filter((d) => d.profileId === profileId)
    .map((d) => d.date)
    .sort()
    .reverse();

  if (dates.length === 0) return 0;

  let streak = 0;
  let cursor = new Date(`${dates[0]}T00:00:00Z`);

  for (const date of dates) {
    const expected = cursor.toISOString().slice(0, 10);
    if (date !== expected) break;
    streak += 1;
    cursor = new Date(cursor.getTime() - 24 * 60 * 60 * 1000);
  }

  return streak;
}
