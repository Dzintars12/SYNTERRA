import { runSynterraAgent } from "../../src/core/runSynterraAgent";

async function testSynterraAgent() {
  const result = await runSynterraAgent(
    "Explain the relationship between compilation, civilization, and AI in SYNTERRA.",
    {
      language: "en",
      mode: "philosophy",
      maxContextResults: 3,
      minContextScore: 0.2,
    }
  );

  console.log("SYNTERRA AGENT TEST RESULT");
  console.log("====================================");
  console.log("Status:", result.status);
  console.log("Agent Mode:", result.agentMode);
  console.log("Language:", result.language);
}

testSynterraAgent().catch((error) => {
  console.error("SYNTERRA AGENT TEST FAILED");
  console.error(error);
  process.exit(1);
});
