// ─── Types ───────────────────────────────────────────────────────────────────

export type AssetType = "facility" | "pipeline" | "field" | "coastline" | "forest" | "mine";

export type EventType = "vegetation_change" | "thermal" | "structural" | "flood" | "fire";

export type Severity = "low" | "medium" | "high" | "critical";

export type AnomalyStatus = "active" | "resolved";

export type LayerType = "satellite" | "weather" | "elevation" | "landuse";

export type ReportType = "monitoring" | "incident" | "risk_summary";

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  riskScore: number;
  lastChecked: string;
  sector: string;
}

export interface AnomalyEvent {
  id: string;
  assetId: string;
  assetName: string;
  type: EventType;
  severity: Severity;
  detectedAt: string;
  confidence: number;
  status: AnomalyStatus;
  description: string;
  source: string;
  affectedArea: string;
  recommendedActions: string[];
}

export interface RiskAssessment {
  id: string;
  assetId: string;
  date: string;
  overallScore: number;
  factors: { name: string; weight: number; score: number }[];
  trend: "improving" | "stable" | "worsening";
}

export interface DataLayer {
  id: string;
  name: string;
  type: LayerType;
  source: string;
  refreshInterval: string;
  status: "active" | "inactive";
  lastRefresh: string;
  coverage: string;
}

export interface Report {
  id: string;
  title: string;
  type: ReportType;
  date: string;
  assetsCovered: string[];
  summary: string;
  content: string;
}

// ─── Mock Assets ─────────────────────────────────────────────────────────────

export const assets: Asset[] = [
  {
    id: "ast-001",
    name: "North Sea Platform Alpha",
    type: "facility",
    location: "North Sea, UK Sector",
    latitude: 57.5,
    longitude: 1.5,
    description: "Offshore oil platform with 24/7 monitoring. Critical infrastructure for energy production.",
    riskScore: 42,
    lastChecked: "2026-04-11T08:30:00Z",
    sector: "infrastructure",
  },
  {
    id: "ast-002",
    name: "Amazon Basin Corridor",
    type: "forest",
    location: "Para State, Brazil",
    latitude: -3.1,
    longitude: -59.9,
    description: "12,000 sq km deforestation monitoring zone in the central Amazon.",
    riskScore: 78,
    lastChecked: "2026-04-11T06:15:00Z",
    sector: "agriculture",
  },
  {
    id: "ast-003",
    name: "Rotterdam Port Complex",
    type: "facility",
    location: "Rotterdam, Netherlands",
    latitude: 51.9,
    longitude: 4.5,
    description: "Europe's largest port. Monitoring structural integrity and flood risk.",
    riskScore: 31,
    lastChecked: "2026-04-11T09:00:00Z",
    sector: "infrastructure",
  },
  {
    id: "ast-004",
    name: "Maldives Coastal Zone",
    type: "coastline",
    location: "Male Atoll, Maldives",
    latitude: 4.2,
    longitude: 73.5,
    description: "Critical coastal erosion monitoring for island nation at sea-level risk.",
    riskScore: 89,
    lastChecked: "2026-04-10T22:45:00Z",
    sector: "coastal",
  },
  {
    id: "ast-005",
    name: "Trans-Siberian Pipeline S7",
    type: "pipeline",
    location: "Novosibirsk Oblast, Russia",
    latitude: 55.0,
    longitude: 82.9,
    description: "2,400 km gas pipeline section. Thermal anomaly detection active.",
    riskScore: 56,
    lastChecked: "2026-04-11T07:20:00Z",
    sector: "infrastructure",
  },
  {
    id: "ast-006",
    name: "Pilbara Iron Ore Field",
    type: "mine",
    location: "Western Australia",
    latitude: -22.3,
    longitude: 118.3,
    description: "Open-pit mining operation. Monitoring land subsidence and vegetation impact.",
    riskScore: 63,
    lastChecked: "2026-04-11T04:00:00Z",
    sector: "agriculture",
  },
];

// ─── Mock Events ─────────────────────────────────────────────────────────────

