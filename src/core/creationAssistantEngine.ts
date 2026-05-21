import { executeLiveLLM } from "./liveLLMAdapter";
import { createPersistentMemoryRecord } from "./persistentMemoryStore";
import { SynterraLanguage } from "./socialTypes";

export type CreationMode =
  | "project_idea"
  | "document_generation"
  | "creative_writing"
  | "workspace_strategy"
  | "semantic_summary";

export interface CreationAssistantInput {
  userId: string;
  workspaceId?: string;
  projectId?: string;
  language: SynterraLanguage;
  mode: CreationMode;
  prompt: string;
}

export interface CreationAssistantResult {
  status: "success" | "error";
  mode: CreationMode;
  response: string;
  memoryRecordId?: string;
  timestamp: string;
}

function buildCreationPrompt(input: CreationAssistantInput): string {
  return [
    "You are the SYNTERRA Creation Assistant.",
    "Help humans create, structure, preserve, and evolve meaning.",
    "Do not replace the creator. Strengthen the creator.",
    "",
    `Mode: ${input.mode}`,
    `Language: ${input.language}`,
    "",
    "Creator request:",
    input.prompt,
  ].join("\n");
}

export async function runCreationAssistant(
  input: CreationAssistantInput
): Promise<CreationAssistantResult> {
  try {
    const execution = await executeLiveLLM(buildCreationPrompt(input), {
      provider: "openai",
      mode: "creator",
      language: input.language === "lv" ? "lv" : "en",
      temperature: 0.7,
      maxTokens: 1600,
    });

    const memoryRecord = await createPersistentMemoryRecord(
      "creation_assistant_output",
      "creationAssistantEngine",
      execution.response,
      {
        userId: input.userId,
        workspaceId: input.workspaceId,
        projectId: input.projectId,
        mode: input.mode,
        language: input.language,
      }
    );

    return {
      status: "success",
      mode: input.mode,
      response: execution.response,
      memoryRecordId: memoryRecord.id,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      status: "error",
      mode: input.mode,
      response: error instanceof Error ? error.message : "Unknown creation error.",
      timestamp: new Date().toISOString(),
    };
  }
}
