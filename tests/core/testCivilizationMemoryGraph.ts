import { buildCivilizationMemoryGraph } from "../../src/core/civilizationMemoryGraph";

async function testCivilizationMemoryGraph() {
  const graph = await buildCivilizationMemoryGraph();

  console.log("SYNTERRA CIVILIZATION MEMORY GRAPH TEST");
  console.log("====================================");
  console.log("Status:", graph.status);
  console.log("Total Nodes:", graph.totalNodes);
  console.log("Total Edges:", graph.totalEdges);
}

testCivilizationMemoryGraph().catch((error) => {
  console.error("SYNTERRA CIVILIZATION MEMORY GRAPH TEST FAILED");
  console.error(error);
  process.exit(1);
});
