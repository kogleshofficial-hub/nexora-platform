# Nexora — Scope & Quote Operations Prototype

A dark, responsive prototype for commercial cleaning enquiry intake, scope completeness checks, deterministic quote estimates, and human approvals.

> Prototype only. All records and prices are fictional demo assumptions. Do not enter real customer or personal data. No AI API, payments, external email, or quote sending is connected.

## Stack

- Next.js App Router + React + TypeScript
- Custom CSS (no paid UI kit)
- Local in-memory demo state
- Deterministic pricing and scope validation

## Run locally

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Prototype behaviour

- Navigate Overview, Enquiries, Quote Desk, Rate Card, and Activity.
- Create fictional enquiries in the local demo session.
- Inspect source-linked fields and missing-scope blockers.
- Generate a draft estimate using the editable fictional rate card.
- Simulate approval. Approval does not send anything to a customer.

## Important boundaries

- Demo state resets when the page is refreshed.
- No authentication, database, AI provider, payments, file uploads, or integrations are present.
- Rate-card figures are invented for demonstrating calculation logic; they are not market pricing guidance.
- Do not deploy this prototype as a commercial service or process real personal data.

## Next engineering milestones

1. Validate the workflow with interviews before expanding features.
2. Add tests around scope gates and pricing rules.
3. Design authentication, tenant isolation, audit events, and data deletion before any real-data pilot.
4. Add AI extraction only after legal/provider eligibility, cost, privacy, and reliability checks.
