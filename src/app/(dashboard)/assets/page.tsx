import Link from "next/link";
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
import {
  assets,
  getRiskBadgeVariant,
  formatDateShort,
} from "@/lib/data/geospatial";

export default function AssetsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Assets</h1>
        <p className="text-muted-foreground">
          All monitored geospatial assets
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monitored Assets ({assets.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead className="text-right">Risk Score</TableHead>
                <TableHead>Last Checked</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>
                    <Link
                      href={`/assets/${asset.id}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {asset.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize text-xs">
                      {asset.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-48 truncate">
                    {asset.location}
                  </TableCell>
                  <TableCell className="capitalize text-sm">
                    {asset.sector}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={getRiskBadgeVariant(asset.riskScore)}
                      className="text-xs font-mono"
                    >
                      {asset.riskScore}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDateShort(asset.lastChecked)}
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
