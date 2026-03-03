# Hopify Kosova Monorepo

Production-oriented marketplace scaffold for Kosovo-focused ecommerce.

## Architecture

- `apps/web`: Next.js 14 App Router storefront, Tailwind styling, Zustand UI state, dark/light theme toggle, vendor/admin placeholders.
- `apps/api`: NestJS modular backend with JWT auth guard + RBAC guard and feature modules:
  `auth`, `users`, `vendors`, `products`, `orders`, `admin`, `analytics`, `ads`.
- `packages/ui`: shared UI components (`Button`) consumed by web app.
- `packages/config`: shared tsconfig/eslint presets.
- `prisma`: PostgreSQL schema + seed script.
- `docker-compose.yml`: Postgres + Redis local infra.

## Quick Start

```bash
pnpm install
cp .env.example .env
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
docker compose up -d
pnpm prisma generate
pnpm db:seed
pnpm build
```

## API Docs

Run API and open:
- `http://localhost:4000/docs`

## Prisma Core Tables

Includes core marketplace entities:
- users, vendors, categories, products, product_images
- orders, order_items, reviews, wishlists
- ads_campaigns, analytics_events, inventory_logs
- payments, commissions

## Kosovo Payment Adapter Strategy

Implement `PaymentProvider` interface in API:
1. **Stripe adapter**: cards + wallets, webhooks for payment lifecycle.
2. **PayPal adapter**: international buyer fallback, dispute tooling.
3. **Local bank adapter**: Kosovo bank transfer/virtual IBAN flow with reconciliation job.

Recommended orchestration:
- `PaymentService` chooses adapter by vendor config + buyer geo/currency.
- Unified payment status model (`pending`, `authorized`, `captured`, `failed`, `refunded`).
- Idempotency keys + webhook signature verification.

## Roadmap

1. Add real auth (refresh tokens, rotation, device sessions).
2. Introduce CQRS/events for analytics and inventory.
3. Vendor onboarding/KYC and payout scheduling.
4. Search and recommendations.
5. Observability (OpenTelemetry + structured logs + SLO dashboards).
6. Full test stack (unit/integration/e2e, contract tests).

## CI

GitHub Actions workflow (`.github/workflows/ci.yml`) runs:
- lint
- test (placeholder stubs)
- build

## GitHub Pages Hosting (Frontend)

The web app can auto-deploy to GitHub Pages via:
- `.github/workflows/deploy-pages.yml`

After enabling **Settings → Pages → Source: GitHub Actions**, the storefront will be available at:
- `https://artin64.github.io/shopks/`

> Note: GitHub Pages hosts only the static frontend (`apps/web`). The NestJS API requires separate hosting (VPS/Render/Railway/etc.).
