import crypto from "node:crypto";
import { executeLiveLLM } from "./liveLLMAdapter";
import { SynterraLanguage } from "./socialTypes";

export interface MultilingualMessage {
  id: string;
  authorId: string;
  workspaceId?: string;
  sourceLanguage: SynterraLanguage;
  targetLanguages: SynterraLanguage[];
  originalContent: string;
  translatedContent: Partial<Record<SynterraLanguage, string>>;
  semanticTags: string[];
  timestamp: string;
}

async function translateSemanticContent(
  content: string,
  sourceLanguage: SynterraLanguage,
  targetLanguage: SynterraLanguage
): Promise<string> {
  const translationPrompt = [
    "Translate the following content semantically.",
    "Preserve meaning, context, tone, and intent.",
    `Source language: ${sourceLanguage}`,
    `Target language: ${targetLanguage}`,
    "",
    content,
  ].join("\n");

  const execution = await executeLiveLLM(translationPrompt, {
    provider: "openai",
    mode: "translation",
    language: targetLanguage === "lv" ? "lv" : "en",
    temperature: 0.2,
  });

  return execution.response;
}

export async function createMultilingualMessage(
  authorId: string,
  content: string,
  sourceLanguage: SynterraLanguage,
  targetLanguages: SynterraLanguage[]
): Promise<MultilingualMessage> {
  const translatedContent: Partial<Record<SynterraLanguage, string>> = {};

  for (const language of targetLanguages) {
    if (language === sourceLanguage) {
      translatedContent[language] = content;
      continue;
    }

    translatedContent[language] = await translateSemanticContent(
      content,
      sourceLanguage,
      language
    );
  }

  return {
    id: crypto.randomUUID(),
    authorId,
    sourceLanguage,
    targetLanguages,
    originalContent: content,
    translatedContent,
    semanticTags: [],
    timestamp: new Date().toISOString(),
  };
}
