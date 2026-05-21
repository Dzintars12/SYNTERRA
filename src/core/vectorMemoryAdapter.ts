import { getSemanticContext } from "./semanticContextEngine";

export interface VectorMemorySearchResult {
  id: string;
  source: string;
  score: number;
  title: string;
  summary: string;
  categories: string[];
}

export interface VectorMemoryAdapterResult {
  input: string;
  mode: "mock" | "vector";
  results: VectorMemorySearchResult[];
  note: string;
}

/**
 * SYNTERRA Vector Memory Adapter
 */
export async function searchVectorMemory(
  input: string
): Promise<VectorMemoryAdapterResult> {
  const context = await getSemanticContext(input);

  const results: VectorMemorySearchResult[] = context.matchedConcepts.map(
    (concept, index) => ({
      id: concept.id,
      source: "knowledge/core/SYNTERRA_CORE_CONCEPTS.json",
      score: 1 - index * 0.05,
      title: concept.en,
      summary: concept.definition_en ?? concept.definition_lv ?? "No definition available.",
      categories: [concept.category],
    })
  );

  return {
    input,
    mode: "mock",
    results,
    note:
      "Vector memory is currently running in foundation mock mode. Future versions will use embeddings and semantic similarity search.",
  };
}
