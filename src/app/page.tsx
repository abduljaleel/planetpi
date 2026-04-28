import Link from "next/link";
import { appConfig } from "@/lib/config";

export default function LandingPage() {
  // Star positions (fixed, pseudo-random)
  const stars = [
    { x: 5, y: 8, s: 1 }, { x: 12, y: 25, s: 0.5 }, { x: 20, y: 14, s: 1.5 },
    { x: 28, y: 42, s: 0.5 }, { x: 35, y: 6, s: 1 }, { x: 42, y: 30, s: 0.5 },
    { x: 48, y: 18, s: 1 }, { x: 55, y: 45, s: 0.5 }, { x: 62, y: 10, s: 1.5 },
    { x: 68, y: 35, s: 0.5 }, { x: 75, y: 22, s: 1 }, { x: 82, y: 8, s: 0.5 },
    { x: 88, y: 38, s: 1 }, { x: 92, y: 15, s: 0.5 }, { x: 97, y: 28, s: 1 },
    { x: 8, y: 55, s: 0.5 }, { x: 15, y: 68, s: 1 }, { x: 22, y: 52, s: 0.5 },
    { x: 30, y: 72, s: 1.5 }, { x: 38, y: 58, s: 0.5 }, { x: 45, y: 75, s: 1 },
    { x: 52, y: 62, s: 0.5 }, { x: 58, y: 80, s: 1 }, { x: 65, y: 55, s: 0.5 },
    { x: 72, y: 70, s: 1 }, { x: 78, y: 85, s: 0.5 }, { x: 85, y: 60, s: 1.5 },
    { x: 90, y: 78, s: 0.5 }, { x: 95, y: 65, s: 1 }, { x: 3, y: 82, s: 0.5 },
    { x: 10, y: 90, s: 1 }, { x: 18, y: 85, s: 0.5 }, { x: 25, y: 95, s: 1 },
    { x: 33, y: 88, s: 0.5 }, { x: 40, y: 92, s: 1 }, { x: 50, y: 88, s: 0.5 },
    { x: 57, y: 95, s: 1 }, { x: 64, y: 90, s: 0.5 }, { x: 70, y: 95, s: 1 },
    { x: 77, y: 92, s: 0.5 }, { x: 84, y: 88, s: 1 }, { x: 91, y: 95, s: 0.5 },
    { x: 96, y: 85, s: 1 }, { x: 2, y: 40, s: 0.5 }, { x: 99, y: 50, s: 1 },
    { x: 14, y: 3, s: 0.5 }, { x: 43, y: 2, s: 1 }, { x: 67, y: 4, s: 0.5 },
    { x: 86, y: 3, s: 1 }, { x: 50, y: 50, s: 0.5 },
  ];

  // Asset map grid (10x5)
  const gridAssets: Record<string, { color: string; label: string }> = {
    "0-1": { color: "#22c55e", label: "Pipeline Alpha" },
    "2-0": { color: "#22c55e", label: "Forest Reserve" },
    "4-3": { color: "#22c55e", label: "Solar Array 7" },
    "7-2": { color: "#eab308", label: "Coastal Zone 3" },
    "9-4": { color: "#eab308", label: "Mining Site B" },
    "5-1": { color: "#ef4444", label: "Refinery Delta" },
  };

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: '#070B14', color: '#c8d6e5' }}>
      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.s}px`,
              height: `${star.s}px`,
              opacity: 0.15 + Math.random() * 0.35,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <header style={{ borderBottom: '1px solid #0f1a2e' }}>
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
            <span className="text-sm font-semibold tracking-wide text-gray-500">{appConfig.name}</span>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Sign in
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors"
                style={{ border: '1px solid #06b6d4', color: '#06b6d4' }}
              >
                Get started
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center pt-28 pb-16 px-6 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            <span style={{ color: '#e2e8f0' }}>PLANET </span>
            <span style={{ color: '#06b6d4' }}>&pi;</span>
          </h1>
          <p className="mt-6 text-lg font-light" style={{ color: '#64748b' }}>
            Decision-grade intelligence from orbit.
          </p>

          {/* Radar sweep line */}
          <div className="mt-8 w-full max-w-md h-px relative overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundColor: '#0f1a2e' }} />
            <div
              className="absolute top-0 h-full"
              style={{
                width: '80px',
                background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
                animation: 'radar-sweep 3s linear infinite',
              }}
            />
          </div>
        </section>

        {/* Asset Map Grid */}
        <section className="mx-auto max-w-3xl w-full px-6 pb-6">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#06b6d4' }}>Asset Map</p>
          <div className="rounded-lg p-6" style={{ border: '1px solid #0f1a2e', backgroundColor: '#0a1120' }}>
            <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}>
              {Array.from({ length: 50 }).map((_, idx) => {
                const col = idx % 10;
                const row = Math.floor(idx / 10);
                const key = `${col}-${row}`;
                const asset = gridAssets[key];

                return (
                  <div
                    key={idx}
                    className="aspect-square rounded flex flex-col items-center justify-center relative"
                    style={{
                      backgroundColor: asset ? `${asset.color}10` : '#0d1829',
                      border: asset ? `1px solid ${asset.color}30` : '1px solid #111d30',
                    }}
                  >
                    {asset && (
                      <>
                        <div
                          className="rounded-full"
                          style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: asset.color,
                            boxShadow: `0 0 8px ${asset.color}`,
                            animation: asset.color === '#ef4444' ? 'blink-dot 1s ease-in-out infinite' : 'none',
                          }}
                        />
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Labels under active cells */}
            <div className="mt-4 flex flex-wrap gap-3">
              {Object.values(gridAssets).map((a) => (
                <span key={a.label} className="text-xs font-mono" style={{ color: a.color }}>
                  {a.label}
                </span>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-5 mt-4 text-xs" style={{ color: '#64748b' }}>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: '#22c55e' }} />
                Nominal
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: '#eab308' }} />
                Warning
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: '#ef4444' }} />
                Critical
              </div>
            </div>
          </div>
        </section>

        {/* Anomaly Feed */}
        <section className="mx-auto max-w-3xl w-full px-6 pb-20 pt-6">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#06b6d4' }}>Anomaly Feed</p>
          <div className="space-y-2">
            {[
              {
                time: "14:23 UTC",
                type: "THERMAL ANOMALY",
                location: "Pipeline Alpha",
                confidence: "94%",
                severity: "HIGH",
                sevColor: "#ef4444",
              },
              {
                time: "12:08 UTC",
                type: "VEGETATION CHANGE",
                location: "Coastal Zone 3",
                confidence: "87%",
                severity: "MEDIUM",
                sevColor: "#eab308",
              },
              {
                time: "09:41 UTC",
                type: "ALL CLEAR",
                location: "Forest Reserve routine scan complete",
                confidence: null,
                severity: "OK",
                sevColor: "#22c55e",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-3 font-mono text-xs leading-relaxed"
                style={{ backgroundColor: '#0a1120', border: '1px solid #0f1a2e' }}
              >
                <span style={{ color: '#64748b' }}>[{item.time}]</span>{" "}
                <span style={{ color: '#c8d6e5' }}>{item.type}</span>{" "}
                {item.confidence ? (
                  <>
                    <span style={{ color: '#64748b' }}>detected at</span>{" "}
                    <span style={{ color: '#06b6d4' }}>{item.location}</span>{" "}
                    <span style={{ color: '#64748b' }}>— Confidence: {item.confidence} — Severity:</span>{" "}
                  </>
                ) : (
                  <span style={{ color: '#64748b' }}>{item.location} — </span>
                )}
                <span
                  className="inline-flex items-center rounded px-1.5 py-0.5 text-xs font-semibold"
                  style={{
                    backgroundColor: `${item.sevColor}20`,
                    color: item.sevColor,
                  }}
                >
                  {item.severity}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center pb-24 px-6">
          <Link
            href="/signup"
            className="inline-flex items-center rounded-full px-10 py-4 text-lg font-semibold transition-colors"
            style={{ border: '2px solid #06b6d4', color: '#06b6d4', backgroundColor: 'transparent' }}
          >
            Begin monitoring &rarr;
          </Link>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #0f1a2e' }}>
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 text-xs" style={{ color: '#334155' }}>
            <span>&copy; {new Date().getFullYear()} {appConfig.name}</span>
            <span>A 12 Cities venture</span>
          </div>
        </footer>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes radar-sweep {
          0% { left: -80px; }
          100% { left: 100%; }
        }
        @keyframes blink-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
