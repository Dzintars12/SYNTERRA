import { prepareMemoryUpdate } from "../../src/core/memoryUpdateEngine";

async function testMemoryUpdateEngine() {
  const result = await prepareMemoryUpdate({
    source: "agent",
    input:
      "Explain how SYNTERRA preserves semantic meaning across AI systems.",
    output:
      "SYNTERRA preserves semantic meaning through semantic memory, vector retrieval, context injection, orchestration, and human-centered execution principles.",
    categories: ["AI", "knowledge", "civilization"],
    memoryLayers: [
      "core_concepts",
      "semantic_vectors",
      "project_memory",
    ],
  });

  console.log("SYNTERRA MEMORY UPDATE TEST");
  console.log("====================================");
  console.log("Memory ID:", result.id);
  console.log("Status:", result.status);
}

testMemoryUpdateEngine().catch((error) => {
  console.error("SYNTERRA MEMORY UPDATE TEST FAILED");
  console.error(error);
  process.exit(1);
});
