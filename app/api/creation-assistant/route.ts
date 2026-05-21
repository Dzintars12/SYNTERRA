import { NextRequest, NextResponse } from "next/server";
import { runCreationAssistant } from "../../../../src/core/creationAssistantEngine";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = await runCreationAssistant({
    userId: body.userId,
    workspaceId: body.workspaceId,
    projectId: body.projectId,
    language: body.language ?? "en",
    mode: body.mode ?? "project_idea",
    prompt: body.prompt ?? "",
  });

  return NextResponse.json(result);
}
