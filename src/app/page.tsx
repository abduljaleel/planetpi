import Link from "next/link";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/lib/config";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      title: "Asset Monitoring",
      desc: "Track facilities, pipelines, coastlines, and natural zones with satellite imagery updated on every orbital pass. Decision-grade data, not raw pixels.",
    },
    {
      title: "Anomaly Detection",
      desc: "Automated detection of thermal anomalies, vegetation change, flooding, structural shifts, and fire events. Severity-scored and geo-referenced.",
    },
    {
      title: "Risk Intelligence",
      desc: "Multi-factor risk scoring for every asset in your portfolio. Trend analysis, weighted factor breakdown, and actionable recommendations for mitigation.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              {appConfig.name.charAt(0)}
            </div>
            <span className="font-semibold text-lg">{appConfig.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          Space is open for business
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Decision-grade geospatial intelligence. Monitor critical assets,
          detect anomalies from orbit, and quantify risk before it becomes loss.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/signup">
            <Button size="lg">
              Get started free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Sign in
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-center text-3xl font-bold">
            Intelligence from orbit, decisions on the ground
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border bg-background p-6"
              >
                <CheckCircle className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join teams already using {appConfig.name} to see what matters from space.
        </p>
        <Link href="/signup" className="mt-8 inline-block">
          <Button size="lg">
            Create free account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 text-sm text-muted-foreground">
          <span>
            &copy; {new Date().getFullYear()} {appConfig.name}. All rights
            reserved.
          </span>
          <span>A 12 Cities venture</span>
        </div>
      </footer>
    </div>
  );
}
