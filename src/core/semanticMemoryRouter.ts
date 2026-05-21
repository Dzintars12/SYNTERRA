import { getSemanticContext } from "./semanticContextEngine";

export type SemanticMemoryLayer =
  | "core_concepts"
  | "terminology"
  | "timeline"
  | "audit_memory"
  | "architecture"
  | "semantic_vectors"
  | "project_memory";

export interface SemanticMemoryRoute {
  input: string;
  layers: SemanticMemoryLayer[];
  reason: string;
  categories: string[];
}

function mapCategoryToLayers(category: string): SemanticMemoryLayer[] {
  switch (category) {
    case "philosophy":
      return ["core_concepts", "terminology", "timeline"];
    case "civilization":
      return ["core_concepts", "timeline", "semantic_vectors"];
    case "communication":
      return ["terminology", "core_concepts", "semantic_vectors"];
    case "knowledge":
      return ["core_concepts", "project_memory", "semantic_vectors"];
    case "system":
      return ["architecture", "audit_memory", "project_memory"];
    case "AI":
      return ["core_concepts", "semantic_vectors", "project_memory"];
    case "humanity":
      return ["core_concepts", "timeline", "audit_memory"];
    default:
      return ["core_concepts"];
  }
}

/**
 * SYNTERRA Semantic Memory Router
 */
export async function routeSemanticMemory(input: string): Promise<SemanticMemoryRoute> {
  const context = await getSemanticContext(input);

  const mappedLayers = context.categories.flatMap((category) =>
    mapCategoryToLayers(category)
  );

  const layers = Array.from(new Set<SemanticMemoryLayer>(mappedLayers));

  return {
    input,
    layers: layers.length > 0 ? layers : ["core_concepts"],
    categories: context.categories,
    reason:
      context.matchedConcepts.length > 0
        ? "Memory route created from matched concepts."
        : "Fallback route created.",
  };
}
