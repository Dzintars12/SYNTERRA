export interface CivilizationPrinciple {
  id: string;
  title: string;
  description: string;
  semanticTags: string[];
}

export interface ModerationSignal {
  id: string;
  sourceId: string;
  signalType: "warning" | "review" | "consensus_required";
  description: string;
  createdAt: string;
}

const civilizationPrinciples: CivilizationPrinciple[] = [
  {
    id: "meaning-preservation",
    title: "Meaning Preservation",
    description:
      "Human meaning and collaborative creation should be preserved.",
    semanticTags: ["meaning", "memory", "creation"],
  },
  {
    id: "multilingual-understanding",
    title: "Multilingual Understanding",
    description:
      "People should collaborate across languages without losing semantic meaning.",
    semanticTags: ["language", "translation", "collaboration"],
  },
];

export function listCivilizationPrinciples(): CivilizationPrinciple[] {
  return civilizationPrinciples;
}
