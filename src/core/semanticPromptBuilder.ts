import { getSemanticContext } from "./semanticContextEngine";

export interface SemanticPromptOptions {
  language?: "lv" | "en";
  includeDefinitions?: boolean;
  includeRelatedConcepts?: boolean;
}

export interface SemanticPromptResult {
  input: string;
  prompt: string;
  conceptCount: number;
  categories: string[];
}

/**
 * SYNTERRA Semantic Prompt Builder
 */
export async function buildSemanticPrompt(
  input: string,
  options: SemanticPromptOptions = {}
): Promise<SemanticPromptResult> {
  const language = options.language ?? "en";
  const includeDefinitions = options.includeDefinitions ?? true;
  const includeRelatedConcepts = options.includeRelatedConcepts ?? true;

  const context = await getSemanticContext(input);

  const conceptLines = context.matchedConcepts.map((concept) => {
    const term = language === "lv" ? concept.lv : concept.en;
    const definition =
      language === "lv" ? concept.definition_lv : concept.definition_en;

    const parts = [
      `- ${term} (${concept.category})`,
      includeDefinitions && definition ? `  Definition: ${definition}` : null,
      includeRelatedConcepts && concept.related?.length
        ? `  Related: ${concept.related.join(", ")}`
        : null,
    ].filter(Boolean);

    return parts.join("\n");
  });

  const prompt = [
    "# SYNTERRA SEMANTIC CONTEXT",
    "",
    `User input: ${input}`,
    "",
    `Matched concepts: ${context.matchedConcepts.length}`,
    `Categories: ${context.categories.join(", ") || "none"}`,
    "",
    "## Relevant Concepts",
    conceptLines.length > 0
      ? conceptLines.join("\n\n")
      : "No direct concept match found.",
  ].join("\n");

  return {
    input,
    prompt,
    conceptCount: context.matchedConcepts.length,
    categories: context.categories,
  };
}
