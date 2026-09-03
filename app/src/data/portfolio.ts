export type ProjectCategory =
  | "Data Engineering"
  | "AI & ML Engineering"
  | "Business Intelligence"
  | "Data Platform"
  | "Learning";

export interface Project {
  id: string;
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
  media?: {
    screenshot?: { src: string; alt: string };
    diagram?: { src: string; alt: string; type: "dbt DAG" | "Star schema" | "Medallion architecture" | "Data flow" };
  };
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
  title: "Data Engineer & AI/ML Specialist",
  headline:
    "Building scalable, analytics-ready data systems and intelligent AI/ML pipelines from raw ingestion to enterprise data products.",
  location: "Patna, Bihar, India",
  email: "ritik74820@gmail.com",
  discord: "ritik_sky",
  discordUrl: "https://discord.com/users/1405958607429828708",
  github: "https://github.com/Ritik574-coder",
  linkedin: "https://www.linkedin.com/in/ritik-kumar-b81b32375/",
  tableau: "https://public.tableau.com/app/profile/ritik.sky",
  resumeUrl: `${import.meta.env.BASE_URL}assets/resume/ritik-resume.pdf`,
  portrait: `${import.meta.env.BASE_URL}assets/profile/ritik-kumar-portrait.webp`,
  stats: [
    { label: "Public Repositories", value: "20+" },
    { label: "Commits", value: "1,900+" },
    { label: "Projects", value: "16+" },
    { label: "Open Source", value: "Active Contributor" },
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
    "GitHub activity includes 20+ public repositories, 1,900+ commits, reusable project documentation, issue/PR templates, GitHub Actions workflows, and community-facing dbt/data warehouse/AI learning assets.",
};

export const github = {
  username: "Ritik574-coder",
  repositories: "20+",
  commits: "1,900+",
  achievements: ["Pull Shark x3", "Pair Extraordinaire x3", "Quickdraw", "YOLO"],
  highlights: [
    "Snowflake Data Engineering covering RBAC, virtual warehouses, and Star Schema modeling",
    "AI-assisted content pipelines with human-in-the-loop review and Cloudflare D1 storage",
    "AWS Data Engineering Lab with automated Boto3 pipelines and S3/Glue lakehouses",
    "dbt CI/CD with lint, parse, compile, run, test, deploy, and docs workflows",
    "SQL Server data warehouses using Bronze, Silver, and Gold Medallion schemas",
    "Knowledge graph data modeling linking interconnected nodes, entities, and provenance",
  ],
};

// Required for every project: id, title, category, repository, href, businessProblem,
// solution, architecture, technologies, achievements, recruiterValue, and complexity.
export const projects: Project[] = [
  {
    id: "snowflake-data-engineering",
    title: "Snowflake Cloud Data Engineering",
    category: "Data Engineering",
    repository: "Snowflake-Data-Engineering-Project",
    href: "https://github.com/Ritik574-coder/Snowflake-Data-Engineering-Project",
    businessProblem:
      "Enterprise analytics demanded modern cloud data warehousing on Snowflake with scalable multi-cluster compute separation, secure role-based access control, and automated dimensional modeling.",
    solution:
      "Engineered an end-to-end Snowflake data warehouse featuring structured staging layers, dimensional Star Schema marts, data quality profiling, and automated Python-driven loading pipelines.",
    architecture: [
      "Snowflake Virtual Warehouses with compute/storage separation",
      "Staging, Silver conformance, and Gold Star Schema marts",
      "Role-Based Access Control (RBAC) and security hierarchy",
      "Snowflake Tasks, Streams, and automated Python ingestion",
    ],
    technologies: ["Snowflake", "SQL", "Python", "Dimensional Modeling", "Cloud Data Warehouse"],
    achievements: [
      "Configured multi-cluster compute scaling and warehouse cost governance",
      "Modeled dimensional fact and dimension tables with role segregation",
      "Automated batch data quality checks and loading pipelines",
    ],
    recruiterValue:
      "Proves hands-on competence with Snowflake, one of the most widely adopted enterprise cloud data warehouse platforms.",
    complexity: 4.8,
    featured: true,
  },
  {
    id: "contentflow-ai",
    title: "ContentFlow AI & Agentic Pipelines",
    category: "AI & ML Engineering",
    repository: "contentflow-ai",
    href: "https://github.com/Ritik574-coder/contentflow-ai",
    businessProblem:
      "Manual content generation and publishing was fragmented, prone to hallucination, and lacked verification gates for human quality review.",
    solution:
      "Built an AI-assisted pipeline orchestrating multi-platform content publishing with human-in-the-loop approval, automated prompt chains, and serverless Cloudflare D1 relational storage.",
    architecture: [
      "LLM Prompt & Agent Orchestration layer",
      "Human-in-the-loop Approval & Gatekeeping Workflow",
      "Cloudflare Workers with D1 Serverless SQL storage",
      "Multi-platform automated REST API publishing",
    ],
    technologies: ["AI Agents", "LLM Workflows", "TypeScript", "Cloudflare D1", "REST APIs"],
    achievements: [
      "Implemented automated prompt workflows with JSON schema enforcement",
      "Built an interactive approval gatekeeper preventing unreviewed publication",
      "Integrated low-latency D1 serverless relational data persistence",
    ],
    recruiterValue:
      "Demonstrates modern AI/ML Engineering capability: combining LLM orchestration with structured databases, state machines, and production guardrails.",
    complexity: 4.5,
    featured: true,
  },
  {
    id: "aws-data-engineering-lab",
    title: "AWS Data Engineering Lab",
    category: "Data Engineering",
    repository: "aws-data-engineering-lab",
    href: "https://github.com/Ritik574-coder/aws-data-engineering-lab",
    businessProblem:
      "Production cloud data pipelines require mastery of AWS services, IAM security policies, infrastructure automation, and cost-effective lakehouse query patterns.",
    solution:
      "Developed a comprehensive AWS Data Engineering lab implementing Boto3 scripts, S3 data lake partitioning, Glue catalog crawlers, and serverless Amazon Athena SQL queries.",
    architecture: [
      "AWS S3 Data Lake Partitioning & Lifecycle Rules",
      "AWS Glue Data Catalog & Automated Crawlers",
      "Amazon Athena Serverless SQL Analytics",
      "Boto3 Python Ingestion & Orchestration",
      "IAM Least-Privilege Security Policies",
    ],
    technologies: ["AWS S3", "AWS Glue", "Amazon Athena", "Boto3", "Python", "AWS CLI"],
    achievements: [
      "Engineered automated S3 partition management with Boto3",
      "Configured Glue crawler schemas for zero-server Athena SQL queries",
      "Implemented cloud security best practices with dedicated IAM roles",
    ],
    recruiterValue:
      "Proves hands-on AWS cloud data capabilities for teams building and deploying data lakehouses in AWS.",
    complexity: 4.5,
    featured: true,
  },
  {
    id: "great-minds-knowledge-graph",
    title: "Knowledge Graph & Graph Modeling",
    category: "AI & ML Engineering",
    repository: "Great-Minds-Knowledge-Graph",
    href: "https://github.com/Ritik574-coder/Great-Minds-Knowledge-Graph",
    businessProblem:
      "Interconnected relationships between historical decisions, lessons, technological discoveries, and systems cannot be modeled effectively in flat tabular schemas.",
    solution:
      "Created an interactive graph-based data system modeling entities, relationships, provenance, and network connections with visual dynamic exploration.",
    architecture: [
      "Graph Data Modeling (Nodes & Directed Edges)",
      "Entity-Relationship Provenance Engine",
      "Interactive Dynamic Graph Canvas & Traversal",
      "Multi-dimensional Filtering & Search Interface",
    ],
    technologies: ["Graph Data", "JavaScript", "Knowledge Graphs", "Network Analysis"],
    achievements: [
      "Modeled multi-hop interconnected graph nodes with semantic relationships",
      "Built dynamic visual exploration with real-time node traversal",
      "Structured provenance and source verification metadata for AI RAG readiness",
    ],
    recruiterValue:
      "Demonstrates advanced knowledge graph data modeling, increasingly essential for Graph RAG, agentic context, and semantic architectures.",
    complexity: 4.2,
    featured: true,
  },
  {
    id: "logging-for-data-engineers",
    title: "Logging & Observability for Data Pipelines",
    category: "Data Platform",
    repository: "Logging-For-Data-Engineers",
    href: "https://github.com/Ritik574-coder/Logging-For-Data-Engineers",
    businessProblem:
      "Silent pipeline failures, unmonitored data drift, and missing runtime telemetry in batch ETL jobs lead to downstream corrupt data marts.",
    solution:
      "Architected structured JSON logging, metrics collection, and alerting patterns for data engineering jobs with Docker and Python.",
    architecture: [
      "Structured JSON Log Formatting & Schema",
      "Execution Timing & Process Metric Counters",
      "Pipeline Health Checks & Anomaly Alarms",
      "Dockerized Telemetry & Test Environments",
    ],
    technologies: ["Python", "Structured Logging", "Docker", "Shell", "Observability"],
    achievements: [
      "Standardized data pipeline logging schema across batch processes",
      "Captured contextual telemetry (row counts, duration, error trace)",
      "Automated health check verification for reliable alerting",
    ],
    recruiterValue:
      "Shows production maturity: proving that pipelines are designed to be observable, testable, and maintainable in enterprise environments.",
    complexity: 3.8,
  },
  {
    id: "dbt-analytics-engineering",
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
    id: "retail-medallion-data-warehouse",
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
    id: "sql-server-data-warehouse",
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
    id: "data-ecosystem-platform",
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
    id: "dbt-learning-project",
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
    id: "workforce-pulse",
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
    id: "people-insights",
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
    id: "sales-pulse-2023",
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
    id: "world-economy-analysis",
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
    id: "atm-analytics-dashboard",
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
    id: "data-job-dashboard",
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
  { name: "Snowflake Data Cloud", group: "Data Platform", level: 90, evidence: "End-to-end Snowflake data warehouse covering RBAC, compute scaling, and dimensional marts." },
  { name: "dbt", group: "Analytics Engineering", level: 92, evidence: "CI/CD dbt project, snapshots, tests, macros, seeds, docs, and 169-commit learning repository." },
  { name: "Data Modeling", group: "Analytics Engineering", level: 90, evidence: "Star Schema marts, facts, dimensions, SCD Type 2, and Gold-layer modeling." },
  { name: "AWS Cloud (S3, Glue, Athena)", group: "Data Platform", level: 86, evidence: "Hands-on AWS Data Engineering Lab with automated Boto3 pipelines and S3 data lakes." },
  { name: "AI & LLM Workflows", group: "Analytics Engineering", level: 84, evidence: "ContentFlow AI agentic pipelines with human-in-the-loop review and Cloudflare D1 storage." },
  { name: "Knowledge Graphs", group: "Analytics Engineering", level: 80, evidence: "Great Minds Knowledge Graph with dynamic graph modeling and provenance verification." },
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

// Required for every certificate: name, issuer, category, issueDate, file, and skills.
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
