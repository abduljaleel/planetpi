"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { reports } from "@/lib/data/geospatial";

function getReportTypeVariant(
  type: string
): "default" | "secondary" | "destructive" | "outline" {
  switch (type) {
    case "incident":
      return "destructive";
    case "risk_summary":
      return "outline";
    default:
      return "secondary";
  }
}

export default function ReportsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Monitoring, incident, and risk reports
          </p>
        </div>
        <Button>Generate Report</Button>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant={getReportTypeVariant(report.type)}
                      className="capitalize text-xs"
                    >
                      {report.type.replace("_", " ")}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {report.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setExpandedId(expandedId === report.id ? null : report.id)
                  }
                >
                  {expandedId === report.id ? "Collapse" : "Expand"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{report.summary}</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                {report.assetsCovered.map((asset) => (
                  <Badge key={asset} variant="secondary" className="text-xs">
                    {asset}
                  </Badge>
                ))}
              </div>
              {expandedId === report.id && (
                <pre className="mt-4 p-4 bg-muted rounded-md text-xs whitespace-pre-wrap font-mono overflow-auto max-h-96">
                  {report.content}
                </pre>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
