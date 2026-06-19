export type ProjectCategory = "Data Engineering" | "Business Intelligence" | "Learning";

export interface Project {
  title: string;
  category: ProjectCategory;
  repository: string;
  href: string;
  businessProblem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  achievements: string[];
  recruiterValue: string;
  complexity: number;
  featured?: boolean;
}

export interface Skill {
  name: string;
  group: "Data Engineering" | "Analytics Engineering" | "Data Platform" | "BI & Analytics";
  level: number;
  evidence: string;
}

export interface Certification {
  name: string;
  issuer: string;
  category: string;
  issueDate: string;
  file: string;
  skills: string[];
}

const certificatePath = (file: string) =>
  `${import.meta.env.BASE_URL}assets/certificates/${encodeURIComponent(file)}`;

export const profile = {
  name: "Ritik Kumar",
  title: "Data Engineer",
  headline:
    "Building scalable, analytics-ready data systems from raw ingestion to business-ready data products.",
  location: "Patna, Bihar, India",
  email: "ritik74820@gmail.com",
  discord: "ritik_sky",
  discordUrl: "https://discord.com/users/1405958607429828708",
  github: "https://github.com/Ritik574-coder",
  linkedin: "https://www.linkedin.com/in/ritik-kumar-b81b32375/",
  tableau: "https://public.tableau.com/app/profile/ritik.sky",
  resumeUrl: `${import.meta.env.BASE_URL}assets/resume/ritik-resume.pdf`,
  portrait: `${import.meta.env.BASE_URL}assets/profile/ritik-kumar-portrait.png`,
  stats: [
    { label: "Public Repositories", value: "13+" },
    { label: "Commits", value: "480+" },
    { label: "Projects", value: "12+" },
    { label: "Open Source", value: "Contributor" },
  ],
};

export const about = {
  summary:
    "I build data systems that turn messy operational data into governed, analytics-ready models. My portfolio is centered on SQL Server data warehousing, dbt analytics engineering, Medallion Architecture, data quality, CI/CD, and BI delivery.",
  journey:
    "My strongest work is project-led: production-style dbt pipelines with GitHub Actions, multi-source SQL Server warehouses, retail data quality systems, and dashboards that translate warehouse outputs into business decisions.",
  philosophy:
    "I learn by building complete systems, documenting tradeoffs, and raising each project toward professional team standards: architecture diagrams, tests, lineage, quality checks, and reproducible local environments.",
  mindset:
    "My engineering bias is toward clear layer boundaries, defensive SQL, auditable transformations, documented business rules, and simple deployment paths that recruiters and hiring managers can verify quickly.",
  openSource:
    "GitHub activity includes 13+ public repositories, 480+ commits, reusable project documentation, issue/PR templates, GitHub Actions workflows, and community-facing dbt/data warehouse learning assets.",
};

export const github = {
  username: "Ritik574-coder",
  repositories: "13+",
  commits: "480+",
  achievements: ["Pull Shark x3", "Pair Extraordinaire x3", "Quickdraw", "YOLO"],
  highlights: [
    "dbt CI/CD with lint, parse, compile, run, test, deploy, and docs workflows",
    "SQL Server data warehouses using Bronze, Silver, and Gold schemas",
    "Retail warehouse project with per-entity documentation and defensive data quality rules",
    "BI repository covering HR, sales, economy, ATM, and data job analytics",
  ],
};