export const events: AnomalyEvent[] = [
  {
    id: "evt-001",
    assetId: "ast-004",
    assetName: "Maldives Coastal Zone",
    type: "flood",
    severity: "critical",
    detectedAt: "2026-04-11T03:12:00Z",
    confidence: 94,
    status: "active",
    description: "Significant coastal inundation detected via SAR imagery. Estimated 2.3 km of coastline affected. Water intrusion extends 180m inland in low-lying sectors.",
    source: "Sentinel-1 SAR",
    affectedArea: "2.3 km coastline, 180m inland penetration",
    recommendedActions: [
      "Issue coastal flood advisory for affected zones",
      "Deploy ground survey team for damage assessment",
      "Activate early warning system for adjacent atolls",
    ],
  },
  {
    id: "evt-002",
    assetId: "ast-002",
    assetName: "Amazon Basin Corridor",
    type: "fire",
    severity: "high",
    detectedAt: "2026-04-10T18:45:00Z",
    confidence: 88,
    status: "active",
    description: "Multiple thermal hotspots detected in the northeast sector. Pattern consistent with controlled burn expanding beyond containment lines.",
    source: "VIIRS Active Fire",
    affectedArea: "340 hectares, 3 active fronts",
    recommendedActions: [
      "Alert local fire management authority",
      "Increase satellite revisit frequency to 6-hour intervals",
      "Cross-reference with land-use permits database",
    ],
  },
  {
    id: "evt-003",
    assetId: "ast-005",
    assetName: "Trans-Siberian Pipeline S7",
    type: "thermal",
    severity: "medium",
    detectedAt: "2026-04-11T01:30:00Z",
    confidence: 76,
    status: "active",
    description: "Anomalous thermal signature detected at pipeline junction KP-1847. Temperature differential 12C above baseline.",
    source: "Landsat 9 TIRS",
    affectedArea: "200m pipeline section at KP-1847",
    recommendedActions: [
      "Schedule ground-based thermal inspection within 48 hours",
      "Review recent maintenance logs for this section",
      "Monitor for changes in next satellite pass",
    ],
  },
  {
    id: "evt-004",
    assetId: "ast-006",
    assetName: "Pilbara Iron Ore Field",
    type: "structural",
    severity: "medium",
    detectedAt: "2026-04-09T14:20:00Z",
    confidence: 82,
    status: "resolved",
    description: "InSAR analysis reveals 4mm subsidence in the eastern pit wall over 30-day period. Rate exceeds baseline threshold.",
    source: "Sentinel-1 InSAR",
    affectedArea: "Eastern pit wall, 800m section",
    recommendedActions: [
      "Review pit wall stability analysis",
      "Install additional ground-based radar monitors",
      "Update geotechnical risk model",
    ],
  },
  {
    id: "evt-005",
    assetId: "ast-002",
    assetName: "Amazon Basin Corridor",
    type: "vegetation_change",
    severity: "high",
    detectedAt: "2026-04-08T11:00:00Z",
    confidence: 91,
    status: "active",
    description: "NDVI analysis shows 23% vegetation loss in monitored zone over 14-day period. Pattern consistent with systematic clearing activity.",
    source: "Sentinel-2 MSI",
    affectedArea: "1,200 hectares in northeast sector",
    recommendedActions: [
      "Report to environmental enforcement authorities",
      "Generate high-resolution change map for evidence",
      "Expand monitoring perimeter by 5km",
    ],
  },
  {
    id: "evt-006",
    assetId: "ast-001",
    assetName: "North Sea Platform Alpha",
    type: "structural",
    severity: "low",
    detectedAt: "2026-04-07T16:45:00Z",
    confidence: 68,
    status: "resolved",
    description: "Minor displacement detected in platform support structure. Within tolerance but flagged for trending.",
    source: "Sentinel-1 InSAR",
    affectedArea: "Platform support leg C3",
    recommendedActions: [
      "Continue monitoring at current frequency",
      "Include in next quarterly structural review",
    ],
  },
  {
    id: "evt-007",
    assetId: "ast-003",
    assetName: "Rotterdam Port Complex",
    type: "flood",
    severity: "low",
    detectedAt: "2026-04-06T20:10:00Z",
    confidence: 72,
    status: "resolved",
    description: "Elevated water levels detected in the Europoort basin. Levels 0.4m above seasonal average but within flood defense capacity.",
    source: "Sentinel-3 SRAL",
    affectedArea: "Europoort basin, 3.2 km waterfront",
    recommendedActions: [
      "Monitor tidal predictions for next 72 hours",
      "Verify flood barrier operational status",
    ],
  },
  {
    id: "evt-008",
    assetId: "ast-004",
    assetName: "Maldives Coastal Zone",
    type: "vegetation_change",
    severity: "medium",
    detectedAt: "2026-04-05T09:30:00Z",
    confidence: 79,
    status: "active",
    description: "Mangrove degradation detected along the eastern shore. Correlated with increased wave energy from changing currents.",
    source: "Sentinel-2 MSI",
    affectedArea: "1.8 km eastern mangrove belt",
    recommendedActions: [
      "Commission mangrove health assessment",
      "Evaluate coral reef buffer effectiveness",
      "Consider mangrove restoration program",
    ],
  },
];

