import { runCreationAssistant } from "./creationAssistantEngine";
import { SynterraLanguage } from "./socialTypes";

export interface WorkspaceCopilotRequest {
  workspaceId: string;
  userId: string;
  language: SynterraLanguage;
  objective: string;
}

export interface WorkspaceCopilotResponse {
  workspaceId: string;
  response: string;
  timestamp: string;
}

export async function runWorkspaceCopilot(
  input: WorkspaceCopilotRequest
): Promise<WorkspaceCopilotResponse> {
  const result = await runCreationAssistant({
    userId: input.userId,
    workspaceId: input.workspaceId,
    language: input.language,
    mode: "workspace_strategy",
    prompt: input.objective,
  });

  return {
    workspaceId: input.workspaceId,
    response: result.response,
    timestamp: result.timestamp,
  };
}
