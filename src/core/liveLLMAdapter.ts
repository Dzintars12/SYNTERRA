import OpenAI from "openai";
import { runSynterraAgent } from "./runSynterraAgent";
import { runtimeConfig } from "./runtimeConfig";

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
  response: string;
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

async function executeOpenAI(
  prompt: string,
  model: string,
  temperature: number,
  maxTokens: number
): Promise<string> {
  const client = new OpenAI({
    apiKey: runtimeConfig.openAI.apiKey,
  });

  const response = await client.responses.create({
    model,
    input: prompt,
    temperature,
    max_output_tokens: maxTokens,
  });

  return response.output_text || "";
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
    const provider = options.provider ?? "openai";
    const model = options.model ?? runtimeConfig.openAI.model;

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

    let response = "";
    let note = "";

    if (provider === "openai" && runtimeConfig.openAI.apiKey) {
      response = await executeOpenAI(
        finalPrompt,
        model,
        options.temperature ?? 0.7,
        options.maxTokens ?? 1200
      );

      note = "Live OpenAI execution active.";
    } else {
      response = simulateLLMExecution(input, provider);
      note = "Fallback simulation mode active.";
    }

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
      response,
      note,
    };
  } catch (error) {
    return {
      status: "error",
      provider: options.provider ?? "openai",
      model: options.model ?? runtimeConfig.openAI.model,
      timestamp: new Date().toISOString(),
      input,
      systemInstruction: "SYNTERRA live execution failed.",
      semanticPrompt:
        error instanceof Error ? error.message : "Unknown execution error.",
      contextInjection: "",
      finalPrompt: "",
      response: "No execution response generated.",
      note: "Execution pipeline failed.",
    };
  }
}
