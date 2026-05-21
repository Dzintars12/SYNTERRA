export interface SemanticGraphNode {
  id: string;
  label: string;
  type: string;
  relatedNodeIds: string[];
  semanticTags: string[];
}

const graphNodes = new Map<string, SemanticGraphNode>();

export async function addSemanticGraphNode(node: SemanticGraphNode) {
  graphNodes.set(node.id, node);
}

export async function getSemanticGraphNode(id: string) {
  return graphNodes.get(id) ?? null;
}

export async function listSemanticGraphNodes() {
  return Array.from(graphNodes.values());
}
