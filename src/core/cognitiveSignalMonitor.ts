export interface CognitiveSignal {
  id: string;
  signalType:
    | "semantic_shift"
    | "consensus_emergence"
    | "relationship_growth"
    | "memory_pattern";
  description: string;
  intensity: number;
  detectedAt: string;
}

const cognitiveSignals = new Map<string, CognitiveSignal>();

export async function recordCognitiveSignal(
  signal: CognitiveSignal
): Promise<void> {
  cognitiveSignals.set(signal.id, signal);
}

export async function listCognitiveSignals(): Promise<
  CognitiveSignal[]
> {
  return Array.from(cognitiveSignals.values());
}
