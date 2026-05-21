import { NextResponse } from "next/server";
import { realtimeConfig } from "../../../src/server/realtimeConfig";

export async function GET() {
  return NextResponse.json({
    status: "active",
    provider: realtimeConfig.provider,
    endpoint: realtimeConfig.endpoint ?? null,
    channelPrefix: realtimeConfig.channelPrefix,
  });
}
