# Suprema Site - Professional Website Creation Agency

## Overview

Suprema Site is a Brazilian digital agency website specializing in professional website creation, e-commerce solutions, and local SEO services. The platform is built as a single-page application (SPA) targeting clients in Curitiba and the surrounding metropolitan region. The site features dynamic location-based SEO pages for neighborhoods and cities, a portfolio showcase, service descriptions, and lead generation forms that integrate with WhatsApp for direct customer communication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Routing**: React Router DOM v7 for client-side navigation with dynamic route parameters
- **Styling**: Tailwind CSS loaded via CDN with custom configuration for brand colors
- **Icons**: Lucide React for consistent iconography throughout the application

### Component Structure
- **Layout Components**: Header, Footer, FloatingButtons, SocialSection provide consistent UI wrapper
- **Page Components**: Located in `/pages` directory (Home, Services, Portfolio, About, Contact, LocationSEO, NotFound)
- **Reusable Components**: Located in `/components` directory (Accordion, LeadForm, VideoPlayer)
- **Data Layer**: Static data files in `/data` directory containing location information for SEO pages

### SEO Strategy
- Dynamic meta tags and canonical URLs updated via useEffect hooks (uses useLocation for accurate path detection)
- Location-based landing pages generated from slug parameters with 25 FAQ questions for comprehensive SEO coverage
- JSON-LD structured data for local business schema with dynamic URL generation
- URL patterns for geographic targeting:
  - `/bairros/:slug` - For Curitiba neighborhoods (primary)
  - `/cidades/:slug` - For metropolitan cities (primary)
  - `/site-em-:slug` - Legacy route (still supported)

### Lead Generation Flow
- Forms collect user data (name, phone, email, message)
- On submission, data is encoded and redirected to WhatsApp API for direct business communication
- No backend database required - leads go directly to WhatsApp

### Deployment Configuration
- Vercel deployment with SPA rewrite rules (all routes to index.html)
- Static site generation possible via Vite build process

## External Dependencies

### Third-Party Services
- **WhatsApp Business API**: Primary lead capture channel via `wa.me` links with pre-filled messages
- **YouTube Embed**: Video content integration for marketing materials
- **Google Fonts**: Inter font family loaded for typography
- **Tailwind CDN**: CSS framework loaded from CDN rather than bundled

### Environment Variables
- `GEMINI_API_KEY`: Referenced in Vite config but appears to be optional/unused in current implementation

### External Links
- Social media integrations: Instagram, Facebook, TikTok
- Bio link service: bio.supremamidia.com.br
- Phone/SMS: Direct calling via tel: protocol