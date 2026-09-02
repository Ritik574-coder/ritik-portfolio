# How to Add Portfolio Content

## Add a certificate

1. Put the PDF in `Kimi_Agent_Playza Blog Setup/app/public/assets/certificates/`.
2. In `src/data/portfolio.ts`, add this object inside `certifications`:

```ts
{
  name: "Certificate name",
  issuer: "Course provider",
  category: "SQL",
  issueDate: "2026-09",
  file: "exact-file-name.pdf",
  skills: ["SQL", "Data Engineering"],
},
```

Use the exact PDF filename. `issueDate` is `YYYY-MM`; `skills` is a list of related skills.

## Add a project

Add this object inside `projects` in `src/data/portfolio.ts`:

```ts
{
  id: "short-unique-id",
  title: "Project name",
  category: "Data Engineering",
  repository: "github-repository-name",
  href: "https://github.com/Ritik574-coder/repository-name",
  businessProblem: "What real-world problem or need did this solve?",
  solution: "What did you build and how did it solve the problem?",
  architecture: ["Main layer, pipeline, or design pattern"],
  technologies: ["SQL Server", "Python"],
  achievements: ["Important result, feature, or measurable outcome"],
  recruiterValue: "What this project proves about your engineering skills.",
  complexity: 3,
},
```

`businessProblem` is the original need. `solution` is your approach. `achievements` are the concrete results. Use `Data Engineering`, `Business Intelligence`, or `Learning` for `category`; `complexity` can be any number from 1 to 5.

## Publish it

Always use the `main` branch:

```bash
git add "Kimi_Agent_Playza Blog Setup/app/public/assets/certificates/new-file.pdf" "Kimi_Agent_Playza Blog Setup/app/src/data/portfolio.ts"
git commit -m "content: add certificate or project"
git push origin main
```

The TypeScript types at the top of both arrays make missing or incorrectly shaped fields fail the build instead of silently being ignored.

Check deployment at the [GitHub Actions tab](https://github.com/Ritik574-coder/ritik-portfolio/actions). Open the newest workflow run and wait for both **build** and **deploy** to show green checks.
