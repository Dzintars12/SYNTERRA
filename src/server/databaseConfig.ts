export interface DatabaseConfig {
  provider: "local" | "postgres" | "supabase";
  databaseUrl?: string;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
}

export const databaseConfig: DatabaseConfig = {
  provider: (process.env.SYNTERRA_DATABASE_PROVIDER as
    | "local"
    | "postgres"
    | "supabase") ?? "local",
  databaseUrl: process.env.DATABASE_URL,
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
};
