import {
  orchestrateSemanticResponse,
  SemanticResponseOrchestrationOptions,
} from "./semanticResponseOrchestrator";

export interface RunSynterraAIResult {
  status: "success" | "error";
  timestamp: string;
  input: string;
  mode: string;
  language: string;
  memoryLayers: string[];
  categories: string[];
  systemInstruction: string;
  semanticPrompt: string;
}

/**
 * SYNTERRA AI Runtime Gateway
 */
export async function runSynterraAI(
  input: string,
  options: SemanticResponseOrchestrationOptions = {}
): Promise<RunSynterraAIResult> {
  try {
    const orchestration = await orchestrateSemanticResponse(input, options);

    return {
      status: "success",
      timestamp: new Date().toISOString(),
      input,
      mode: orchestration.mode,
      language: orchestration.language,
      memoryLayers: orchestration.memoryLayers,
      categories: orchestration.categories,
      systemInstruction: orchestration.systemInstruction,
      semanticPrompt: orchestration.prompt,
    };
  } catch (error) {
    return {
      status: "error",
      timestamp: new Date().toISOString(),
      input,
      mode: options.mode ?? "documentation",
      language: options.language ?? "en",
      memoryLayers: [],
      categories: [],
      systemInstruction:
        "SYNTERRA runtime error: semantic orchestration failed.",
      semanticPrompt:
        error instanceof Error
          ? error.message
          : "Unknown runtime error.",
    };
  }
}
