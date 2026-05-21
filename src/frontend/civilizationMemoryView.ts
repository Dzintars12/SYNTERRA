export interface CivilizationMemoryNodeView {
  id: string;
  label: string;
  type: string;
  connections: string[];
  activityLevel: number;
}

export interface CivilizationMemoryConnection {
  source: string;
  target: string;
  relationship: string;
}

export interface CivilizationMemoryGraphView {
  nodes: CivilizationMemoryNodeView[];
  connections: CivilizationMemoryConnection[];
}

export function createEmptyCivilizationMemoryView(): CivilizationMemoryGraphView {
  return {
    nodes: [],
    connections: [],
  };
}
