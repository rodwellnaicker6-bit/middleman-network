-- MVP tables for The Middleman Network

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  niche_slug text not null,
  name text not null,
  phone text not null,
  email text,
  field_values jsonb default '{}',
  consent boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists provider_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business_name text not null,
  email text not null,
  phone text not null,
  niche_slug text not null,
  plan_slug text not null default 'growth',
  message text,
  status text not null default 'pending' check (status in ('pending','reviewing','approved','rejected')),
  created_at timestamptz not null default now()
);

-- Allow inserts from anon (public form submissions)
alter table leads enable row level security;
alter table provider_applications enable row level security;

create policy "Anyone can insert leads"
  on leads for insert to anon with check (true);

create policy "Anyone can insert applications"
  on provider_applications for insert to anon with check (true);
