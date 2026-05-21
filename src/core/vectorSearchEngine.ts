import { generateEmbedding, EmbeddingVector } from "./embeddingProvider";
import { searchVectorMemory, VectorMemorySearchResult } from "./vectorMemoryAdapter";

export interface VectorSearchResult extends VectorMemorySearchResult {
  vectorScore: number;
  combinedScore: number;
}

export interface VectorSearchEngineResult {
  input: string;
  embeddingModel: string;
  mode: "mock" | "live";
  results: VectorSearchResult[];
  note: string;
}

function cosineSimilarity(a: EmbeddingVector, b: EmbeddingVector): number {
  const length = Math.min(a.values.length, b.values.length);

  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < length; i += 1) {
    dot += a.values[i] * b.values[i];
    normA += a.values[i] * a.values[i];
    normB += b.values[i] * b.values[i];
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return Number((dot / (Math.sqrt(normA) * Math.sqrt(normB))).toFixed(4));
}

/**
 * SYNTERRA Vector Search Engine
 */
export async function searchSemanticVectors(
  input: string
): Promise<VectorSearchEngineResult> {
  const queryEmbedding = await generateEmbedding(input);
  const memory = await searchVectorMemory(input);

  const results: VectorSearchResult[] = [];

  for (const item of memory.results) {
    const itemEmbedding = await generateEmbedding(
      `${item.title} ${item.summary} ${item.categories.join(" ")}`
    );

    const vectorScore = cosineSimilarity(
      queryEmbedding.embedding,
      itemEmbedding.embedding
    );

    const combinedScore = Number(((item.score + vectorScore) / 2).toFixed(4));

    results.push({
      ...item,
      vectorScore,
      combinedScore,
    });
  }

  results.sort((a, b) => b.combinedScore - a.combinedScore);

  return {
    input,
    embeddingModel: queryEmbedding.embedding.model,
    mode: "mock",
    results,
    note: "Vector search engine foundation active.",
  };
}
