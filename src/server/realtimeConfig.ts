export interface RealtimeConfig {
  provider: "local" | "websocket" | "supabase";
  endpoint?: string;
  channelPrefix: string;
}

export const realtimeConfig: RealtimeConfig = {
  provider: (process.env.REALTIME_PROVIDER as
    | "local"
    | "websocket"
    | "supabase") ?? "local",
  endpoint: process.env.REALTIME_ENDPOINT,
  channelPrefix: process.env.SYNTERRA_REALTIME_CHANNEL_PREFIX ?? "synterra",
};
