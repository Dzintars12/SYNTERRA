export default function HomePage() {
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
            radial-gradient(circle at center, rgba(245, 180, 85, 0.14), transparent 36%),
            radial-gradient(circle at center, rgba(255, 210, 120, 0.07), transparent 62%),
            #030303;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
        }

        .synterra-field {
          position: absolute;
          inset: -20%;
          background-image: radial-gradient(rgba(255, 210, 130, 0.14) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: 0.12;
        }

        .synterra-symbol-image {
          position: absolute;
          width: min(82vw, 760px);
          aspect-ratio: 1;
          object-fit: contain;
          opacity: 0.88;
          filter:
            drop-shadow(0 0 34px rgba(255, 190, 85, 0.38))
            drop-shadow(0 0 90px rgba(255, 160, 50, 0.18));
          animation: synterraRotate 140s linear infinite;
          transform-origin: center center;
          user-select: none;
          pointer-events: none;
        }

        .synterra-content {
          position: relative;
          z-index: 2;
          max-width: 980px;
          padding: 48px 24px;
        }

        .synterra-title {
          margin: 0 0 22px;
          font-size: clamp(48px, 8vw, 96px);
          letter-spacing: 0.22em;
          font-weight: 900;
          text-shadow: 0 0 42px rgba(255, 190, 90, 0.18);
        }

        .synterra-subtitle {
          margin: 0 0 38px;
          font-size: clamp(18px, 2.4vw, 25px);
          color: rgba(255, 255, 255, 0.86);
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
          backdrop-filter: blur(8px);
        }

        .synterra-status {
          margin-top: 34px;
          color: rgba(255, 211, 140, 0.78);
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        @keyframes synterraRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 760px) {
          .synterra-symbol-image {
            width: 118vw;
            opacity: 0.62;
          }

          .synterra-title {
            letter-spacing: 0.12em;
          }
        }
      `}</style>

      <div className="synterra-field" />
      <img className="synterra-symbol-image" src="/SYNTERRA.png" alt="SYNTERRA symbol" />

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
