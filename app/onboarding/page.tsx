export default function OnboardingPage() {
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
        Welcome to SYNTERRA
      </h1>

      <p style={{ opacity: 0.75, maxWidth: "820px" }}>
        Begin your journey inside a multilingual creative civilization platform
        where humans and AI collaboratively build collective meaning.
      </p>

      <section
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Create</h2>
          <p style={{ opacity: 0.7 }}>
            Build projects, ideas, and collaborative civilization memory.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Collaborate</h2>
          <p style={{ opacity: 0.7 }}>
            Work together across languages with realtime AI assistance.
          </p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2>Preserve Meaning</h2>
          <p style={{ opacity: 0.7 }}>
            Contribute to evolving civilization memory and semantic knowledge.
          </p>
        </div>
      </section>

      <section
        style={{
          marginTop: "40px",
          padding: "24px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <h2>Creator Path</h2>

        <ol style={{ opacity: 0.75, lineHeight: 1.8 }}>
          <li>Create your creator identity</li>
          <li>Join or create a workspace</li>
          <li>Start a collaborative project</li>
          <li>Use AI-assisted creation systems</li>
          <li>Contribute to civilization memory</li>
        </ol>
      </section>
    </main>
  );
}
