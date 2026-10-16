# Suprema / Impact portfolio redesign

Review-only branch. Do not merge or publish to production without approval.

## Design
- Ink, electric cobalt and orange; oversized editorial typography and custom orbital composition.
- Portfolio-led hero, staggered project gallery and responsive service/process sections.
- Existing 16 portfolio entries, original presentation artwork, no invented screenshots or growth claims.
- Filter by category; accent-insensitive search by name, segment, city and technology; expandable native project disclosures.
- Pointer-driven depth on hero artwork, reveal motion and hover treatment with reduced-motion support.
- Accessible mobile menu, Escape-to-close, current-page semantics and skip navigation.
- Existing lead form moved to the final conversion section; original WhatsApp destinations retained.
- Removed the oversized floating promo banner from the global layout; retained the existing WhatsApp control.

## Verification
- npm run lint
- npm run build (includes SEO prerender)
- node scripts/check-design-contract.mjs
- Existing original PNG assets retained as requested. Optimized WebP work is local only and is not included in this review.
- Public route paths, index metadata, structured data, sitemap and prerender files untouched.

## Review still required
- Cloud-browser visual and interaction QA on a branch preview. Cloud browser cannot reach the local build server.
- Existing project figures/services were not independently audited. Growth percentages remain in source data but are not displayed in the new gallery.
- Existing SEO issues outside this redesign: homepage/portfolio are client-rendered; canonical/social metadata may be stale on client navigation; existing og-image.jpg reference lacks an asset in the source repository.
