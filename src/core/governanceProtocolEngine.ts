export type GovernanceDecisionStatus =
  | "proposed"
  | "under_review"
  | "accepted"
  | "rejected"
  | "archived";

export interface GovernanceProposal {
  id: string;
  proposerId: string;
  workspaceId?: string;
  title: string;
  description: string;
  semanticTags: string[];
  status: GovernanceDecisionStatus;
  createdAt: string;
  updatedAt: string;
}

export interface GovernanceDecision {
  id: string;
  proposalId: string;
  decisionSummary: string;
  decisionStatus: GovernanceDecisionStatus;
  reasoning: string;
  decidedAt: string;
}

const governanceProposals = new Map<string, GovernanceProposal>();
const governanceDecisions = new Map<string, GovernanceDecision>();

export async function submitGovernanceProposal(
  proposal: GovernanceProposal
): Promise<void> {
  governanceProposals.set(proposal.id, proposal);
}

export async function recordGovernanceDecision(
  decision: GovernanceDecision
): Promise<void> {
  governanceDecisions.set(decision.id, decision);
}

export async function listGovernanceProposals(): Promise<GovernanceProposal[]> {
  return Array.from(governanceProposals.values());
}

export async function listGovernanceDecisions(): Promise<GovernanceDecision[]> {
  return Array.from(governanceDecisions.values());
}
