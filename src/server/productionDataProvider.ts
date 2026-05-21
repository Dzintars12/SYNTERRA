import { databaseConfig } from "./databaseConfig";

export interface ProductionDataProviderStatus {
  provider: string;
  configured: boolean;
  databaseUrlConfigured: boolean;
  supabaseConfigured: boolean;
}

export function getProductionDataProviderStatus(): ProductionDataProviderStatus {
  return {
    provider: databaseConfig.provider,
    configured:
      databaseConfig.provider === "local" ||
      Boolean(databaseConfig.databaseUrl) ||
      Boolean(databaseConfig.supabaseUrl),
    databaseUrlConfigured: Boolean(databaseConfig.databaseUrl),
    supabaseConfigured: Boolean(
      databaseConfig.supabaseUrl && databaseConfig.supabaseAnonKey
    ),
  };
}

export function assertProductionDataProviderReady(): void {
  const status = getProductionDataProviderStatus();

  if (!status.configured) {
    throw new Error(
      "SYNTERRA production data provider is not configured."
    );
  }
}
