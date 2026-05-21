import { buildContextInjection } from "./contextInjectionEngine";
import {
  orchestrateSemanticResponse,
  SemanticResponseOrchestrationOptions,
} from "./semanticResponseOrchestrator";

export interface RunSynterraAgentOptions extends SemanticResponseOrchestrationOptions {
  maxContextResults?: number;
  minContextScore?: number;
}

export interface RunSynterraAgentResult {
  status: "success" | "error";
  timestamp: string;
  input: string;
  agentMode: string;
  language: string;
  contextInjection: string;
  systemInstruction: string;
  semanticPrompt: string;
  memoryLayers: string[];
  categories: string[];
  simulatedResponse: string;
}

function buildSimulatedAgentResponse(input: string, mode: string): string {
  return [
    "SYNTERRA AGENT RESPONSE FOUNDATION",
    "",
    `Mode: ${mode}`,
    `Input: ${input}`,
  ].join("\n");
}

/**
 * SYNTERRA Agent Runtime
 */
export async function runSynterraAgent(
  input: string,
  options: RunSynterraAgentOptions = {}
): Promise<RunSynterraAgentResult> {
  try {
    const mode = options.mode ?? "documentation";
    const language = options.language ?? "en";

    const contextInjection = await buildContextInjection(input, {
      maxResults: options.maxContextResults ?? 5,
      minScore: options.minContextScore ?? 0,
      language,
    });

    const orchestration = await orchestrateSemanticResponse(input, {
      language,
      mode,
    });

    return {
      status: "success",
      timestamp: new Date().toISOString(),
      input,
      agentMode: mode,
      language,
      contextInjection: contextInjection.injectedContext,
      systemInstruction: orchestration.systemInstruction,
      semanticPrompt: orchestration.prompt,
      memoryLayers: orchestration.memoryLayers,
      categories: orchestration.categories,
      simulatedResponse: buildSimulatedAgentResponse(input, mode),
    };
  } catch (error) {
    return {
      status: "error",
      timestamp: new Date().toISOString(),
      input,
      agentMode: options.mode ?? "documentation",
      language: options.language ?? "en",
      contextInjection: "",
      systemInstruction: "SYNTERRA agent runtime failed.",
      semanticPrompt:
        error instanceof Error ? error.message : "Unknown agent runtime error.",
      memoryLayers: [],
      categories: [],
      simulatedResponse: "No response generated due to runtime error.",
    };
  }
}
