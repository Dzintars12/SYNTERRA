import crypto from "node:crypto";
import { createPersistentMemoryRecord } from "./persistentMemoryStore";
import { SynterraLanguage } from "./socialTypes";

export type CollaborationEventType =
  | "workspace_joined"
  | "workspace_left"
  | "project_created"
  | "creative_post_created"
  | "semantic_update"
  | "ai_assist_requested"
  | "memory_synced";

export interface RealtimeCollaborationEvent {
  id: string;
  workspaceId: string;
  projectId?: string;
  actorId: string;
  type: CollaborationEventType;
  language: SynterraLanguage;
  content: string;
  semanticTags: string[];
  timestamp: string;
}

export interface RealtimeWorkspaceState {
  workspaceId: string;
  activeUserIds: string[];
  eventIds: string[];
  lastEventAt?: string;
  semanticTags: string[];
}

export async function createCollaborationEvent(input: {
  workspaceId: string;
  projectId?: string;
  actorId: string;
  type: CollaborationEventType;
  language: SynterraLanguage;
  content: string;
  semanticTags?: string[];
}): Promise<RealtimeCollaborationEvent> {
  const event: RealtimeCollaborationEvent = {
    id: crypto.randomUUID(),
    workspaceId: input.workspaceId,
    projectId: input.projectId,
    actorId: input.actorId,
    type: input.type,
    language: input.language,
    content: input.content,
    semanticTags: input.semanticTags ?? [],
    timestamp: new Date().toISOString(),
  };

  await createPersistentMemoryRecord(
    "collaboration_event",
    "realtimeCollaborationEngine",
    event.content,
    {
      eventId: event.id,
      workspaceId: event.workspaceId,
      projectId: event.projectId,
      actorId: event.actorId,
      type: event.type,
      semanticTags: event.semanticTags,
    }
  );

  return event;
}

export function applyCollaborationEvent(
  state: RealtimeWorkspaceState,
  event: RealtimeCollaborationEvent
): RealtimeWorkspaceState {
  const activeUserIds = new Set(state.activeUserIds);

  if (event.type === "workspace_joined") {
    activeUserIds.add(event.actorId);
  }

  if (event.type === "workspace_left") {
    activeUserIds.delete(event.actorId);
  }

  return {
    workspaceId: state.workspaceId,
    activeUserIds: Array.from(activeUserIds),
    eventIds: Array.from(new Set([...state.eventIds, event.id])),
    lastEventAt: event.timestamp,
    semanticTags: Array.from(
      new Set([...state.semanticTags, ...event.semanticTags])
    ),
  };
}

export function createEmptyWorkspaceState(
  workspaceId: string
): RealtimeWorkspaceState {
  return {
    workspaceId,
    activeUserIds: [],
    eventIds: [],
    semanticTags: [],
  };
}
