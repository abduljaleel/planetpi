import Link from "next/link";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/lib/config";
import {
  ArrowRight,
  Satellite,
  Globe,
  AlertCircle,
  Shield,
  Layers,
  FileText,
  Radio,
  Eye,
  Target,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b1628] text-[#e2e8f0]">
      {/* Nav */}
      <header className="border-b border-[#1e3a5f]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#06b6d4] text-[#0b1628] text-sm font-black">
              <Globe className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">{appConfig.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-[#94a3b8] hover:text-[#e2e8f0]">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#06b6d4] text-[#0b1628] hover:bg-[#22d3ee] font-semibold">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06b6d4]/5 via-transparent to-[#0b1628]" />
        {/* Subtle star dots */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-[10%] h-1 w-1 rounded-full bg-[#06b6d4]/30" />
          <div className="absolute top-24 left-[25%] h-0.5 w-0.5 rounded-full bg-[#94a3b8]/40" />
          <div className="absolute top-8 left-[45%] h-1 w-1 rounded-full bg-[#94a3b8]/20" />
          <div className="absolute top-32 left-[60%] h-0.5 w-0.5 rounded-full bg-[#06b6d4]/40" />
          <div className="absolute top-16 left-[75%] h-1 w-1 rounded-full bg-[#94a3b8]/30" />
          <div className="absolute top-40 left-[85%] h-0.5 w-0.5 rounded-full bg-[#06b6d4]/20" />
          <div className="absolute top-20 left-[92%] h-1 w-1 rounded-full bg-[#94a3b8]/25" />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 pb-20 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-4 py-1.5 text-sm text-[#06b6d4] mb-8">
            <Satellite className="h-3.5 w-3.5" />
            Geospatial intelligence platform
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl leading-[0.95]">
            Space is open
            <span className="text-[#06b6d4]"> for business</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
            Monitor assets. Detect anomalies. Score risk. At planetary scale.
            Decision-grade intelligence from orbit to boardroom.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-[#06b6d4] text-[#0b1628] hover:bg-[#22d3ee] font-semibold px-8">
                Launch mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-[#1e3a5f] text-[#e2e8f0] hover:bg-[#1e3a5f]">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* World Grid - Asset Monitor Preview */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-lg border border-[#1e3a5f] bg-[#132240] p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                  <Radio className="h-4 w-4 text-[#06b6d4] animate-pulse" />
                  Live monitoring
                </div>
                <div className="text-sm text-[#94a3b8]">Last pass: 4 min ago</div>
              </div>
              {/* Asset Grid */}
              <div className="grid grid-cols-6 gap-3 mb-6">
                {[
                  { status: "green", label: "Refinery Alpha" },
                  { status: "cyan", label: "" },
                  { status: "empty", label: "" },
                  { status: "yellow", label: "Pipeline B-4" },
                  { status: "empty", label: "" },
                  { status: "green", label: "Port Facility" },
                  { status: "empty", label: "" },
                  { status: "red", label: "Coast Seg 12" },
                  { status: "empty", label: "" },
                  { status: "empty", label: "" },
                  { status: "green", label: "Solar Array" },
                  { status: "empty", label: "" },
                  { status: "empty", label: "" },
                  { status: "empty", label: "" },
                  { status: "cyan", label: "" },
                  { status: "empty", label: "" },
                  { status: "green", label: "Dam Site" },
                  { status: "empty", label: "" },
                ].map((cell, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded border flex items-center justify-center ${
                      cell.status === "green"
                        ? "border-emerald-500/40 bg-emerald-500/10"
                        : cell.status === "yellow"
                        ? "border-yellow-500/40 bg-yellow-500/10"
                        : cell.status === "red"
                        ? "border-red-500/40 bg-red-500/10"
                        : cell.status === "cyan"
                        ? "border-[#06b6d4]/40 bg-[#06b6d4]/10"
                        : "border-[#1e3a5f]/50 bg-transparent"
                    }`}
                  >
                    {cell.status !== "empty" && (
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          cell.status === "green"
                            ? "bg-emerald-400"
                            : cell.status === "yellow"
                            ? "bg-yellow-400"
                            : cell.status === "red"
                            ? "bg-red-400 animate-pulse"
                            : "bg-[#06b6d4]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 text-xs text-[#94a3b8]">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  Normal
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  Watch
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  Alert
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#06b6d4]" />
                  Scanning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[#1e3a5f] bg-[#0d1a30]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-center text-3xl font-black tracking-tight">
            Intelligence from orbit, decisions on the ground
          </h2>
          <p className="text-center text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            End-to-end geospatial intelligence for critical infrastructure monitoring and risk management.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Asset Monitoring",
                desc: "Track facilities, pipelines, coastlines, and natural zones with satellite imagery updated on every orbital pass.",
              },
              {
                icon: AlertCircle,
                title: "Anomaly Detection",
                desc: "Automated detection of thermal anomalies, vegetation change, flooding, and structural shifts. Severity-scored and geo-referenced.",
              },
              {
                icon: Shield,
                title: "Risk Intelligence",
                desc: "Multi-factor risk scoring for every asset in your portfolio. Trend analysis and actionable recommendations.",
              },
              {
                icon: Layers,
                title: "Data Layers",
                desc: "Overlay weather, terrain, historical imagery, and third-party datasets. Build context around every observation.",
              },
              {
                icon: FileText,
                title: "Report Generation",
                desc: "Automated intelligence reports with evidence, severity, and recommended actions. Audit-ready documentation.",
              },
              {
                icon: Target,
                title: "Custom Alerts",
                desc: "Define monitoring zones, thresholds, and escalation rules. Get notified the moment something changes.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-[#1e3a5f] bg-[#132240] p-6 hover:border-[#06b6d4]/40 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#06b6d4]/10">
                  <feature.icon className="h-5 w-5 text-[#06b6d4]" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Orbit to Insight */}
      <section className="border-t border-[#1e3a5f]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-center text-3xl font-black tracking-tight">
            From orbit to insight
          </h2>
          <p className="text-center text-[#94a3b8] mt-4 max-w-xl mx-auto">
            A continuous loop from satellite capture to operational decision.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Satellite", desc: "Imagery captured on orbital pass", icon: Satellite },
              { step: "02", label: "Data", desc: "Processing, alignment, and enrichment", icon: Layers },
              { step: "03", label: "Anomaly", desc: "Detection, scoring, and classification", icon: AlertCircle },
              { step: "04", label: "Action", desc: "Alerts, reports, and recommendations", icon: Zap },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
                <div className="flex flex-col items-center">
                  <div className="text-xs font-mono text-[#06b6d4] mb-3">{item.step}</div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 mb-4">
                    <item.icon className="h-6 w-6 text-[#06b6d4]" />
                  </div>
                  <h3 className="font-bold text-lg">{item.label}</h3>
                  <p className="text-sm text-[#94a3b8] mt-2">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -right-3">
                    <ArrowRight className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-[#1e3a5f] bg-[#06b6d4]">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-[#0b1628]">6 assets</div>
              <div className="text-sm text-[#0b1628]/70 mt-1 font-medium">monitored</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#0b1628]">4 active</div>
              <div className="text-sm text-[#0b1628]/70 mt-1 font-medium">anomalies detected</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#0b1628]">3 layers</div>
              <div className="text-sm text-[#0b1628]/70 mt-1 font-medium">data sources</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1e3a5f]">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <h2 className="text-3xl font-black tracking-tight">Ready to see what matters from space?</h2>
          <p className="mt-4 text-lg text-[#94a3b8]">
            Join teams already using {appConfig.name} to monitor, detect, and decide at planetary scale.
          </p>
          <Link href="/signup" className="mt-8 inline-block">
            <Button size="lg" className="bg-[#06b6d4] text-[#0b1628] hover:bg-[#22d3ee] font-semibold px-8">
              Begin your mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e3a5f]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 text-sm text-[#94a3b8]">
          <span>&copy; {new Date().getFullYear()} {appConfig.name}. All rights reserved.</span>
          <span>A 12 Cities venture</span>
        </div>
      </footer>
    </div>
  );
}
