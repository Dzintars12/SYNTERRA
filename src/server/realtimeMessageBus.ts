import crypto from "node:crypto";

export interface RealtimeMessage {
  id: string;
  channel: string;
  type: string;
  payload: unknown;
  timestamp: string;
}

export type RealtimeSubscriber = (
  message: RealtimeMessage
) => void | Promise<void>;

const channelSubscribers = new Map<string, Set<RealtimeSubscriber>>();

export function subscribeToChannel(
  channel: string,
  subscriber: RealtimeSubscriber
): () => void {
  const subscribers = channelSubscribers.get(channel) ?? new Set();

  subscribers.add(subscriber);

  channelSubscribers.set(channel, subscribers);

  return () => {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      channelSubscribers.delete(channel);
    }
  };
}

export async function publishRealtimeMessage(input: {
  channel: string;
  type: string;
  payload: unknown;
}): Promise<RealtimeMessage> {
  const message: RealtimeMessage = {
    id: crypto.randomUUID(),
    channel: input.channel,
    type: input.type,
    payload: input.payload,
    timestamp: new Date().toISOString(),
  };

  const subscribers = channelSubscribers.get(input.channel);

  if (subscribers) {
    for (const subscriber of subscribers) {
      await subscriber(message);
    }
  }

  return message;
}
