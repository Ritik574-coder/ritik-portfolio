# Developer Guide: Adding Projects, Certificates & Skills to Your Portfolio

This guide explains how to add new **Projects**, **Certificates**, and **Skills** to your portfolio as your work in **Data Engineering** and **AI / ML Engineering** grows.

---

## Source of Truth

All portfolio content is centralized in one typed TypeScript file:
```
app/src/data/portfolio.ts
```
Whenever you add or update content, you only edit this file (and drop any certificate PDFs into `app/public/assets/certificates/`). There is no need to write or alter UI components!

---

## 1. How to Add a New Project

Open `app/src/data/portfolio.ts` and locate the `export const projects: Project[] = [` array.

Add your new project object to the top of the array:

```typescript
{
  id: "my-new-ai-pipeline", // Unique kebab-case ID
  title: "Real-Time AI / ML Data Pipeline", // Display title
  category: "AI & ML Engineering", // Options: "Data Engineering" | "AI & ML Engineering" | "Data Platform" | "Business Intelligence" | "Learning"
  repository: "my-new-ai-pipeline", // GitHub repository name
  href: "https://github.com/Ritik574-coder/my-new-ai-pipeline", // Full GitHub link
  businessProblem:
    "Describe the real-world problem, e.g., Unstructured document streams required low-latency vector embedding and semantic search with automated guardrails.",
  solution:
    "Describe what you engineered, e.g., Built an automated streaming ingestion pipeline using Python, LangChain, Kafka, and pgvector with Docker Compose.",
  architecture: [
    "Kafka topic streaming ingestion",
    "FastAPI & LangChain embedding service",
    "pgvector PostgreSQL storage",
    "Docker Compose local reproducible environment",
  ],
  technologies: ["Python", "pgvector", "Kafka", "LangChain", "Docker", "SQL"],
  achievements: [
    "Processed 10,000+ vector embeddings with sub-second latency",
    "Automated CI testing with GitHub Actions",
    "Documented architecture and data flow in README",
  ],
  recruiterValue:
    "Signals practical AI/ML engineering capability: building reliable data pipelines for AI workloads rather than toy demos.",
  complexity: 4.5, // Rating from 1 to 5 (used for star rating)
  featured: true, // true or false (highlights on top)
},
```

### Supported Project Categories:
- `"Data Engineering"`
- `"AI & ML Engineering"`
- `"Data Platform"`
- `"Business Intelligence"`
- `"Learning"`

---

## 2. How to Add a New Certificate

Adding a certificate takes just 2 simple steps:

### Step 1: Save the Certificate PDF
Save your certificate PDF inside the directory:
```
app/public/assets/certificates/
```
Example filename: `Snowflake_SnowPro_Core_Certificate.pdf`

### Step 2: Add Entry in `app/src/data/portfolio.ts`
Locate `export const certifications: Certification[] = [` in `portfolio.ts` and add:

```typescript
{
  name: "SnowPro Core Certification",
  issuer: "Snowflake", // e.g. DataCamp, Astronomer, LinkedIn Learning, AWS, Snowflake
  category: "Snowflake", // Category filter tab (e.g. Snowflake, dbt, SQL, Python, Cloud, AI)
  issueDate: "2026-09", // Format: YYYY-MM
  file: "Snowflake_SnowPro_Core_Certificate.pdf", // Exact filename from public/assets/certificates/
  skills: ["Snowflake", "Cloud Data Warehouse", "SQL", "Security"],
},
```

The portfolio will automatically:
- Render the certificate in the 32+ Credentials registry.
- Enable the in-browser PDF Lightbox Viewer with Fullscreen and Download support.

---

## 3. How to Add a New Skill

Open `app/src/data/portfolio.ts` and locate `export const skills: Skill[] = [`.

Add your new skill:

```typescript
{
  name: "Apache Kafka", // Skill or tool name
  group: "Data Platform", // Options: "Data Engineering" | "Analytics Engineering" | "Data Platform" | "BI & Analytics"
  level: 85, // Proficiency level (1 - 100)
  evidence: "Real repository proof, e.g., Real-time streaming pipeline repo with Dockerized broker and Python producers/consumers.",
},
```

---

## 4. Real-Time GitHub API Integration

Your portfolio is connected to your live GitHub account:
- **Username**: `Ritik574-coder`
- The site automatically connects to GitHub's REST API (`https://api.github.com/users/Ritik574-coder`) on page load.
- It dynamically displays your latest:
  - **Public Repositories count** (20+)
  - **Followers** (180+)
  - **Recent Commit activity**
  - **Repository stars and forks**
- Caching is managed locally with a 1-hour TTL to ensure lightning-fast page speed without hitting GitHub rate limits.

---

## 5. How to Test & Deploy Your Changes

Whenever you add new content:

### 1. Test build locally
```bash
cd app
npm run build
```
Ensure the build outputs `✓ built in X.XXs` with 0 errors.

### 2. Preview in Browser
```bash
npm run dev
```
Open `http://localhost:5173` to see your changes live.

### 3. Commit & Push to GitHub
```bash
git add .
git commit -m "feat: add new Snowflake and AI/ML project and certifications"
git push origin main
```
Your live portfolio will automatically update!
