import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  assets,
  getActiveAnomalies,
  dataLayers,
  getRiskBadgeVariant,
} from "@/lib/data/geospatial";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const activeAnomalies = getActiveAnomalies();
  const avgRisk = Math.round(
    assets.reduce((sum, a) => sum + a.riskScore, 0) / assets.length
  );
  const activeLayers = dataLayers.filter((l) => l.status === "active").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Geospatial intelligence overview &mdash;{" "}
          {user?.user_metadata?.full_name || user?.email}
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Monitored Assets"
          value={String(assets.length)}
          description="Facilities, pipelines, zones"
        />
        <MetricCard
          title="Active Anomalies"
          value={String(activeAnomalies.length)}
          description="Requiring attention"
        />
        <MetricCard
          title="Avg Risk Score"
          value={String(avgRisk)}
          description="Across all assets (0-100)"
        />
        <MetricCard
          title="Data Layers"
          value={String(activeLayers)}
          description="Active satellite and weather feeds"
        />
      </div>

      {/* Asset list with risk badges */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Assets</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {assets.map((asset) => (
            <Link key={asset.id} href={`/assets/${asset.id}`}>
              <Card className="hover:ring-2 hover:ring-primary/20 transition-all cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {asset.name}
                  </CardTitle>
                  <Badge variant={getRiskBadgeVariant(asset.riskScore)} className="text-xs">
                    Risk: {asset.riskScore}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Type</p>
                      <p className="font-medium capitalize">{asset.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Location</p>
                      <p className="font-medium truncate">{asset.location}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Sector</p>
                      <p className="font-medium capitalize">{asset.sector}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
