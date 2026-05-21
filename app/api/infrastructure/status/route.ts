import { NextResponse } from "next/server";
import { getProductionDataProviderStatus } from "../../../../src/server/productionDataProvider";
import { realtimeConfig } from "../../../../src/server/realtimeConfig";

export async function GET() {
  const providerStatus = getProductionDataProviderStatus();

  return NextResponse.json({
    status: "success",
    infrastructure: {
      database: providerStatus,
      realtime: {
        provider: realtimeConfig.provider,
        configured: Boolean(realtimeConfig.endpoint),
      },
      deployment: {
        environment: process.env.NODE_ENV ?? "development",
      },
    },
  });
}
