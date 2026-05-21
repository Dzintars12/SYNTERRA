import { buildSemanticPrompt } from "./semanticPromptBuilder";
import { routeSemanticMemory } from "./semanticMemoryRouter";

export interface SemanticResponseOrchestrationOptions {
  language?: "lv" | "en";
  mode?: "documentation" | "translation" | "audit" | "creator" | "philosophy";
}

export interface SemanticResponseOrchestrationResult {
  input: string;
  mode: string;
  language: string;
  memoryLayers: string[];
  categories: string[];
  prompt: string;
  systemInstruction: string;
}

function buildSystemInstruction(mode: string): string {
  switch (mode) {
    case "documentation":
      return "Act as SYNTERRA Documentation AI.";
    case "translation":
      return "Act as SYNTERRA Translation AI.";
    case "audit":
      return "Act as SYNTERRA Audit AI.";
    case "creator":
      return "Act as SYNTERRA Creator AI.";
    case "philosophy":
      return "Act as SYNTERRA Philosophy AI.";
    default:
      return "Act as SYNTERRA AI.";
  }
}

/**
 * SYNTERRA Semantic Response Orchestrator
 */
export async function orchestrateSemanticResponse(
  input: string,
  options: SemanticResponseOrchestrationOptions = {}
): Promise<SemanticResponseOrchestrationResult> {
  const language = options.language ?? "en";
  const mode = options.mode ?? "documentation";

  const promptResult = await buildSemanticPrompt(input, { language });
  const memoryRoute = await routeSemanticMemory(input);

  return {
    input,
    mode,
    language,
    memoryLayers: memoryRoute.layers,
    categories: memoryRoute.categories,
    prompt: promptResult.prompt,
    systemInstruction: buildSystemInstruction(mode),
  };
}
