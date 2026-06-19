# Ritik Kumar Data Engineering Portfolio

Production-grade recruiter-focused portfolio website for Data Engineering, Analytics Engineering, SQL Server Data Engineer, dbt Developer, and Data Warehouse Engineer roles.

## Positioning

This is not a generic frontend or web developer portfolio. The content and information architecture are centered on:

- Data Engineering
- Data Platform Building
- SQL Server Data Warehousing
- dbt Analytics Engineering
- ETL / ELT and Data Quality
- BI-ready dimensional modeling

## Implemented Sections

- Hero with professional profile image, role positioning, social links, resume download, and metrics
- About section with professional summary, career journey, learning philosophy, engineering mindset, and open source contribution signal
- Evidence-based Data Engineering skills matrix
- Featured project cards with business problem, solution, architecture, technologies, achievements, recruiter value, and complexity score
- Searchable/filterable all-projects section
- Certification gallery connected to every certificate PDF in `public/assets/certificates`
- Resume preview and download connected to `public/assets/resume/ritik-resume.pdf`
- GitHub proof section with achievements and project highlights
- Contact section with email, LinkedIn, GitHub, Discord, and professional contact form

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS
- Lenis smooth scrolling
- Lucide React icons
- Radix UI primitives available for future expansion

## Content Model

Primary portfolio content is stored in:

```text
src/data/portfolio.ts
```

This file contains:

- Profile and contact data
- About copy
- GitHub metrics and achievements
- Project data
- Skill evidence data
- Certification records
- Resume and asset paths

## Assets

Public assets are served from:

```text
public/assets/
  certificates/
  profile/
  resume/
```

The original repository-level assets remain available in:

```text
/certificate
/my_images
/ritik resume.pdf
```

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Deployment

The existing GitHub Pages workflow builds this Vite app from:

```text
Kimi_Agent_Playza Blog Setup/app
```

The production build output is generated in:

```text
dist/
```
