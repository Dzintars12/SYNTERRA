import {
  createPersistentMemoryRecord,
  loadPersistentMemory,
} from "../../src/core/persistentMemoryStore";

async function testPersistentMemoryStore() {
  const record = await createPersistentMemoryRecord(
    "conversation",
    "runtime-test",
    "SYNTERRA persistent memory test execution.",
    {
      layer: "persistent-memory",
    }
  );

  const memory = await loadPersistentMemory();

  console.log("SYNTERRA PERSISTENT MEMORY TEST");
  console.log("====================================");
  console.log("Created Record:", record.id);
  console.log("Total Memory Records:", memory.length);
}

testPersistentMemoryStore().catch((error) => {
  console.error("SYNTERRA PERSISTENT MEMORY TEST FAILED");
  console.error(error);
  process.exit(1);
});
