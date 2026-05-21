import crypto from "node:crypto";
import { SynterraUserProfile } from "./socialTypes";

export interface SynterraSession {
  id: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
  status: "active" | "expired" | "revoked";
}

export interface SynterraCredentials {
  email: string;
  passwordHash: string;
}

export interface RegisteredUser {
  profile: SynterraUserProfile;
  credentials: SynterraCredentials;
}

export function createSession(userId: string): SynterraSession {
  const createdAt = new Date();
  const expiresAt = new Date(createdAt.getTime() + 1000 * 60 * 60 * 24 * 7);

  return {
    id: crypto.randomUUID(),
    userId,
    createdAt: createdAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    status: "active",
  };
}

export function validateSession(session: SynterraSession): boolean {
  if (session.status !== "active") {
    return false;
  }

  return new Date(session.expiresAt).getTime() > Date.now();
}

export function revokeSession(
  session: SynterraSession
): SynterraSession {
  return {
    ...session,
    status: "revoked",
  };
}
