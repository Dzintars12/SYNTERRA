import crypto from "node:crypto";
import {
  LoginUserInput,
  RegisterUserInput,
  SynterraAuthState,
  SynterraAuthUser,
  SynterraSession,
} from "./authTypes";

function createSession(userId: string): SynterraSession {
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

export function registerUser(
  input: RegisterUserInput
): SynterraAuthUser {
  const timestamp = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    email: input.email,
    username: input.username,
    displayName: input.displayName,
    preferredLanguage: input.preferredLanguage,
    roles: ["creator"],
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export function loginUser(
  user: SynterraAuthUser,
  _input: LoginUserInput
): SynterraAuthState {
  const session = createSession(user.id);

  return {
    user,
    session,
    authenticated: true,
  };
}

export function logoutUser(): SynterraAuthState {
  return {
    user: null,
    session: null,
    authenticated: false,
  };
}
