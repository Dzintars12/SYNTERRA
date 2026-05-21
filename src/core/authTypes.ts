import { SynterraLanguage, SynterraUserRole } from "./socialTypes";

export interface SynterraAuthUser {
  id: string;
  email: string;
  username: string;
  displayName: string;
  preferredLanguage: SynterraLanguage;
  roles: SynterraUserRole[];
  createdAt: string;
  updatedAt: string;
}

export interface SynterraSession {
  id: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
  status: "active" | "expired" | "revoked";
}

export interface SynterraAuthState {
  user: SynterraAuthUser | null;
  session: SynterraSession | null;
  authenticated: boolean;
}

export interface RegisterUserInput {
  email: string;
  username: string;
  displayName: string;
  preferredLanguage: SynterraLanguage;
}

export interface LoginUserInput {
  email: string;
}
