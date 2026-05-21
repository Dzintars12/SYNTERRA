export default function CivilizationMemoryPage() {
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
      <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
        Civilization Memory Explorer
      </h1>

      <p style={{ opacity: 0.75, maxWidth: "900px" }}>
        Explore semantic relationships, collaborative projects, creator
        interactions, and civilization-scale knowledge structures inside
        SYNTERRA.
      </p>

      <section
        style={{
          marginTop: "40px",
          padding: "24px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2>Semantic Graph</h2>

        <p style={{ opacity: 0.7 }}>
          Visualization systems for semantic graph rendering are being prepared.
        </p>

        <div
          style={{
            marginTop: "24px",
            height: "420px",
            borderRadius: "12px",
            border: "1px dashed rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.6,
          }}
        >
          Civilization Memory Graph View
        </div>
      </section>

      <section
        style={{
          marginTop: "32px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h3>Projects</h3>
          <p style={{ opacity: 0.7 }}>
            Track semantic evolution of collaborative projects.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h3>Creators</h3>
          <p style={{ opacity: 0.7 }}>
            Visualize creator collaboration relationships.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h3>Semantic Memory</h3>
          <p style={{ opacity: 0.7 }}>
            Explore semantic concepts and civilization knowledge structures.
          </p>
        </div>
      </section>
    </main>
  );
}
