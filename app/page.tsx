export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "48px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
        SYNTERRA
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "900px" }}>
        A creative social civilization platform where humans and AI
        collaboratively create, structure, preserve, and evolve meaning.
      </p>

      <section style={{ marginTop: "48px" }}>
        <h2>Core Systems</h2>

        <ul>
          <li>AI Runtime Execution</li>
          <li>Persistent Semantic Memory</li>
          <li>Multilingual Communication</li>
          <li>Realtime Collaboration</li>
          <li>Creator Workspaces</li>
          <li>Civilization Memory</li>
        </ul>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2>Platform Status</h2>

        <p>
          Frontend foundation initialized. Runtime architecture active.
        </p>
      </section>
    </main>
  );
}
