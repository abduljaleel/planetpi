"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { dataLayers, formatDate, type DataLayer } from "@/lib/data/geospatial";

export default function LayersPage() {
  const [layers, setLayers] = useState<DataLayer[]>(dataLayers);

  function toggleLayer(id: string) {
    setLayers((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, status: l.status === "active" ? "inactive" : "active" }
          : l
      )
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Layers</h1>
        <p className="text-muted-foreground">
          Satellite, weather, and geographic data feeds
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Active Layers ({layers.filter((l) => l.status === "active").length} /{" "}
            {layers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Refresh</TableHead>
                <TableHead>Coverage</TableHead>
                <TableHead>Last Refresh</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {layers.map((layer) => (
                <TableRow key={layer.id}>
                  <TableCell className="font-medium">{layer.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize text-xs">
                      {layer.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {layer.source}
                  </TableCell>
                  <TableCell className="text-sm">{layer.refreshInterval}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-40 truncate">
                    {layer.coverage}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(layer.lastRefresh)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant={layer.status === "active" ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleLayer(layer.id)}
                    >
                      {layer.status === "active" ? "On" : "Off"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
