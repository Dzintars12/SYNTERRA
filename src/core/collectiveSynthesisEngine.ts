import {
  CollectiveReasoningContribution,
  SemanticConsensus,
} from "./collectiveIntelligenceEngine";

export interface CollectiveSynthesisResult {
  topic: string;
  synthesizedThemes: string[];
  synthesizedSummary: string;
  contributorCount: number;
  generatedAt: string;
}

export async function synthesizeCollectiveReasoning(input: {
  topic: string;
  contributions: CollectiveReasoningContribution[];
  consensus?: SemanticConsensus;
}): Promise<CollectiveSynthesisResult> {
  const synthesizedThemes = Array.from(
    new Set(
      input.contributions.flatMap((contribution) =>
        contribution.semanticTags
      )
    )
  );

  const synthesizedSummary =
    input.consensus?.consensusSummary ??
    "Collective reasoning synthesis generated from collaborative semantic contributions.";

  return {
    topic: input.topic,
    synthesizedThemes,
    synthesizedSummary,
    contributorCount: input.contributions.length,
    generatedAt: new Date().toISOString(),
  };
}
