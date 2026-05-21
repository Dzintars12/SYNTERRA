import { loadSynterraKnowledge } from "./loadSynterraKnowledge";

type SynterraConcept = {
  id: string;
  lv: string;
  en: string;
  category: string;
  definition_lv?: string;
  definition_en?: string;
  related?: string[];
};

type SynterraCoreConceptsFile = {
  version: string;
  date: string;
  status: string;
  concepts: SynterraConcept[];
};

export interface SemanticContextResult {
  input: string;
  matchedConcepts: SynterraConcept[];
  categories: string[];
  summary: string;
}

function normalizeText(value: string): string {
  return value.toLowerCase().trim();
}

function conceptMatchesInput(concept: SynterraConcept, input: string): boolean {
  const normalizedInput = normalizeText(input);

  const searchFields = [
    concept.lv,
    concept.en,
    concept.category,
    concept.definition_lv ?? "",
    concept.definition_en ?? "",
    ...(concept.related ?? []),
  ];

  return searchFields.some((field) =>
    normalizedInput.includes(normalizeText(field)) ||
    normalizeText(field).includes(normalizedInput)
  );
}

/**
 * SYNTERRA Semantic Context Engine
 */
export async function getSemanticContext(input: string): Promise<SemanticContextResult> {
  const knowledge = await loadSynterraKnowledge();
  const coreConcepts = knowledge.coreConcepts as SynterraCoreConceptsFile;

  const matchedConcepts = coreConcepts.concepts.filter((concept) =>
    conceptMatchesInput(concept, input)
  );

  const categories = Array.from(
    new Set(matchedConcepts.map((concept) => concept.category))
  );

  return {
    input,
    matchedConcepts,
    categories,
    summary:
      matchedConcepts.length > 0
        ? `Found ${matchedConcepts.length} SYNTERRA concept match(es).`
        : "No direct concept match found.",
  };
}
