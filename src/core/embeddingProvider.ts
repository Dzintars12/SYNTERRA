export interface EmbeddingVector {
  values: number[];
  dimensions: number;
  model: string;
}

export interface EmbeddingResult {
  input: string;
  embedding: EmbeddingVector;
  mode: "mock" | "live";
  note?: string;
}

/**
 * SYNTERRA Embedding Provider
 */
export async function generateEmbedding(
  input: string
): Promise<EmbeddingResult> {
  const normalized = input.toLowerCase().trim();

  const values = Array.from({ length: 16 }, (_, index) => {
    const charCode = normalized.charCodeAt(index % normalized.length) || 0;
    return Number(((charCode % 97) / 100).toFixed(4));
  });

  return {
    input,
    mode: "mock",
    embedding: {
      values,
      dimensions: values.length,
      model: "SYN_MOCK_EMBEDDING_V1",
    },
    note: "Mock embedding provider active.",
  };
}
