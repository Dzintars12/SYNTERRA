export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050816",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "32px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0 }}>SYNTERRA Login</h1>

        <p style={{ opacity: 0.7 }}>
          Access the creative social civilization platform.
        </p>

        <div style={{ marginTop: "24px" }}>
          <label>Email</label>
          <input
            type="email"
            style={{
              width: "100%",
              marginTop: "8px",
              marginBottom: "16px",
              padding: "12px",
              borderRadius: "8px",
            }}
          />

          <label>Password</label>
          <input
            type="password"
            style={{
              width: "100%",
              marginTop: "8px",
              marginBottom: "24px",
              padding: "12px",
              borderRadius: "8px",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Enter SYNTERRA
          </button>
        </div>
      </div>
    </main>
  );
}
