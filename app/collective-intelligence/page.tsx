export default function CollectiveIntelligencePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
        Collective Intelligence
      </h1>

      <p style={{ opacity: 0.75, maxWidth: "920px" }}>
        Explore collaborative reasoning, semantic consensus systems, and
        civilization-scale knowledge synthesis emerging from collective creator
        interaction.
      </p>

      <section
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Collective Reasoning</h2>
          <p style={{ opacity: 0.7 }}>
            Collaborative semantic reasoning across creators and AI systems.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Semantic Consensus</h2>
          <p style={{ opacity: 0.7 }}>
            Emergent consensus structures derived from collaborative meaning.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Collective Synthesis</h2>
          <p style={{ opacity: 0.7 }}>
            Civilization-scale synthesis of collaborative semantic knowledge.
          </p>
        </div>
      </section>
    </main>
  );
}
