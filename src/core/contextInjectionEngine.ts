import { searchSemanticVectors, VectorSearchResult } from "./vectorSearchEngine";

export interface ContextInjectionOptions {
  maxResults?: number;
  minScore?: number;
  language?: "lv" | "en";
}

export interface ContextInjectionResult {
  input: string;
  injectedContext: string;
  selectedResults: VectorSearchResult[];
  resultCount: number;
  mode: "mock" | "live";
}

function formatContextItem(item: VectorSearchResult, index: number): string {
  return [
    `## Context ${index + 1}: ${item.title}`,
    `Source: ${item.source}`,
    `Category: ${item.categories.join(", ")}`,
    `Score: ${item.combinedScore}`,
    `Summary: ${item.summary}`,
  ].join("\n");
}

/**
 * SYNTERRA Context Injection Engine
 */
export async function buildContextInjection(
  input: string,
  options: ContextInjectionOptions = {}
): Promise<ContextInjectionResult> {
  const maxResults = options.maxResults ?? 5;
  const minScore = options.minScore ?? 0;

  const vectorSearch = await searchSemanticVectors(input);

  const selectedResults = vectorSearch.results
    .filter((result) => result.combinedScore >= minScore)
    .slice(0, maxResults);

  const injectedContext = [
    "# SYNTERRA CONTEXT INJECTION",
    "",
    `Input: ${input}`,
    "",
    "## Selected Semantic Memory",
    selectedResults.length > 0
      ? selectedResults.map(formatContextItem).join("\n\n")
      : "No semantic memory results selected.",
  ].join("\n");

  return {
    input,
    injectedContext,
    selectedResults,
    resultCount: selectedResults.length,
    mode: vectorSearch.mode,
  };
}
