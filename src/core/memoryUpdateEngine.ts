export interface MemoryUpdateInput {
  source: "runtime" | "agent" | "llm" | "audit" | "manual";
  input: string;
  output: string;
  categories?: string[];
  memoryLayers?: string[];
  timestamp?: string;
}

export interface MemoryUpdateRecord {
  id: string;
  source: string;
  input: string;
  outputSummary: string;
  categories: string[];
  memoryLayers: string[];
  timestamp: string;
  status: "prepared" | "stored" | "rejected";
  note: string;
}

function createMemoryId(timestamp: string): string {
  return `SYN_MEMORY_${timestamp.replace(/[-:.TZ]/g, "")}`;
}

function summarizeOutput(output: string): string {
  const cleaned = output.trim().replace(/\s+/g, " ");
  return cleaned.length > 280 ? `${cleaned.slice(0, 280)}...` : cleaned;
}

/**
 * SYNTERRA Memory Update Engine
 */
export async function prepareMemoryUpdate(
  update: MemoryUpdateInput
): Promise<MemoryUpdateRecord> {
  const timestamp = update.timestamp ?? new Date().toISOString();

  return {
    id: createMemoryId(timestamp),
    source: update.source,
    input: update.input,
    outputSummary: summarizeOutput(update.output),
    categories: update.categories ?? [],
    memoryLayers: update.memoryLayers ?? [],
    timestamp,
    status: "prepared",
    note:
      "Memory update prepared in foundation mode.",
  };
}
