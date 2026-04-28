-- planetpi: Geospatial monitoring and risk tables
-- Migration: 00002_geospatial

-- Monitored Assets
create table if not exists public.monitored_assets (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  asset_type text not null check (asset_type in ('facility', 'pipeline', 'field', 'coastline', 'forest')),
  latitude numeric,
  longitude numeric,
  metadata jsonb,
  risk_score int not null default 0,
  last_checked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.monitored_assets enable row level security;

create policy "Users can view monitored assets in their org"
  on public.monitored_assets for select
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can insert monitored assets in their org"
  on public.monitored_assets for insert
  with check (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can update monitored assets in their org"
  on public.monitored_assets for update
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can delete monitored assets in their org"
  on public.monitored_assets for delete
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

-- Anomaly Events
create table if not exists public.anomaly_events (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid not null references public.monitored_assets(id) on delete cascade,
  event_type text,
  severity text not null check (severity in ('low', 'medium', 'high', 'critical')),
  detected_at timestamptz not null default now(),
  confidence numeric,
  source text,
  resolved_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.anomaly_events enable row level security;

create policy "Users can view anomaly events via asset org"
  on public.anomaly_events for select
  using (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

create policy "Users can insert anomaly events via asset org"
  on public.anomaly_events for insert
  with check (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

create policy "Users can update anomaly events via asset org"
  on public.anomaly_events for update
  using (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

create policy "Users can delete anomaly events via asset org"
  on public.anomaly_events for delete
  using (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

-- Data Layers
create table if not exists public.data_layers (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  layer_type text not null check (layer_type in ('satellite', 'weather', 'elevation', 'landuse')),
  source_api text,
  config jsonb,
  refresh_interval text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.data_layers enable row level security;

create policy "Users can view data layers in their org"
  on public.data_layers for select
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can insert data layers in their org"
  on public.data_layers for insert
  with check (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can update data layers in their org"
  on public.data_layers for update
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can delete data layers in their org"
  on public.data_layers for delete
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

-- Risk Assessments
create table if not exists public.risk_assessments (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid not null references public.monitored_assets(id) on delete cascade,
  period text,
  risk_score int,
  risk_factors jsonb,
  trend text,
  assessed_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.risk_assessments enable row level security;

create policy "Users can view risk assessments via asset org"
  on public.risk_assessments for select
  using (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

create policy "Users can insert risk assessments via asset org"
  on public.risk_assessments for insert
  with check (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

create policy "Users can update risk assessments via asset org"
  on public.risk_assessments for update
  using (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

create policy "Users can delete risk assessments via asset org"
  on public.risk_assessments for delete
  using (asset_id in (
    select id from public.monitored_assets where org_id in (
      select org_id from public.profiles where user_id = auth.uid()
    )
  ));

-- Reports
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  report_type text not null check (report_type in ('monitoring', 'incident', 'risk_summary')),
  content jsonb,
  generated_at timestamptz not null default now(),
  shared_with jsonb,
  created_at timestamptz not null default now()
);

alter table public.reports enable row level security;

create policy "Users can view reports in their org"
  on public.reports for select
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can insert reports in their org"
  on public.reports for insert
  with check (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can update reports in their org"
  on public.reports for update
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));

create policy "Users can delete reports in their org"
  on public.reports for delete
  using (org_id in (select org_id from public.profiles where user_id = auth.uid()));
