import { MultilingualMessage } from "../core/multilingualCommunicationEngine";

export interface ChatParticipant {
  id: string;
  displayName: string;
  preferredLanguage: string;
}

export interface MultilingualChatRoom {
  id: string;
  workspaceId: string;
  title: string;
  participants: ChatParticipant[];
  messages: MultilingualMessage[];
}

export function createEmptyChatRoom(
  id: string,
  workspaceId: string,
  title: string
): MultilingualChatRoom {
  return {
    id,
    workspaceId,
    title,
    participants: [],
    messages: [],
  };
}
