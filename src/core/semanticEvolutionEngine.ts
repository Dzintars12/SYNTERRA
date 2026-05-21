export interface SemanticEvolutionEvent {
  id: string;
  conceptId: string;
  previousState: string;
  evolvedState: string;
  evolutionReason: string;
  semanticTags: string[];
  timestamp: string;
}

export interface AdaptiveSemanticRelationship {
  id: string;
  sourceConceptId: string;
  targetConceptId: string;
  relationshipStrength: number;
  evolutionCount: number;
  updatedAt: string;
}

const semanticEvolutionEvents = new Map<string, SemanticEvolutionEvent>();
const adaptiveRelationships = new Map<
  string,
  AdaptiveSemanticRelationship
>();

export async function recordSemanticEvolution(
  event: SemanticEvolutionEvent
): Promise<void> {
  semanticEvolutionEvents.set(event.id, event);
}

export async function updateAdaptiveRelationship(
  relationship: AdaptiveSemanticRelationship
): Promise<void> {
  adaptiveRelationships.set(relationship.id, relationship);
}

export async function listSemanticEvolutionEvents(): Promise<
  SemanticEvolutionEvent[]
> {
  return Array.from(semanticEvolutionEvents.values());
}

export async function listAdaptiveRelationships(): Promise<
  AdaptiveSemanticRelationship[]
> {
  return Array.from(adaptiveRelationships.values());
}
