export default function EvolutionPage() {
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
        Semantic Evolution
      </h1>

      <p style={{ opacity: 0.75, maxWidth: "920px" }}>
        Explore evolving semantic relationships, adaptive civilization memory,
        and emergent cognition patterns inside SYNTERRA.
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
          <h2>Semantic Evolution</h2>
          <p style={{ opacity: 0.7 }}>
            Track evolving semantic relationships and adaptive concept systems.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Adaptive Relationships</h2>
          <p style={{ opacity: 0.7 }}>
            Observe relationship strength changes across civilization memory.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Emergent Cognition</h2>
          <p style={{ opacity: 0.7 }}>
            Discover emergent semantic patterns synthesized from collective
            intelligence.
          </p>
        </div>
      </section>
    </main>
  );
}
