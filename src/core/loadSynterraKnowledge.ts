export interface SynterraKnowledgeContext {
  coreConcepts: unknown;
  terminology: unknown;
  timeline: string;
}

/**
 * SYNTERRA Knowledge Loader
 *
 * Purpose:
 * Loads the foundational semantic knowledge required
 * for AI context awareness inside the SYNTERRA ecosystem.
 */
export async function loadSynterraKnowledge(): Promise<SynterraKnowledgeContext> {
  const coreConcepts = await import(
    "../../knowledge/core/SYNTERRA_CORE_CONCEPTS.json"
  );

  const terminology = await import(
    "../../knowledge/terminology/SYNTERRA_TERMINOLOGY_CORE.json"
  );

  const timeline = "docs/timeline/SYNTERRA_MASTER_TIMELINE.md";

  return {
    coreConcepts: coreConcepts.default,
    terminology: terminology.default,
    timeline,
  };
}
