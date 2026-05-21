import { generateEmbedding, EmbeddingVector } from "./embeddingProvider";

export interface SemanticVectorRecord {
  id: string;
  source: string;
  title: string;
  content: string;
  categories: string[];
  embedding: EmbeddingVector;
  createdAt: string;
}

const vectorRecords = new Map<string, SemanticVectorRecord>();

export async function upsertSemanticVector(input: {
  id: string;
  source: string;
  title: string;
  content: string;
  categories?: string[];
}): Promise<SemanticVectorRecord> {
  const embedding = await generateEmbedding(input.content);

  const record: SemanticVectorRecord = {
    id: input.id,
    source: input.source,
    title: input.title,
    content: input.content,
    categories: input.categories ?? [],
    embedding: embedding.embedding,
    createdAt: new Date().toISOString(),
  };

  vectorRecords.set(record.id, record);

  return record;
}

export async function listSemanticVectors(): Promise<SemanticVectorRecord[]> {
  return Array.from(vectorRecords.values());
}

export async function getSemanticVectorById(
  id: string
): Promise<SemanticVectorRecord | null> {
  return vectorRecords.get(id) ?? null;
}
