import { loadSynterraKnowledge } from "./loadSynterraKnowledge";

export interface CivilizationMemoryNode {
  id: string;
  label: string;
  category: string;
  related: string[];
}

export interface CivilizationMemoryEdge {
  source: string;
  target: string;
  type: "semantic_relation" | "concept_dependency" | "memory_link";
}

export interface CivilizationMemoryGraph {
  nodes: CivilizationMemoryNode[];
  edges: CivilizationMemoryEdge[];
  totalNodes: number;
  totalEdges: number;
  status: "foundation" | "expanded" | "civilization_scale";
}

type SynterraConcept = {
  id: string;
  lv: string;
  en: string;
  category: string;
  related?: string[];
};

type SynterraCoreConceptsFile = {
  concepts: SynterraConcept[];
};

/**
 * SYNTERRA Civilization Memory Graph
 */
export async function buildCivilizationMemoryGraph(): Promise<CivilizationMemoryGraph> {
  const knowledge = await loadSynterraKnowledge();
  const coreConcepts = knowledge.coreConcepts as SynterraCoreConceptsFile;

  const nodes: CivilizationMemoryNode[] = coreConcepts.concepts.map(
    (concept) => ({
      id: concept.id,
      label: concept.en,
      category: concept.category,
      related: concept.related ?? [],
    })
  );

  const edges: CivilizationMemoryEdge[] = [];

  for (const concept of coreConcepts.concepts) {
    for (const relatedConcept of concept.related ?? []) {
      const targetNode = coreConcepts.concepts.find(
        (item) =>
          item.id === relatedConcept ||
          item.en === relatedConcept ||
          item.lv === relatedConcept
      );

      if (targetNode) {
        edges.push({
          source: concept.id,
          target: targetNode.id,
          type: "semantic_relation",
        });
      }
    }
  }

  return {
    nodes,
    edges,
    totalNodes: nodes.length,
    totalEdges: edges.length,
    status: "foundation",
  };
}
