export default function HomePage() {
  const orbitItems = [
    { label: "Knowledge", icon: "□", angle: 0 },
    { label: "World", icon: "◎", angle: 30 },
    { label: "Life", icon: "♧", angle: 60 },
    { label: "Heart", icon: "♡", angle: 90 },
    { label: "Alliance", icon: "◇", angle: 120 },
    { label: "Mind", icon: "◌", angle: 150 },
    { label: "Growth", icon: "⌁", angle: 180 },
    { label: "Consciousness", icon: "△", angle: 210 },
    { label: "Evolution", icon: "↗", angle: 240 },
    { label: "Science", icon: "⌬", angle: 270 },
    { label: "Care", icon: "+", angle: 300 },
    { label: "Dialogue", icon: "…", angle: 330 },
  ];

  return (
    <main className="synterra-home">
      <style>{`
        .synterra-home {
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at center, rgba(245, 180, 85, 0.16), transparent 32%),
            radial-gradient(circle at center, rgba(255, 210, 120, 0.08), transparent 54%),
            #030303;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
        }

        .synterra-field {
          position: absolute;
          inset: -20%;
          background-image:
            radial-gradient(rgba(255, 210, 130, 0.18) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: 0.12;
        }

        .synterra-symbol-wrap {
          position: absolute;
          width: min(78vw, 620px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 48px rgba(244, 184, 88, 0.26));
        }

        .synterra-symbol {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 999px;
          border: 1px solid rgba(255, 203, 120, 0.68);
          box-shadow:
            0 0 32px rgba(255, 195, 95, 0.52),
            inset 0 0 42px rgba(255, 195, 95, 0.14);
          animation: synterraRotate 90s linear infinite;
        }

        .synterra-symbol::before,
        .synterra-symbol::after {
          content: "";
          position: absolute;
          inset: 11%;
          border-radius: 999px;
          border: 1px solid rgba(255, 203, 120, 0.18);
        }

        .synterra-symbol::after {
          inset: 24%;
          border-color: rgba(255, 203, 120, 0.12);
        }

        .synterra-light {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 26px;
          height: 26px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: #ffe3a3;
          box-shadow:
            0 0 22px rgba(255, 226, 163, 1),
            0 0 82px rgba(255, 189, 81, 0.72);
          animation: synterraPulse 5s ease-in-out infinite;
        }

        .synterra-orbit-item {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 56px;
          height: 56px;
          margin: -28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 210, 138, 0.86);
          font-size: 28px;
          transform: rotate(var(--angle)) translate(252px) rotate(calc(-1 * var(--angle)));
          text-shadow: 0 0 18px rgba(255, 190, 85, 0.55);
        }

        .synterra-content {
          position: relative;
          z-index: 2;
          max-width: 960px;
          padding: 48px 24px;
        }

        .synterra-title {
          margin: 0 0 22px;
          font-size: clamp(48px, 8vw, 88px);
          letter-spacing: 0.22em;
          font-weight: 900;
          text-shadow: 0 0 42px rgba(255, 190, 90, 0.18);
        }

        .synterra-subtitle {
          margin: 0 0 38px;
          font-size: clamp(18px, 2.4vw, 25px);
          color: rgba(255, 255, 255, 0.82);
        }

        .synterra-actions {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .synterra-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 170px;
          padding: 16px 28px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 800;
          text-decoration: none;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .synterra-button:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .synterra-button-primary {
          background: white;
          color: black;
          box-shadow: 0 0 28px rgba(255, 255, 255, 0.12);
        }

        .synterra-button-secondary {
          border: 1px solid rgba(255, 255, 255, 0.36);
          color: white;
          background: rgba(255, 255, 255, 0.04);
        }

        .synterra-status {
          margin-top: 34px;
          color: rgba(255, 211, 140, 0.74);
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        @keyframes synterraRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes synterraPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.92; }
          50% { transform: translate(-50%, -50%) scale(1.28); opacity: 1; }
        }

        @media (max-width: 760px) {
          .synterra-symbol-wrap {
            width: 94vw;
            opacity: 0.72;
          }

          .synterra-orbit-item {
            transform: rotate(var(--angle)) translate(38vw) rotate(calc(-1 * var(--angle)));
            font-size: 22px;
          }

          .synterra-title {
            letter-spacing: 0.12em;
          }
        }
      `}</style>

      <div className="synterra-field" />

      <div className="synterra-symbol-wrap" aria-hidden="true">
        <div className="synterra-symbol">
          {orbitItems.map((item) => (
            <div
              className="synterra-orbit-item"
              key={item.label}
              style={{ ["--angle" as string]: `${item.angle}deg` }}
              title={item.label}
            >
              {item.icon}
            </div>
          ))}
          <div className="synterra-light" />
        </div>
      </div>

      <section className="synterra-content">
        <h1 className="synterra-title">SYNTERRA</h1>
        <p className="synterra-subtitle">
          Architecture of a Living Digital Civilization
        </p>

        <div className="synterra-actions">
          <a className="synterra-button synterra-button-primary" href="/app">
            ENTER
          </a>
          <a className="synterra-button synterra-button-secondary" href="/docs">
            DOCUMENTATION
          </a>
        </div>

        <div className="synterra-status">Runtime online · Consciousness centered</div>
      </section>
    </main>
  );
}
