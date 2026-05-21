export default function CreatorFeedPage() {
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
        Creator Feed
      </h1>

      <p style={{ opacity: 0.75, maxWidth: "900px" }}>
        Explore collaborative ideas, semantic discoveries, AI-assisted projects,
        and evolving civilization memory across the SYNTERRA network.
      </p>

      <section
        style={{
          marginTop: "32px",
          display: "grid",
          gap: "20px",
        }}
      >
        {[1, 2, 3].map((item) => (
          <article
            key={item}
            style={{
              padding: "24px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ opacity: 0.6, marginBottom: "12px" }}>
              Workspace · Semantic Collaboration
            </div>

            <h2 style={{ marginTop: 0 }}>
              Civilization Memory Contribution #{item}
            </h2>

            <p style={{ opacity: 0.78 }}>
              AI-assisted collaborative creation is evolving semantic structures
              across multilingual creator workspaces.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
