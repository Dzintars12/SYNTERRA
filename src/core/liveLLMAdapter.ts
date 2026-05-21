import { runSynterraAgent } from "./runSynterraAgent";

export interface LiveLLMAdapterOptions {
  provider?: "openai" | "local" | "mock";
  model?: string;
  temperature?: number;
  maxTokens?: number;
  mode?: "documentation" | "translation" | "audit" | "creator" | "philosophy";
  language?: "lv" | "en";
}

export interface LiveLLMExecutionResult {
  status: "success" | "error";
  provider: string;
  model: string;
  timestamp: string;
  input: string;
  systemInstruction: string;
  semanticPrompt: string;
  contextInjection: string;
  finalPrompt: string;
  simulatedLLMResponse: string;
  note: string;
}

function buildFinalPrompt(
  systemInstruction: string,
  contextInjection: string,
  semanticPrompt: string,
  input: string
): string {
  return [
    "# SYSTEM INSTRUCTION",
    systemInstruction,
    "",
    contextInjection,
    "",
    semanticPrompt,
    "",
    "# USER INPUT",
    input,
  ].join("\n");
}

function simulateLLMExecution(input: string, provider: string): string {
  return [
    "SYNTERRA LIVE LLM EXECUTION FOUNDATION",
    "",
    `Provider: ${provider}`,
    `Input: ${input}`,
  ].join("\n");
}

/**
 * SYNTERRA Live LLM Adapter
 */
export async function executeLiveLLM(
  input: string,
  options: LiveLLMAdapterOptions = {}
): Promise<LiveLLMExecutionResult> {
  try {
    const provider = options.provider ?? "mock";
    const model = options.model ?? "SYN_FOUNDATION_MODEL_V1";

    const agentRuntime = await runSynterraAgent(input, {
      language: options.language ?? "en",
      mode: options.mode ?? "documentation",
    });

    const finalPrompt = buildFinalPrompt(
      agentRuntime.systemInstruction,
      agentRuntime.contextInjection,
      agentRuntime.semanticPrompt,
      input
    );

    return {
      status: "success",
      provider,
      model,
      timestamp: new Date().toISOString(),
      input,
      systemInstruction: agentRuntime.systemInstruction,
      semanticPrompt: agentRuntime.semanticPrompt,
      contextInjection: agentRuntime.contextInjection,
      finalPrompt,
      simulatedLLMResponse: simulateLLMExecution(input, provider),
      note: "Foundation simulation mode active.",
    };
  } catch (error) {
    return {
      status: "error",
      provider: options.provider ?? "mock",
      model: options.model ?? "SYN_FOUNDATION_MODEL_V1",
      timestamp: new Date().toISOString(),
      input,
      systemInstruction: "SYNTERRA live execution failed.",
      semanticPrompt:
        error instanceof Error ? error.message : "Unknown execution error.",
      contextInjection: "",
      finalPrompt: "",
      simulatedLLMResponse: "No execution response generated.",
      note: "Execution pipeline failed.",
    };
  }
}