// ─── Mock Risk Assessments ───────────────────────────────────────────────────

export const riskAssessments: RiskAssessment[] = [
  {
    id: "ra-001",
    assetId: "ast-001",
    date: "2026-04-11",
    overallScore: 42,
    factors: [
      { name: "Structural Integrity", weight: 0.3, score: 25 },
      { name: "Weather Exposure", weight: 0.25, score: 55 },
      { name: "Operational Load", weight: 0.2, score: 40 },
      { name: "Regulatory Compliance", weight: 0.15, score: 20 },
      { name: "Environmental Impact", weight: 0.1, score: 35 },
    ],
    trend: "stable",
  },
  {
    id: "ra-002",
    assetId: "ast-002",
    date: "2026-04-11",
    overallScore: 78,
    factors: [
      { name: "Deforestation Rate", weight: 0.35, score: 85 },
      { name: "Fire Risk", weight: 0.25, score: 80 },
      { name: "Biodiversity Threat", weight: 0.2, score: 70 },
      { name: "Regulatory Enforcement", weight: 0.1, score: 60 },
      { name: "Climate Vulnerability", weight: 0.1, score: 75 },
    ],
    trend: "worsening",
  },
  {
    id: "ra-003",
    assetId: "ast-003",
    date: "2026-04-11",
    overallScore: 31,
    factors: [
      { name: "Flood Defense", weight: 0.3, score: 20 },
      { name: "Structural Load", weight: 0.25, score: 30 },
      { name: "Traffic Volume", weight: 0.2, score: 45 },
      { name: "Climate Projection", weight: 0.15, score: 35 },
      { name: "Maintenance Status", weight: 0.1, score: 15 },
    ],
    trend: "improving",
  },
  {
    id: "ra-004",
    assetId: "ast-004",
    date: "2026-04-11",
    overallScore: 89,
    factors: [
      { name: "Sea Level Rise", weight: 0.35, score: 95 },
      { name: "Coastal Erosion", weight: 0.25, score: 90 },
      { name: "Storm Surge Risk", weight: 0.2, score: 85 },
      { name: "Ecosystem Degradation", weight: 0.1, score: 80 },
      { name: "Infrastructure Resilience", weight: 0.1, score: 75 },
    ],
    trend: "worsening",
  },
  {
    id: "ra-005",
    assetId: "ast-005",
    date: "2026-04-11",
    overallScore: 56,
    factors: [
      { name: "Pipeline Integrity", weight: 0.3, score: 50 },
      { name: "Thermal Anomalies", weight: 0.25, score: 65 },
      { name: "Ground Movement", weight: 0.2, score: 45 },
      { name: "Weather Exposure", weight: 0.15, score: 60 },
      { name: "Maintenance Backlog", weight: 0.1, score: 55 },
    ],
    trend: "stable",
  },
  {
    id: "ra-006",
    assetId: "ast-006",
    date: "2026-04-11",
    overallScore: 63,
    factors: [
      { name: "Ground Subsidence", weight: 0.3, score: 70 },
      { name: "Tailings Stability", weight: 0.25, score: 60 },
      { name: "Water Management", weight: 0.2, score: 55 },
      { name: "Vegetation Impact", weight: 0.15, score: 65 },
      { name: "Regulatory Risk", weight: 0.1, score: 50 },
    ],
    trend: "stable",
  },
];

// ─── Mock Data Layers ────────────────────────────────────────────────────────