export const projects: Project[] = [
  {
    title: "dbt Analytics Engineering",
    category: "Data Engineering",
    repository: "dbt-analytics-engineering",
    href: "https://github.com/Ritik574-coder/dbt-analytics-engineering",
    businessProblem:
      "Transformation logic was unversioned, untested, manually deployed, and difficult to maintain as analytics rules became more complex.",
    solution:
      "Built a production-style dbt Core project on SQL Server with CI/CD, SQLFluff linting, SCD Type 2 snapshots, tests, macros, seeds, and docs published through GitHub Pages.",
    architecture: [
      "Staging, intermediate, and marts model layers",
      "SQL Server 2022 in Docker Compose",
      "GitHub Actions for CI, CD, and documentation",
      "dbt tests, snapshots, macros, seeds, and lineage docs",
    ],
    technologies: ["dbt Core", "SQL Server", "T-SQL", "Docker", "GitHub Actions", "SQLFluff", "Python"],
    achievements: [
      "Automated PR validation with dbt parse, compile, run, and test",
      "Production deployment workflow with repository secrets",
      "SCD Type 2 history tracking through dbt snapshots",
      "Generated dbt documentation and lineage for reviewers",
    ],
    recruiterValue:
      "Shows readiness for analytics engineering teams that expect tested SQL, dbt conventions, CI/CD, lineage, and production deployment discipline.",
    complexity: 5,
    featured: true,
  },
  {
    title: "Retail Medallion Data Warehouse",
    category: "Data Engineering",
    repository: "Medallion-Data-Warehouse",
    href: "https://github.com/Ritik574-coder/Medallion-Data-Warehouse",
    businessProblem:
      "A retail business needed unified analytics across customers, employees, inventory, products, stores, returns, reviews, and sales transactions despite inconsistent source quality.",
    solution:
      "Created a containerized SQL Server 2022 warehouse using Medallion Architecture with per-entity Silver transformations and documented business rules.",
    architecture: [
      "Bronze raw ingestion from CSV files",
      "Silver cleansing with isolated entity pipelines",
      "Gold star schema design in progress",
      "GitHub project governance and PR automation",
    ],
    technologies: ["SQL Server 2022", "T-SQL", "Docker Compose", "GitHub Actions", "CSV Batch Ingestion"],
    achievements: [
      "Implemented defensive SQL with TRY_CONVERT and CASE logic",
      "Standardized dates, emails, phones, currency, booleans, and categories",
      "Documented transformations for 8 retail entities",
      "Added issue templates, PR template, changelog, and security docs",
    ],
    recruiterValue:
      "Demonstrates the data quality work that dominates real warehouse delivery: messy sources, entity-specific rules, auditability, and maintainable SQL.",
    complexity: 4.5,
    featured: true,
  },
  {
    title: "SQL Server Data Warehouse",
    category: "Data Engineering",
    repository: "sqlserver-datawarehouse",
    href: "https://github.com/Ritik574-coder/sqlserver-datawarehouse",
    businessProblem:
      "CRM and ERP data were siloed, preventing business users from analyzing customers, products, locations, and sales from one trusted model.",
    solution:
      "Built a complete SQL Server warehouse with Bronze, Silver, and Gold layers, stored procedure ETL, dimensional views, and Apache Superset dashboards.",
    architecture: [
      "CRM and ERP source ingestion",
      "Bronze raw tables for auditability",
      "Silver standardization and conformance",
      "Gold Star Schema views for BI consumption",
    ],
    technologies: ["SQL Server", "T-SQL Stored Procedures", "Python", "Apache Superset", "Docker", "Shell"],
    achievements: [
      "Integrated 6 source tables across CRM and ERP domains",
      "Modeled dim_customers, dim_products, dim_location, and fact_sales",
      "Added quality checks across Bronze, Silver, and Gold layers",
      "Documented architecture with ERDs, data flow diagrams, and PlantUML",
    ],
    recruiterValue:
      "Proves end-to-end warehouse capability: ingestion, transformation, dimensional modeling, quality validation, documentation, and dashboard enablement.",
    complexity: 4,
    featured: true,
  },
  {
    title: "Data Ecosystem Platform",
    category: "Data Engineering",
    repository: "data-ecosystem-platform",
    href: "https://github.com/Ritik574-coder/data-ecosystem-platform",
    businessProblem:
      "Data engineering learning artifacts were spread across concepts without a single platform showing warehouse, lake, lakehouse, and distributed processing patterns.",
    solution:
      "Organized a multi-domain repository covering Data Warehouse, Data Lake, Data Lakehouse, Modern Data Engineering, and PySpark.",
    architecture: [
      "Warehouse concepts and dimensional modeling",
      "Data lake file-based architecture",
      "Lakehouse Medallion patterns",
      "PySpark distributed processing notebooks",
    ],
    technologies: ["Python", "PySpark", "Jupyter", "T-SQL", "Git"],
    achievements: [
      "Created a broad data architecture learning hub",
      "Covered warehouse, lake, lakehouse, and big data concepts",
      "Built 72-commit evidence trail of active learning",
    ],
    recruiterValue:
      "Shows platform-level thinking beyond one tool and prepares the portfolio for modern lakehouse and PySpark conversations.",
    complexity: 3.5,
    featured: true,
  },
  {
    title: "dbt Learning Project",
    category: "Learning",
    repository: "dbt_learning_project",
    href: "https://github.com/Ritik574-coder/dbt_learning_project",
    businessProblem:
      "Needed a structured path to learn dbt beyond basic tutorials, including testing, documentation, snapshots, incremental models, and environments.",
    solution:
      "Built a comprehensive SQL Server dbt project covering dbt fundamentals through advanced analytics engineering workflows.",
    architecture: [
      "Staging, intermediate, and marts layers",
      "Seeds, macros, variables, snapshots, and tests",
      "Source freshness and dbt docs",
      "GitHub Actions fundamentals",
    ],
    technologies: ["dbt Core", "SQL Server", "Python", "pyodbc", "GitHub Actions"],
    achievements: [
      "Maintained 169 commits showing sustained learning depth",
      "Earned community signal with a star and fork",
      "Documented the pipeline in DATA_PIPELINE_GUIDE.md",
    ],
    recruiterValue:
      "Signals disciplined learning and strong dbt foundation, useful for junior-to-associate analytics engineering roles.",
    complexity: 4,
    featured: true,
  },
  {
    title: "Workforce Pulse",
    category: "Business Intelligence",
    repository: "Bi-Project-",
    href: "https://github.com/Ritik574-coder/Bi-Project-",
    businessProblem: "HR teams needed visibility into attrition, demographics, and workforce performance without manual spreadsheet analysis.",
    solution: "Built an interactive Power BI HR analytics dashboard with navigation panels, tooltip pages, slicers, and KPI views.",
    architecture: ["Power BI semantic model", "DAX measures", "Bookmark navigation", "Tooltip drill-through pages"],
    technologies: ["Power BI", "DAX", "Excel/CSV"],
    achievements: ["Tracked attrition KPIs", "Added demographic breakdowns", "Created smooth navigation and tooltip drill-through"],
    recruiterValue: "Shows business-facing analytics delivery on top of data modeling skills.",
    complexity: 3.5,
  },
  {
    title: "People Insights",
    category: "Business Intelligence",
    repository: "Bi-Project-",
    href: "https://github.com/Ritik574-coder/Bi-Project-",
    businessProblem: "HR leadership needed to understand education, salary, age, and performance patterns for hiring and compensation decisions.",
    solution: "Created a Tableau HR dashboard with hiring trends, education-performance matrix, and salary-age scatter analysis.",
    architecture: ["Tableau Public dashboard", "HR analytics model", "Interactive visual analysis"],
    technologies: ["Tableau", "Excel/CSV"],
    achievements: ["Built salary-age scatter plot", "Mapped education and performance", "Visualized hiring trends"],
    recruiterValue: "Demonstrates analytics storytelling and dashboard design for stakeholders.",
    complexity: 3,
  },
  {
    title: "Sales Pulse 2023",
    category: "Business Intelligence",
    repository: "Bi-Project-",
    href: "https://github.com/Ritik574-coder/Bi-Project-",
    businessProblem: "Sales leaders needed a unified view of customer growth, order volume, top buyers, and year-over-year performance.",
    solution: "Developed a Power BI dashboard with KPI cards, YoY comparisons, customer growth tracking, and buyer spotlighting.",
    architecture: ["Power BI model", "DAX KPI measures", "Slicer-based sales exploration"],
    technologies: ["Power BI", "DAX", "Excel/CSV"],
    achievements: ["Created YoY KPI comparisons", "Highlighted top buyers", "Tracked order and customer growth"],
    recruiterValue: "Shows BI delivery for commercial analytics use cases.",
    complexity: 3,
  },
  {
    title: "World Economy Analysis",
    category: "Business Intelligence",
    repository: "Bi-Project-",
    href: "https://github.com/Ritik574-coder/Bi-Project-",
    businessProblem: "Analysts needed a visual way to compare macroeconomic indicators across countries and trends.",
    solution: "Built a global economy dashboard covering GDP, growth, geography, and economic health indicators.",
    architecture: ["Economic dataset modeling", "Geographic mapping", "Trend analysis dashboard"],
    technologies: ["Tableau", "Power BI", "Public Economic Data"],
    achievements: ["Visualized GDP by country", "Compared growth rates", "Mapped economic indicators geographically"],
    recruiterValue: "Adds domain breadth and analytical communication evidence.",
    complexity: 3,
  },
  {
    title: "ATM Analytics Dashboard",
    category: "Business Intelligence",
    repository: "Bi-Project-",
    href: "https://github.com/Ritik574-coder/Bi-Project-",
    businessProblem: "Financial operations needed monitoring across ATM uptime, transaction volume, and location-level performance.",
    solution: "Created an operational analytics dashboard for ATM network performance and transaction KPIs.",
    architecture: ["Operational KPI model", "Location-based dashboard", "Transaction volume analysis"],
    technologies: ["Power BI", "Tableau", "Financial Operations Data"],
    achievements: ["Tracked uptime", "Analyzed transaction volume", "Segmented ATM location performance"],
    recruiterValue: "Shows ability to model operational analytics use cases.",
    complexity: 2.5,
  },
  {
    title: "Data Job Dashboard",
    category: "Business Intelligence",
    repository: "Bi-Project-",
    href: "https://github.com/Ritik574-coder/Bi-Project-",
    businessProblem: "Data professionals needed a clear view of salary ranges, required skills, geography, and role demand.",
    solution: "Built a job market analytics dashboard comparing data roles, compensation, and skill demand trends.",
    architecture: ["Job market dataset", "Role comparison model", "Skill demand dashboard"],
    technologies: ["Power BI", "Tableau", "Job Market Data"],
    achievements: ["Analyzed salary ranges", "Compared data roles", "Tracked skills and geography"],
    recruiterValue: "Demonstrates market-aware analytics and dashboarding for decision support.",
    complexity: 2.5,
  },
];

