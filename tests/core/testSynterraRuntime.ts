import { runSynterraAI } from "../../src/core/runSynterraAI";

async function testSynterraRuntime() {
  const result = await runSynterraAI("What is compilation in SYNTERRA?", {
    language: "en",
    mode: "philosophy",
  });

  console.log("SYNTERRA RUNTIME TEST RESULT");
  console.log("--------------------------------");
  console.log("Status:", result.status);
  console.log("Mode:", result.mode);
  console.log("Language:", result.language);
}

testSynterraRuntime().catch((error) => {
  console.error("SYNTERRA RUNTIME TEST FAILED");
  console.error(error);
  process.exit(1);
});
