import { SynterraUserProfile } from "../core/socialTypes";

const users = new Map<string, SynterraUserProfile>();

export async function saveUser(
  profile: SynterraUserProfile
): Promise<void> {
  users.set(profile.id, profile);
}

export async function getUserById(
  id: string
): Promise<SynterraUserProfile | null> {
  return users.get(id) ?? null;
}

export async function listUsers(): Promise<SynterraUserProfile[]> {
  return Array.from(users.values());
}
