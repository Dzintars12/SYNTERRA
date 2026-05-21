import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

export interface PersistentMemoryRecord {
  id: string;
  timestamp: string;
  type: string;
  source: string;
  content: string;
  metadata?: Record<string, unknown>;
}

const MEMORY_DIRECTORY = path.resolve("data/memory");
const MEMORY_FILE = path.join(MEMORY_DIRECTORY, "synterra-memory.jsonl");

async function ensureMemoryStorage(): Promise<void> {
  await fs.mkdir(MEMORY_DIRECTORY, { recursive: true });

  try {
    await fs.access(MEMORY_FILE);
  } catch {
    await fs.writeFile(MEMORY_FILE, "", "utf-8");
  }
}

export async function appendPersistentMemory(
  record: PersistentMemoryRecord
): Promise<void> {
  await ensureMemoryStorage();

  const line = JSON.stringify(record) + "\n";

  await fs.appendFile(MEMORY_FILE, line, "utf-8");
}

export async function loadPersistentMemory(): Promise<
  PersistentMemoryRecord[]
> {
  await ensureMemoryStorage();

  const raw = await fs.readFile(MEMORY_FILE, "utf-8");

  return raw
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as PersistentMemoryRecord);
}

export async function createPersistentMemoryRecord(
  type: string,
  source: string,
  content: string,
  metadata?: Record<string, unknown>
): Promise<PersistentMemoryRecord> {
  const record: PersistentMemoryRecord = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    type,
    source,
    content,
    metadata,
  };

  await appendPersistentMemory(record);

  return record;
}
