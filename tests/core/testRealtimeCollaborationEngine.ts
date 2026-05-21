import {
  applyCollaborationEvent,
  createCollaborationEvent,
  createEmptyWorkspaceState,
} from "../../src/core/realtimeCollaborationEngine";

async function testRealtimeCollaborationEngine() {
  const workspaceId = "workspace-synterra";

  let state = createEmptyWorkspaceState(workspaceId);

  const joinedEvent = await createCollaborationEvent({
    workspaceId,
    actorId: "user-dzintars",
    type: "workspace_joined",
    language: "lv",
    content: "Dzintars joined the workspace.",
    semanticTags: ["collaboration", "workspace"],
  });

  state = applyCollaborationEvent(state, joinedEvent);

  const projectEvent = await createCollaborationEvent({
    workspaceId,
    projectId: "project-synterra-core",
    actorId: "user-dzintars",
    type: "project_created",
    language: "lv",
    content: "SYNTERRA core project initialized.",
    semanticTags: ["project", "runtime"],
  });

  state = applyCollaborationEvent(state, projectEvent);

  console.log("SYNTERRA REALTIME COLLABORATION TEST");
  console.log("====================================");
  console.log("Workspace:", state.workspaceId);
  console.log("Active Users:", state.activeUserIds.length);
  console.log("Events:", state.eventIds.length);
  console.log("Semantic Tags:", state.semanticTags.join(", "));
}

testRealtimeCollaborationEngine().catch((error) => {
  console.error("SYNTERRA REALTIME COLLABORATION TEST FAILED");
  console.error(error);
  process.exit(1);
});
