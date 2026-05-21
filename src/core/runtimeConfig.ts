export interface SynterraRuntimeConfig {
  openAI: {
    apiKey: string;
    model: string;
    embeddingModel: string;
  };
  runtime: {
    mode: string;
    defaultLanguage: string;
    logLevel: string;
  };
  memory: {
    provider: string;
    vectorProvider: string;
  };
}

function required(name: string, fallback = ""): string {
  return process.env[name] ?? fallback;
}

export const runtimeConfig: SynterraRuntimeConfig = {
  openAI: {
    apiKey: required("OPENAI_API_KEY"),
    model: required("OPENAI_MODEL", "gpt-5.5"),
    embeddingModel: required(
      "OPENAI_EMBEDDING_MODEL",
      "text-embedding-3-large"
    ),
  },
  runtime: {
    mode: required("SYNTERRA_RUNTIME_MODE", "development"),
    defaultLanguage: required("SYNTERRA_DEFAULT_LANGUAGE", "en"),
    logLevel: required("SYNTERRA_LOG_LEVEL", "info"),
  },
  memory: {
    provider: required("SYNTERRA_MEMORY_PROVIDER", "local"),
    vectorProvider: required("SYNTERRA_VECTOR_PROVIDER", "local"),
  },
};
