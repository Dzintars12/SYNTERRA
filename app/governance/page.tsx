export default function GovernancePage() {
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
        Governance & Civilization Protocols
      </h1>

      <p style={{ opacity: 0.75, maxWidth: "920px" }}>
        Explore collaborative governance, semantic moderation, civilization
        ethics, and distributed decision systems inside SYNTERRA.
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
          <h2>Governance Proposals</h2>
          <p style={{ opacity: 0.7 }}>
            Collaborative proposals for evolving civilization systems.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Semantic Moderation</h2>
          <p style={{ opacity: 0.7 }}>
            Meaning-aware moderation and collaborative review systems.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Civilization Ethics</h2>
          <p style={{ opacity: 0.7 }}>
            Shared principles for collaborative semantic civilization systems.
          </p>
        </div>
      </section>
    </main>
  );
}