export const skills: Skill[] = [
  { name: "Data Warehousing", group: "Data Engineering", level: 95, evidence: "SQL Server and Retail Medallion warehouses with Bronze, Silver, and Gold layers." },
  { name: "SQL Server / T-SQL", group: "Data Engineering", level: 95, evidence: "Stored procedures, DDL, defensive transformations, Star Schema views, and quality checks." },
  { name: "dbt", group: "Analytics Engineering", level: 92, evidence: "CI/CD dbt project, snapshots, tests, macros, seeds, docs, and 169-commit learning repository." },
  { name: "Data Modeling", group: "Analytics Engineering", level: 90, evidence: "Star Schema marts, facts, dimensions, SCD Type 2, and Gold-layer modeling." },
  { name: "Data Quality", group: "Data Engineering", level: 90, evidence: "TRY_CONVERT, CASE rules, deduplication, accepted values, and per-entity validation docs." },
  { name: "ETL / ELT", group: "Data Engineering", level: 88, evidence: "CSV ingestion, T-SQL ETL, dbt ELT, full refresh and incremental patterns." },
  { name: "GitHub Actions / CI/CD", group: "Data Platform", level: 84, evidence: "dbt CI, deployment, docs workflows, PR automation, and GitHub Pages publication." },
  { name: "Docker", group: "Data Platform", level: 82, evidence: "SQL Server 2022 Docker Compose environments and reproducible local development." },
  { name: "Python", group: "Data Engineering", level: 78, evidence: "Data engineering scripts, dbt runtime, notebooks, and SQL Server connectivity." },
  { name: "Apache Superset", group: "BI & Analytics", level: 74, evidence: "BI consumption layer for SQL Server Data Warehouse project." },
  { name: "Power BI", group: "BI & Analytics", level: 82, evidence: "Workforce Pulse, Sales Pulse, ATM Analytics, and Data Job dashboards." },
  { name: "Tableau", group: "BI & Analytics", level: 76, evidence: "People Insights and World Economy dashboards with Tableau Public presence." },
  { name: "PySpark", group: "Data Platform", level: 68, evidence: "Data Ecosystem Platform includes PySpark and distributed processing learning assets." },
];

