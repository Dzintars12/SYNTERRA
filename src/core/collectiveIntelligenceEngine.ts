export interface CollectiveReasoningContribution {
  id: string;
  contributorId: string;
  workspaceId?: string;
  concept: string;
  reasoning: string;
  semanticTags: string[];
  createdAt: string;
}

export interface SemanticConsensus {
  id: string;
  topic: string;
  participatingContributors: string[];
  semanticThemes: string[];
  consensusSummary: string;
  confidenceLevel: number;
  updatedAt: string;
}

const reasoningContributions = new Map<
  string,
  CollectiveReasoningContribution
>();

const semanticConsensusMap = new Map<string, SemanticConsensus>();

export async function addReasoningContribution(
  contribution: CollectiveReasoningContribution
): Promise<void> {
  reasoningContributions.set(contribution.id, contribution);
}

export async function createSemanticConsensus(
  consensus: SemanticConsensus
): Promise<void> {
  semanticConsensusMap.set(consensus.id, consensus);
}

export async function listReasoningContributions(): Promise<
  CollectiveReasoningContribution[]
> {
  return Array.from(reasoningContributions.values());
}

export async function listSemanticConsensus(): Promise<
  SemanticConsensus[]
> {
  return Array.from(semanticConsensusMap.values());
}