export const dataLayers: DataLayer[] = [
  {
    id: "lyr-001",
    name: "Sentinel-2 Optical",
    type: "satellite",
    source: "ESA Copernicus",
    refreshInterval: "5 days",
    status: "active",
    lastRefresh: "2026-04-11T06:00:00Z",
    coverage: "Global, 10m resolution",
  },
  {
    id: "lyr-002",
    name: "Sentinel-1 SAR",
    type: "satellite",
    source: "ESA Copernicus",
    refreshInterval: "6 days",
    status: "active",
    lastRefresh: "2026-04-10T18:00:00Z",
    coverage: "Global, 5m resolution",
  },
  {
    id: "lyr-003",
    name: "ERA5 Weather Model",
    type: "weather",
    source: "ECMWF",
    refreshInterval: "1 hour",
    status: "active",
    lastRefresh: "2026-04-11T09:00:00Z",
    coverage: "Global, 0.25 degree grid",
  },
  {
    id: "lyr-004",
    name: "SRTM Elevation",
    type: "elevation",
    source: "NASA/USGS",
    refreshInterval: "Static",
    status: "active",
    lastRefresh: "2026-01-15T00:00:00Z",
    coverage: "Global, 30m resolution",
  },
  {
    id: "lyr-005",
    name: "ESA WorldCover",
    type: "landuse",
    source: "ESA",
    refreshInterval: "Annual",
    status: "active",
    lastRefresh: "2026-03-01T00:00:00Z",
    coverage: "Global, 10m resolution",
  },
  {
    id: "lyr-006",
    name: "VIIRS Active Fire",
    type: "satellite",
    source: "NASA FIRMS",
    refreshInterval: "12 hours",
    status: "active",
    lastRefresh: "2026-04-11T06:00:00Z",
    coverage: "Global, 375m resolution",
  },
];

// ─── Mock Reports ────────────────────────────────────────────────────────────