export const certifications: Certification[] = [
  { name: "Advanced dbt", issuer: "DataCamp", category: "dbt", issueDate: "2026-06", file: "Advanced_dbt_certificate_data_camp.pdf", skills: ["dbt", "Analytics Engineering", "SQL"] },
  { name: "DataCamp dbt Certificate", issuer: "DataCamp", category: "dbt", issueDate: "2026-06", file: "Data_camp_dbt_certificate.pdf", skills: ["dbt", "Data Modeling"] },
  { name: "dbt Project Certificate", issuer: "DataCamp", category: "dbt", issueDate: "2026-06", file: "dbt_project_certificate_data_camp.pdf", skills: ["dbt", "Projects"] },
  { name: "Data Engineering with dbt", issuer: "LinkedIn Learning", category: "dbt", issueDate: "2026-03", file: "CertificateOfCompletion_Data Engineering with dbt.pdf", skills: ["dbt", "Analytics Engineering"] },
  { name: "Complete Guide to SQL for Data Engineering", issuer: "LinkedIn Learning", category: "SQL", issueDate: "2026-03", file: "CertificateOfCompletion_Complete Guide to SQL for Data Engineering from Beginner to Advanced.pdf", skills: ["SQL", "Data Engineering"] },
  { name: "Learning SQL Programming", issuer: "LinkedIn Learning", category: "SQL", issueDate: "2026-03", file: "CertificateOfCompletion_Learning SQL Programming.pdf", skills: ["SQL"] },
  { name: "SQL Advanced", issuer: "Certificate Provider", category: "SQL", issueDate: "2026-06", file: "sql_advanced certificate.pdf", skills: ["SQL"] },
  { name: "SQL Intermediate", issuer: "Certificate Provider", category: "SQL", issueDate: "2026-06", file: "sql_intermediate certificate.pdf", skills: ["SQL"] },
  { name: "ETL in Python and SQL", issuer: "LinkedIn Learning", category: "ETL", issueDate: "2026-03", file: "CertificateOfCompletion_ETL in Python and SQL.pdf", skills: ["ETL", "Python", "SQL"] },
  { name: "ETL and ELT Using Python", issuer: "DataCamp", category: "ETL", issueDate: "2026-06", file: "etl_and_elt_using_python_datacamp.pdf", skills: ["ETL", "ELT", "Python"] },
  { name: "End-to-End Data Engineering Project", issuer: "LinkedIn Learning", category: "Data Engineering", issueDate: "2026-03", file: "CertificateOfCompletion_EndtoEnd Data Engineering Project.pdf", skills: ["Data Engineering", "Pipelines"] },
  { name: "Data Engineering Hands-On Practice", issuer: "LinkedIn Learning", category: "Data Engineering", issueDate: "2026-03", file: "CertificateOfCompletion_Data Engineering HandsOn Practice.pdf", skills: ["Data Engineering"] },
  { name: "Hands-On Introduction Data Engineering", issuer: "LinkedIn Learning", category: "Data Engineering", issueDate: "2026-03", file: "CertificateOfCompletion_HandsOn Introduction Data Engineering.pdf", skills: ["Data Engineering"] },
  { name: "Hands-On Advanced Python Data Engineering Basics", issuer: "LinkedIn Learning", category: "Python", issueDate: "2026-03", file: "CertificateOfCompletion_HandsOn Advanced Python Data Engineering Basics.pdf", skills: ["Python", "Data Engineering"] },
  { name: "Complete Guide to Python for Data Engineering", issuer: "LinkedIn Learning", category: "Python", issueDate: "2026-03", file: "Complete Guide to Python for Data Engineering From Beginner to Advanced.pdf", skills: ["Python", "Data Engineering"] },
  { name: "Intermediate Python for Non-Programmers", issuer: "LinkedIn Learning", category: "Python", issueDate: "2026-04", file: "CertificateOfCompletion_Intermediate Python for NonProgrammers.pdf", skills: ["Python"] },
  { name: "Python Basic", issuer: "Certificate Provider", category: "Python", issueDate: "2026-06", file: "python_basic certificate.pdf", skills: ["Python"] },
  { name: "Introduction to Data Warehouses", issuer: "LinkedIn Learning", category: "Data Warehouse", issueDate: "2026-03", file: "CertificateOfCompletion_Introduction to Data Warehouses.pdf", skills: ["Data Warehouse", "Modeling"] },
  { name: "Data Engineering Foundations Professional Certificate by Astronomer", issuer: "Astronomer / LinkedIn Learning", category: "Data Engineering", issueDate: "2026-03", file: "CertificateOfCompletion_Data Engineering Foundations Professional Certificate by Astronomer.pdf", skills: ["Data Engineering", "Airflow"] },
  { name: "Learning Apache Airflow", issuer: "LinkedIn Learning", category: "Orchestration", issueDate: "2026-03", file: "CertificateOfCompletion_Learning Apache Airflow.pdf", skills: ["Airflow", "Orchestration"] },
  { name: "Introduction to Spark SQL and DataFrames", issuer: "LinkedIn Learning", category: "Spark", issueDate: "2026-03", file: "CertificateOfCompletion_Introduction to Spark SQL and DataFrames.pdf", skills: ["Spark SQL", "DataFrames"] },
  { name: "PySpark Certificate", issuer: "Certificate Provider", category: "Spark", issueDate: "2026-06", file: "pyspark_certificate.pdf", skills: ["PySpark"] },
  { name: "Learning Docker", issuer: "LinkedIn Learning", category: "Docker", issueDate: "2026-03", file: "CertificateOfCompletion_Learning Docker.pdf", skills: ["Docker"] },
  { name: "Learning Docker Compose", issuer: "LinkedIn Learning", category: "Docker", issueDate: "2026-03", file: "CertificateOfCompletion_Learning Docker Compose.pdf", skills: ["Docker Compose"] },
  { name: "Docker Your First Project", issuer: "LinkedIn Learning", category: "Docker", issueDate: "2026-03", file: "CertificateOfCompletion_Docker Your First Project.pdf", skills: ["Docker"] },
  { name: "Docker Foundations Professional Certificate", issuer: "LinkedIn Learning", category: "Docker", issueDate: "2026-03", file: "CertificateOfCompletion_Docker Foundations Professional Certificate.pdf", skills: ["Docker"] },
  { name: "Learning Data Governance", issuer: "LinkedIn Learning", category: "Governance", issueDate: "2026-03", file: "CertificateOfCompletion_Learning Data Governance.pdf", skills: ["Governance", "Data Quality"] },
  { name: "Getting Started with Linux", issuer: "LinkedIn Learning", category: "Linux", issueDate: "2026-03", file: "CertificateOfCompletion_Getting Started with Linux.pdf", skills: ["Linux"] },
  { name: "Introduction to Linux 2021", issuer: "LinkedIn Learning", category: "Linux", issueDate: "2026-03", file: "CertificateOfCompletion_Introduction to Linux 2021.pdf", skills: ["Linux"] },
  { name: "Linux Files and Permissions", issuer: "LinkedIn Learning", category: "Linux", issueDate: "2026-03", file: "CertificateOfCompletion_Linux Files and Permissions.pdf", skills: ["Linux"] },
  { name: "Linux Overview and Installation", issuer: "LinkedIn Learning", category: "Linux", issueDate: "2026-03", file: "CertificateOfCompletion_Linux Overview and Installation.pdf", skills: ["Linux"] },
  { name: "Software Engineer Intern", issuer: "Certificate Provider", category: "Professional", issueDate: "2026-06", file: "software_engineer_intern certificate.pdf", skills: ["Professional Experience"] },
].map((certificate) => ({
  ...certificate,
  file: certificate.file,
}));

export const certificateUrl = (file: string) => certificatePath(file);
