# Planet Pi

**Space is open for business. Decision-grade geospatial intelligence.**

Part of the [12 Cities](https://github.com/abduljaleel) venture ecosystem.

## What it does

Planet Pi is a geospatial intelligence platform for monitoring assets, detecting anomalies, and scoring risk at scale. Software-first approach using publicly available satellite and environmental data.

### Core Features

- **Asset Monitoring Dashboard** — Map-style overview with assets color-coded by risk level and recent anomaly feed
- **Anomaly Detection** — Chronological feed of detected events (vegetation change, thermal, structural, flood, fire) with severity and confidence
- **Risk Scoring** — Per-asset risk assessments with factor breakdown, trend tracking, and portfolio-level risk distribution
- **Data Layer Management** — Configure satellite, weather, elevation, and land-use data layers with refresh intervals
- **Report Generation** — Monitoring summaries, incident reports, and risk assessments with export capability

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **UI:** Tailwind CSS v4 + shadcn/ui
- **Auth & Database:** Supabase (Auth, Postgres, RLS)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Add your Supabase URL and anon key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 12 Cities Role

**Domain:** planetpi.ch | **Tier:** 3 (Frontier) | **Layer:** Foundations

## License

Private — 12 Cities Venture System