export const reports: Report[] = [
  {
    id: "rpt-001",
    title: "Weekly Monitoring Summary - W15 2026",
    type: "monitoring",
    date: "2026-04-11",
    assetsCovered: ["North Sea Platform Alpha", "Rotterdam Port Complex", "Trans-Siberian Pipeline S7"],
    summary: "Infrastructure assets stable. Minor thermal anomaly on pipeline requires follow-up.",
    content: `WEEKLY MONITORING REPORT - Week 15, 2026
Generated: April 11, 2026 09:00 UTC

EXECUTIVE SUMMARY
All three infrastructure assets in the northern hemisphere monitoring program remain within acceptable operational parameters. One thermal anomaly on the Trans-Siberian Pipeline S7 has been flagged for ground inspection.

ASSET STATUS
1. North Sea Platform Alpha - STABLE (Risk: 42/100)
   - No significant structural changes detected
   - Weather exposure elevated due to spring storm season
   - Next scheduled inspection: April 25

2. Rotterdam Port Complex - STABLE (Risk: 31/100)
   - Water levels returning to seasonal norms
   - Flood defense systems verified operational
   - Port traffic at 94% capacity

3. Trans-Siberian Pipeline S7 - WATCH (Risk: 56/100)
   - Thermal anomaly at KP-1847 requires ground inspection
   - Temperature differential: 12C above baseline
   - Recommended: Ground inspection within 48 hours

RECOMMENDATIONS
- Maintain current monitoring frequency for Platform Alpha and Rotterdam
- Escalate pipeline thermal anomaly to operations team
- Schedule quarterly risk review for all three assets`,
  },
  {
    id: "rpt-002",
    title: "Incident Report - Amazon Deforestation Alert",
    type: "incident",
    date: "2026-04-08",
    assetsCovered: ["Amazon Basin Corridor"],
    summary: "Significant vegetation loss detected. Multiple fire hotspots active. Enforcement referral recommended.",
    content: `INCIDENT REPORT - Amazon Basin Corridor
Generated: April 8, 2026 14:00 UTC
Classification: HIGH SEVERITY

INCIDENT OVERVIEW
Systematic vegetation clearing detected in the northeast sector of the Amazon Basin Corridor monitoring zone. NDVI analysis confirms 23% vegetation loss over a 14-day period across 1,200 hectares.

DETECTION TIMELINE
- March 25: Initial NDVI anomaly flagged (8% deviation)
- March 30: Confirmation via multi-temporal analysis (15% loss)
- April 5: Thermal hotspots detected (VIIRS)
- April 8: Full assessment completed (23% loss, 1,200 ha)

EVIDENCE
- Sentinel-2 optical imagery (10m resolution)
- VIIRS thermal data (375m, 3 active fire fronts)
- NDVI change maps (14-day composite)

IMPACT ASSESSMENT
- Estimated 1,200 hectares of primary forest affected
- 3 active fire fronts totaling 340 hectares
- Biodiversity impact: HIGH (protected species corridor)

RECOMMENDED ACTIONS
1. Refer to environmental enforcement authorities (IBAMA)
2. Generate court-admissible evidence package
3. Increase monitoring frequency to 6-hour intervals
4. Expand monitoring perimeter by 5km
5. Cross-reference with land tenure and permit databases`,
  },
  {
    id: "rpt-003",
    title: "Quarterly Risk Summary - Q1 2026",
    type: "risk_summary",
    date: "2026-04-01",
    assetsCovered: ["All Assets"],
    summary: "Portfolio risk elevated. Coastal and forest assets driving increase. Infrastructure stable.",
    content: `QUARTERLY RISK SUMMARY - Q1 2026
Generated: April 1, 2026 00:00 UTC

PORTFOLIO OVERVIEW
Overall portfolio risk has increased 8% quarter-over-quarter, driven primarily by coastal erosion acceleration in the Maldives and continued deforestation pressure in the Amazon Basin.

RISK DISTRIBUTION
- Critical (>80): 1 asset (Maldives Coastal Zone)
- High (60-80): 2 assets (Amazon Basin, Pilbara Mine)
- Medium (30-60): 2 assets (Pipeline S7, Platform Alpha)
- Low (<30): 1 asset (Rotterdam Port)

SECTOR ANALYSIS
Infrastructure (3 assets): Average risk 43 - STABLE
  Driven by weather exposure and maintenance cycles
Agriculture (2 assets): Average risk 70.5 - WORSENING
  Driven by deforestation and mining subsidence
Coastal (1 asset): Average risk 89 - WORSENING
  Driven by accelerating sea level rise and erosion

TREND ANALYSIS
- 2 assets worsening (Maldives, Amazon)
- 3 assets stable (Pipeline, Mine, Platform)
- 1 asset improving (Rotterdam)

KEY RECOMMENDATIONS
1. Escalate Maldives monitoring to daily revisit
2. Initiate enforcement coordination for Amazon
3. Review mine subsidence mitigation plan
4. Maintain current protocols for stable assets`,
  },
];

// ─── Helper functions ────────────────────────────────────────────────────────

export function getAssetById(id: string): Asset | undefined {
  return assets.find((a) => a.id === id);
}

export function getEventsForAsset(assetId: string): AnomalyEvent[] {
  return events.filter((e) => e.assetId === assetId);
}

export function getRiskForAsset(assetId: string): RiskAssessment | undefined {
  return riskAssessments.find((r) => r.assetId === assetId);
}

export function getActiveAnomalies(): AnomalyEvent[] {
  return events.filter((e) => e.status === "active");
}

export function getRiskColor(score: number): string {
  if (score < 30) return "text-emerald-600 bg-emerald-500/10";
  if (score < 70) return "text-amber-600 bg-amber-500/10";
  return "text-red-600 bg-red-500/10";
}

export function getRiskBadgeVariant(score: number): "default" | "secondary" | "destructive" | "outline" {
  if (score < 30) return "secondary";
  if (score < 70) return "outline";
  return "destructive";
}

export function getSeverityColor(severity: Severity): string {
  switch (severity) {
    case "low": return "text-emerald-600 bg-emerald-500/10 border-emerald-200";
    case "medium": return "text-amber-600 bg-amber-500/10 border-amber-200";
    case "high": return "text-orange-600 bg-orange-500/10 border-orange-200";
    case "critical": return "text-red-600 bg-red-500/10 border-red-200";
  }
}

export function getEventTypeIcon(type: EventType): string {
  switch (type) {
    case "vegetation_change": return "leaf";
    case "thermal": return "thermometer";
    case "structural": return "building";
    case "flood": return "waves";
    case "fire": return "flame";
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
