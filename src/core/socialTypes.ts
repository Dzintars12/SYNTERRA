export type SynterraLanguage = "lv" | "en" | "ru" | "no" | "es" | "de" | "fr";

export interface SynterraUserProfile {
  id: string;
  displayName: string;
  username: string;
  preferredLanguage: SynterraLanguage;
  bio?: string;
  roles: SynterraUserRole[];
  createdAt: string;
  updatedAt: string;
}

export type SynterraUserRole =
  | "creator"
  | "builder"
  | "researcher"
  | "moderator"
  | "admin";

export interface SynterraWorkspace {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  language: SynterraLanguage;
  visibility: "private" | "shared" | "public";
  memberIds: string[];
  projectIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SynterraProject {
  id: string;
  workspaceId: string;
  title: string;
  description?: string;
  status: "idea" | "active" | "paused" | "archived";
  creatorIds: string[];
  semanticTags: string[];
  memoryRecordIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SynterraCreativePost {
  id: string;
  authorId: string;
  workspaceId?: string;
  projectId?: string;
  language: SynterraLanguage;
  content: string;
  semanticTags: string[];
  visibility: "private" | "workspace" | "public";
  createdAt: string;
  updatedAt: string;
}
