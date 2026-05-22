export default function AppPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: "48px", fontFamily: "Arial, sans-serif" }}>
      <h1>SYNTERRA App</h1>
      <p>First live application space.</p>
      <p><a href="/feed" style={{ color: "white" }}>Open feed</a></p>
      <p><a href="/memory" style={{ color: "white" }}>Open memory</a></p>
      <p><a href="/governance" style={{ color: "white" }}>Open governance</a></p>
    </main>
  );
}
