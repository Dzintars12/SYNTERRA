import crypto from "node:crypto";
import {
  SynterraProject,
  SynterraUserProfile,
  SynterraWorkspace,
} from "./socialTypes";

export function createUserProfile(
  displayName: string,
  username: string,
  preferredLanguage: SynterraUserProfile["preferredLanguage"]
): SynterraUserProfile {
  const timestamp = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    displayName,
    username,
    preferredLanguage,
    roles: ["creator"],
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export function createWorkspace(
  ownerId: string,
  name: string,
  language: SynterraWorkspace["language"]
): SynterraWorkspace {
  const timestamp = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    name,
    ownerId,
    language,
    visibility: "shared",
    memberIds: [ownerId],
    projectIds: [],
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export function createProject(
  workspaceId: string,
  creatorId: string,
  title: string
): SynterraProject {
  const timestamp = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    workspaceId,
    title,
    status: "idea",
    creatorIds: [creatorId],
    semanticTags: [],
    memoryRecordIds: [],
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}
