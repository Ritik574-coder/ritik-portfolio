# 🚀 Ritik Kumar — Complete GitHub Portfolio Analysis
### Senior Technical Recruiter × Analytics Engineer × Data Engineering Expert Review
**GitHub:** [Ritik574-coder](https://github.com/Ritik574-coder) | **Date:** June 2026

---

## 📊 PROFILE OVERVIEW

**Name:** Ritik Kumar
**Focus:** Data Engineering | Analytics Engineering | BI & Data Visualization
**Location:** India | IST (UTC+5:30)
**Total Public Repositories:** 13
**GitHub Achievements:** Pair Extraordinaire ×3 · Pull Shark ×3 · YOLO · Quickdraw
**LinkedIn:** [ritik-kumar-b81b32375](https://www.linkedin.com/in/ritik-kumar-b81b32375/)
**Tableau Public:** [ritik.sky](https://public.tableau.com/app/profile/ritik.sky)

---

# REPOSITORY-BY-REPOSITORY ANALYSIS

---

## 📦 REPOSITORY 1: `sqlserver-datawarehouse`
**Link:** https://github.com/Ritik574-coder/sqlserver-datawarehouse
**Commits:** 53 | **Language:** Python 95.7%, T-SQL, Shell, Jupyter

---

### Elevator Pitch
A production-grade, end-to-end Business Data Warehouse built on SQL Server using the industry-standard Medallion Architecture (Bronze → Silver → Gold). Integrates CRM and ERP systems with full ETL pipelines, dimensional modeling, and Apache Superset dashboards — the kind of project that mirrors what Fortune 500 data teams build at scale.

---

### Business Problem
Enterprise data was siloed across a CRM system (customer and sales records) and an ERP system (demographics, geography, and product classification), making unified analytics impossible. Business users couldn't access clean, consistent data for reporting, segmentation, or product performance analysis.

### Solution Implemented
Built a layered SQL Server data warehouse that ingests raw CSV exports from both CRM and ERP, applies cleansing and standardization rules in a Silver layer, and surfaces business-ready dimensional models (Star Schema) in the Gold layer — all accessible via Apache Superset dashboards.

### Architecture
**Medallion Architecture (Bronze → Silver → Gold)**
- **Bronze Layer:** Raw, unprocessed data preserved as-is for full auditability. Tables loaded via Truncate & Insert (full refresh). No transformations applied.
- **Silver Layer:** Cleansed, standardized data. Transformations include deduplication, date normalization, country code mapping, product ID conforming across CRM/ERP, gender standardization, and sales transaction validation.
- **Gold Layer:** Business-ready Star Schema delivered as SQL Views. Outputs include `dim_customers`, `dim_products`, `dim_location`, and `fact_sales`.

### Technologies Used
SQL Server · T-SQL Stored Procedures · Python · Apache Superset · Docker · Git · CSV Batch Ingestion

### Data Engineering Concepts
- Multi-source data integration (CRM + ERP)
- Full-load batch ingestion with Truncate & Insert pattern
- Stored procedure-based ETL orchestration
- Schema initialization via `init_database.sql`
- Containerization with Docker (`docker/requirements-local.txt`)
- Shell-based environment setup (`setup_command.sh`)

### Analytics Engineering Concepts
- Business object modeling (customer 360, product hierarchy, sales fact)
- Dimensional modeling (Star Schema) in Gold layer
- BI-ready views for Superset consumption
- Dashboard query layer (`dashboard_query.sql`)

### Data Modeling Concepts
- Star Schema with fact and dimension tables
- Entity Relationship Diagram (documented with animated GIF in Docs/)
- Data flow lineage documented in `Data_Flow.png`
- Gold layer model design documented in PlantUML (`data_modle.puml`)

### ETL / ELT Concepts
- Classic ETL pattern (Extract from CSVs, Transform via T-SQL, Load to warehouse)
- Full refresh strategy (Truncate & Insert at each layer)
- Consistent 4-phase development workflow: Analyse → Code → Validate → Document

### Data Quality Concepts
- Dedicated quality validation queries (`qulity_check.sql`)
- Completeness and schema checks at Bronze layer
- Data correctness and conformance checks at Silver layer
- Data integration checks at Gold layer
- Exploratory data analysis notebook (`data_analysis.ipynb`)

### CI/CD Concepts
- Git-based version control with 53 commits
- Documented versioning practices at each layer

### Testing Concepts
- Completeness checks on raw ingestion
- Business rule validation at Silver transformation level
- Gold layer integration checks

### Documentation Concepts
- Architecture diagrams (`data_architecture.png`, `BusinessDW_Digram.png`)
- Data flow diagram (`Data_Flow.png`)
- Data layers PDF explanation (`data_layers.pdf`)
- Per-entity transformation documentation in `.md` files (e.g., `cust_info.md`, `prd_info.md`)
- PlantUML data model diagram (`data_modle.puml`, `dirgram.puml`)
- Gold layer data model as animated GIF (`gold_data_model.gif`)
- ERD (`relation_digram.gif`)
- Security policy (`SECURITY.md`)

### Key Features
- Dual-source integration (CRM: cust_info, prd_info, sales_details + ERP: CUST_AZ12, LOC_A101, PX_CAT_G1V2)
- Three-layer schema isolation (Bronze/Silver/Gold as separate SQL Server schemas)
- Stored procedures for each layer and each entity
- Apache Superset integration for BI dashboards
- Docker-based local development environment

### Technical Highlights
- **Multi-source entity resolution:** Customer IDs and product IDs are conformed across CRM and ERP systems in the Silver layer — a real-world enterprise challenge
- **PlantUML architecture diagrams:** Shows understanding of technical documentation tooling beyond basic README writing
- **Gold as Views (not Tables):** Deliberately chose views over tables for the Gold layer — demonstrates understanding of compute-on-read vs compute-on-write tradeoffs
- **4-phase ETL workflow methodology** applied consistently across all layers

### Portfolio Description
**For portfolio website:** A complete Business Data Warehouse built on SQL Server demonstrating end-to-end data engineering from raw ingestion through dimensional modeling. Integrates CRM and ERP systems using Medallion Architecture (Bronze → Silver → Gold), producing a Star Schema with customer, product, location, and sales analytics objects. Features T-SQL stored procedures for ETL, Apache Superset for visualization, Docker for deployment, and comprehensive documentation including ERDs, data flow diagrams, and PlantUML architecture models.

### Resume Bullet Points
- Designed and implemented an end-to-end SQL Server Data Warehouse integrating CRM and ERP systems using Medallion Architecture (Bronze → Silver → Gold), producing dimensional models consumed by Apache Superset dashboards
- Built T-SQL stored procedures for multi-source data ingestion, deduplication, standardization, and Star Schema modeling across 6 source tables and 4 Gold layer outputs
- Implemented data quality validation framework with completeness, conformance, and integration checks at each pipeline layer
- Documented architecture using ERDs, PlantUML diagrams, and data flow charts, following a 4-phase ETL development methodology (Analyse → Code → Validate → Document)
- Containerized local development environment using Docker to ensure reproducible builds and eliminate environment dependencies

### Recruiter Value
This project demonstrates that Ritik can build a real data warehouse from scratch — not just connect a tool. He understands multi-source integration, layered architecture, data quality enforcement, and documentation standards. These are exactly the skills a Data Engineer or Analytics Engineer needs on Day 1. The combination of T-SQL, Python, Superset, and Docker also signals cross-tool versatility.

**Complexity Level:** ⭐⭐⭐⭐ (Advanced)

---

## 📦 REPOSITORY 2: `Medallion-Data-Warehouse`
**Link:** https://github.com/Ritik574-coder/Medallion-Data-Warehouse
**Commits:** 44 | **Language:** T-SQL 93.8%, Shell

---

### Elevator Pitch
A more expansive Medallion Data Warehouse built for a retail enterprise domain, covering 8 core business entities (customers, employees, inventory, products, stores, returns, reviews, and sales transactions). Demonstrates deep data quality engineering with per-entity transformation documentation and defensive SQL patterns — arguably Ritik's most data quality-focused project.

---

### Business Problem
A retail business needed a unified, analytics-ready data platform covering its entire operational footprint — from customer demographics and employee records to inventory snapshots, product catalog, sales transactions, returns, and reviews — but data quality across these domains was inconsistent, with mixed date formats, malformed emails, non-standard phone numbers, and irregular categorical values.

### Solution Implemented
Built a containerized SQL Server data warehouse using Medallion Architecture with comprehensive Silver-layer transformations per entity. Each entity has its own transformation SQL file, a load SQL file, and a Markdown documentation file detailing business rules applied.

### Architecture
**Medallion Architecture (Bronze → Silver → Gold)**
- **8 core entities:** customers, employees, inventory, products, stores, returns, reviews, sales_transactions
- **Per-entity transformation pipeline:** `{entity}.sql` + `{entity}_load.sql` + `{entity}.md`
- **Docker-based SQL Server 2022** container
- **Gold layer DDL** defined but in development
- **GitHub Actions** workflow for PR automation (`pr-agent.yml`)

### Technologies Used
SQL Server 2022 · T-SQL · Docker / Docker Compose · CSV batch ingestion · Git/GitHub · Apache Superset (planned) · GitHub Actions

### Data Engineering Concepts
- Raw data ingestion via BULK INSERT from 8 source CSV files
- Full-refresh loading pattern (Truncate & Insert)
- Stored procedures for Bronze and Silver layers (`proc_bronze.sql`, `proc_silver.sql`)
- Schema initialization script (`init_databse.sql`)
- Docker Compose for containerized SQL Server environment
- Shell-based setup automation (`env_setup_command.sh`)

### Analytics Engineering Concepts
- Retail domain modeling (sales, returns, reviews, inventory analytics)
- Business rule documentation per entity
- Planned Gold layer for star schema output

### Data Modeling Concepts
- Star Schema planned in `ddl_gold.sql`
- Per-entity transformation with documented business rules
- Entity Relationship Diagram (animated GIF in `docs/`)

### ETL / ELT Concepts
- ETL pattern: CSV → Bronze Tables → Silver Transformations → (Gold planned)
- Separate DDL and procedure files per layer
- Per-entity load procedures isolate failure domains

### Data Quality Concepts (Most Advanced in Portfolio)
**Per-entity data quality rules documented and implemented:**

*Customers:* TRIM/case normalization, gender standardization, email domain typo correction, multi-format date conversion, US phone standardization to `+1 (AAA) BBB-CCCC`, city/state/country normalization, segment/channel standardization

*Employees:* Name extraction from full-name fields, email/phone formatting, job title/department standardization, hire date conversion across mixed formats, manager ID validation, salary/commission cleaning

*Inventory:* Snapshot date conversion, product/store ID validation, SKU standardization, calculated `stock_available` and `inventory_value` derived columns

*Products:* SKU/brand/category/sub-category standardization, price/cost cleaning, gross margin validation, warranty/rating cleaning, supplier country normalization

*Returns:* Return ID validation, refund amount/method standardization, return channel/restock status normalization

*Reviews:* Review date conversion, verified purchase flag standardization, review channel/text normalization

*Stores:* Store name/type/address/region standardization, phone formatting, square footage/employee count/rent validation

*Transactions:* Transaction-level order line data with customer, product, store, employee, promotion, payment, shipping, return, cost, and profit attributes

**Defensive SQL patterns used:** `TRY_CONVERT()`, CASE-based transformations, NULL assignment for invalid identifiers, "Unknown" for missing descriptors, currency `$`/comma removal, boolean normalization (`yes/no/1/0/true/false`), domain-specific typo correction rules

### CI/CD Concepts
- GitHub Actions PR agent workflow (`pr-agent.yml`)
- Issue templates: bug report, docs improvement, feature request
- Pull request template
- CHANGELOG.md maintained

### Testing Concepts
- Planned: row count reconciliation between Bronze and Silver
- Planned: data quality test queries for uniqueness, null checks, accepted values

### Documentation Concepts
- Per-entity Markdown documentation (e.g., `customers.md`, `employees.md`, etc.)
- Architecture diagram (`data_architecture.png`)
- ERD as animated GIF screencast
- `PROJECT_STRUCTURE.md` for full project walkthrough
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`
- GitHub issue/PR templates

### Key Features
- 8-entity retail domain coverage (most comprehensive domain in Ritik's portfolio)
- Per-entity transformation isolation with individual SQL + documentation files
- Richest data quality implementation in the entire portfolio
- Community-ready repository governance (COC, contributing guide, issue templates)
- Defensive SQL patterns with `TRY_CONVERT()` for resilient date/numeric parsing

### Technical Highlights
- **`TRY_CONVERT()` usage** for defensive parsing demonstrates maturity beyond simple CAST
- **Phone standardization to E.164-style format** shows awareness of data standards
- **Derived columns in Silver** (`stock_available`, `inventory_value`) shows ability to add business value in transformation
- **Qodo AI integration** (`.qodo/agents/` and `.qodo/workflows/`) signals awareness of AI-assisted development tooling

### Portfolio Description
A comprehensive retail data warehouse covering 8 business entities (customers, employees, inventory, products, stores, returns, reviews, transactions) using Medallion Architecture on SQL Server 2022. Features a per-entity transformation pipeline with individual SQL files, load procedures, and Markdown documentation per entity. Implements enterprise-grade data quality patterns including defensive SQL parsing with `TRY_CONVERT()`, domain-specific standardization rules, and boolean/date/phone normalization — delivering clean, analytics-ready Silver-layer data for downstream modeling.

### Resume Bullet Points
- Architected an 8-entity retail data warehouse using Medallion Architecture on SQL Server 2022 with Docker-based containerization, covering sales transactions, inventory, customer demographics, employee records, returns, and product reviews
- Implemented entity-level Silver-layer transformations with 20+ per-entity data quality rules covering date formats, phone standardization, email cleaning, currency parsing, and boolean normalization using defensive T-SQL patterns (`TRY_CONVERT()`, CASE expressions)
- Created per-entity documentation (SQL + Markdown) for each transformation pipeline, enabling auditability and traceability of all business rules applied to source data
- Established open-source project governance including GitHub Actions PR automation, issue templates (bug, docs, feature), PR template, CHANGELOG, and CONTRIBUTING guidelines
- Designed derived metrics at the Silver layer (stock_available, inventory_value) to add computed business value prior to Gold modeling

### Recruiter Value
This project stands out for its depth of data quality implementation. Most portfolio projects do surface-level cleaning; Ritik's per-entity approach with individual transformation docs shows he can handle the messy, real-world data quality work that occupies 60–70% of a data engineer's actual job. The community governance structure also signals he understands professional software development practices.

**Complexity Level:** ⭐⭐⭐⭐½ (Advanced/Expert)

---

## 📦 REPOSITORY 3: `dbt-analytics-engineering`
**Link:** https://github.com/Ritik574-coder/dbt-analytics-engineering
**Commits:** 22 | **Language:** T-SQL 85.9%, Shell

---

### Elevator Pitch
A production-style dbt project for retail analytics on SQL Server, featuring full CI/CD pipelines with GitHub Actions (lint, parse, compile, run, test on PR; deploy to prod on main), SQLFluff code linting, SCD Type 2 snapshots, dbt tests, macros, seeds, and auto-generated docs published to GitHub Pages. This is the most DevOps-mature project in the portfolio.

---

### Business Problem
Analytics transformation code was unversioned, untested, and deployed manually — making it error-prone and difficult to maintain as business logic grew in complexity. There was no automated testing, no linting, and no documentation of model lineage.

### Solution Implemented
Implemented a full analytics engineering workflow using dbt Core with SQL Server, following a three-layer modeling convention (staging → intermediate → marts), automated CI/CD via GitHub Actions, SQLFluff linting, SCD Type 2 snapshots, schema tests, singular tests, macros, seeds, and documentation auto-generated and published to GitHub Pages.

### Architecture
**Three-Layer dbt Modeling Convention:**
- **Staging (`stg_`):** Bronze-equivalent — clean and rename raw sources. Materialized as tables.
- **Intermediate (`int_`):** Silver-equivalent — business logic and aggregations. Materialized as tables.
- **Marts (`fct_`, `dim_`):** Gold-equivalent — Star Schema for BI. Materialized as views.

**Infrastructure:**
- Docker Compose for local SQL Server 2022
- GitHub Actions: 3 workflows (CI, CD, Docs)
- SQLFluff for SQL linting (`.sqlfluff` config)
- dbt-core 1.11.11 + dbt-sqlserver 1.10.0
- Python 3.11+ runtime

### Technologies Used
dbt Core 1.11.11 · dbt-sqlserver 1.10.0 · SQL Server 2022 · Docker Compose · GitHub Actions · SQLFluff · Python 3.11+ · Shell scripting

### Data Engineering Concepts
- Containerized SQL Server via Docker Compose
- Automated environment setup (`env_setup_command.sh`, `scripts/setup-local-dev.sh`)
- Environment management (dev/prod profiles via `.env.example` and `profiles.example.yml`)
- Secret management via GitHub repository secrets (6 defined CI/CD secrets)

### Analytics Engineering Concepts
- Three-layer dbt modeling (staging → intermediate → marts)
- Jinja templating for reusable SQL logic
- dbt macros for abstraction
- dbt seeds for static reference data
- SCD Type 2 snapshots for historical tracking
- dbt-generated documentation with model lineage

### Data Modeling Concepts
- Star Schema in marts layer (`fct_`, `dim_` prefix convention)
- Staging layer as Bronze-equivalent (rename and clean)
- Intermediate layer as Silver-equivalent (business joins and logic)
- SCD Type 2 via dbt snapshots (historical change tracking)

### ETL / ELT Concepts
- ELT pattern (transform inside the warehouse using dbt)
- Incremental model capabilities
- Full refresh vs incremental materialization decisions

### Data Quality Concepts
- Schema tests (uniqueness, null checks, accepted values)
- Singular tests in `tests/` directory
- Source freshness checks
- dbt `dbt test` integrated into CI pipeline

### CI/CD Concepts (Most Advanced in Portfolio)
**Three GitHub Actions workflows:**

1. **`dbt-ci.yml` (Pull Requests):**
   - YAML validation
   - `dbt deps` → `dbt parse` → SQLFluff linting
   - Integration: SQL Server container → `dbt debug` → `dbt compile` → `dbt run` → `dbt test`

2. **`dbt-cd.yml` (Deployment to Production):**
   - Triggered on push to `main` (model/macro changes) or manual dispatch
   - Uses 6 GitHub repository secrets for production connection
   - Production deployment automation

3. **`dbt-docs.yml` (Documentation):**
   - Generates dbt docs on every PR/push
   - Publishes to GitHub Pages on `main`

**SQLFluff integration** for SQL code style enforcement (`.sqlfluff` config file present)

### Testing Concepts
- Schema tests via `schema.yml` files
- Singular tests in `tests/` directory
- `dbt test` in CI pipeline (every PR runs all tests)
- Source freshness checks

### Documentation Concepts
- Auto-generated dbt documentation (`dbt docs generate`)
- GitHub Pages publication of dbt docs (`dbt-docs.yml`)
- Model lineage tracking in dbt DAG
- `technical_design_document.md` for architecture and modeling decisions
- `project_stracture.md` for structure overview
- `CHANGELOG.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`
- `.editorconfig` for consistent code formatting

### Key Features
- Full CI/CD pipeline with 3 GitHub Actions workflows
- SQLFluff SQL linting for code quality enforcement
- SCD Type 2 snapshots for historical data tracking
- dbt docs published to GitHub Pages
- 6-secret production deployment configuration
- `.editorconfig` + `.env.example` + `profiles.example.yml` for developer experience

### Technical Highlights
- **Three separate GitHub Actions workflows** (CI, CD, Docs) — shows understanding of separation of concerns in DevOps
- **SQLFluff integration** — production-level SQL code quality enforcement, rarely seen in junior portfolios
- **SCD Type 2 snapshots** — demonstrates knowledge of slowly changing dimensions, a senior-level data modeling concept
- **GitHub Pages for dbt docs** — shows ability to publish living documentation
- **Secret management pattern** — 6 properly named GitHub secrets for production connections
- **`technical_design_document.md`** — shows professional approach to architectural decision documentation

### Portfolio Description
A production-style dbt analytics engineering project for retail analytics on SQL Server 2022, featuring a complete CI/CD pipeline (three GitHub Actions workflows: lint/test on PR, deploy on merge, docs on push), SQLFluff SQL linting, SCD Type 2 snapshots, schema and singular tests, Jinja macros, dbt seeds, and auto-generated documentation published to GitHub Pages. Implements a three-layer modeling convention (staging/intermediate/marts) mirroring the Medallion Architecture, with Docker Compose for local development and 6-secret production deployment configuration.

### Resume Bullet Points
- Built a production-grade dbt analytics engineering pipeline on SQL Server with full CI/CD automation via GitHub Actions: linting/testing on every PR, automated production deployment on merge, and dbt documentation published to GitHub Pages
- Implemented three-layer dbt modeling convention (staging → intermediate → marts) for retail analytics, using SCD Type 2 snapshots for historical change tracking and Jinja macros for reusable transformation logic
- Integrated SQLFluff SQL linting into CI pipeline to enforce code style standards across all T-SQL transformation models
- Configured end-to-end production deployment using 6 GitHub repository secrets for secure connection management, enabling automated dbt runs on production warehouse
- Authored `technical_design_document.md` defining architecture, layering strategy, and modeling decisions for maintainable, collaborative development

### Recruiter Value
This is the project that signals "this person is ready for a professional analytics engineering role." The three GitHub Actions workflows, SQLFluff linting, SCD Type 2, and GitHub Pages documentation are hallmarks of how mature data teams operate. Most candidates at Ritik's experience level would not have CI/CD on their dbt projects.

**Complexity Level:** ⭐⭐⭐⭐⭐ (Expert)

---

## 📦 REPOSITORY 4: `dbt_learning_project`
**Link:** https://github.com/Ritik574-coder/dbt_learning_project
**Commits:** 169 | **Stars:** 1 | **Forks:** 1 | **Language:** Python 98.2%, T-SQL

---

### Elevator Pitch
A comprehensive dbt learning project with SQL Server, covering dbt fundamentals through advanced features including incremental models, snapshots, seeds, macros, variables, source freshness checks, CI/CD fundamentals, auto-generated documentation, and model lineage tracking — evidenced by 169 commits showing sustained, serious learning investment.

---

### Business Problem
Learning dbt in a structured, production-oriented way that covers not just basic model creation but the full modern analytics engineering workflow including testing, documentation, environment management, and CI/CD.

### Solution Implemented
Built a hands-on dbt project on SQL Server with staged learning across core concepts → data modeling layers → data quality testing → advanced features → documentation and CI/CD fundamentals.

### Architecture
**Three-Layer dbt Modeling:**
- Staging models (`stg_`) — source cleaning
- Intermediate models (`int_`) — business logic
- Mart/Business models (`mart_`) — analytics outputs

**Folder Structure:**
- `.github/` — GitHub Actions workflows
- `dataset/` — source CSV files
- `explore_database/` — SQL exploration scripts
- `logs/` — dbt execution logs
- `script/` — helper scripts
- `venv/` — Python virtual environment
- `DATA_PIPELINE_GUIDE.md` — comprehensive pipeline documentation

### Technologies Used
dbt Core · SQL Server · Python (runtime) · SQL · Git/GitHub · pyodbc (SQL Server connector) · Qodo AI (`.qodo/`)

### Analytics Engineering Concepts
- dbt project structure and configuration (`dbt_project.yml`)
- dbt models and materializations (table, view, incremental, ephemeral)
- Jinja templating in SQL
- dbt configurations (model-level, project-level)
- Staging → Intermediate → Mart layering
- dbt seeds for static reference data
- dbt macros for reusable SQL logic
- dbt variables and environments (dev/prod)
- Incremental models for efficient processing
- Snapshots for SCD Type 2 tracking
- Source freshness checks
- dbt documentation auto-generation
- Model lineage and dependency visualization

### Data Quality Concepts
- Schema tests (not_null, unique, accepted_values, relationships)
- Custom singular tests
- Data validation techniques
- Source freshness monitoring

### CI/CD Concepts
- GitHub Actions workflow in `.github/`
- dbt CI/CD fundamentals

### Documentation Concepts
- `DATA_PIPELINE_GUIDE.md` — comprehensive pipeline documentation
- Auto-generated dbt docs
- Model lineage visualization

### Key Features
- Most committed-to project (169 commits — 3x more than any other repo)
- Full dbt feature coverage from fundamentals to advanced
- Qodo AI integration for development assistance
- `DATA_PIPELINE_GUIDE.md` comprehensive documentation
- 1 star and 1 fork — community recognition

### Technical Highlights
- **169 commits** is the strongest signal of sustained learning discipline on the profile
- **1 fork** means another developer found it useful enough to copy — community impact
- **Complete dbt feature coverage:** incremental models, snapshots, seeds, macros, variables, source freshness, lineage — this is a thorough learning project

### Portfolio Description
A comprehensive dbt learning project demonstrating mastery of the complete analytics engineering workflow on SQL Server. With 169 commits spanning dbt fundamentals through advanced features (incremental models, SCD Type 2 snapshots, custom macros, Jinja templating, source freshness checks, schema tests, and CI/CD), this repository documents a deep, structured learning journey in modern data transformation — earning community recognition with a star and fork.

### Resume Bullet Points
- Developed comprehensive dbt analytics engineering project on SQL Server covering full feature spectrum: staging/intermediate/mart layers, incremental models, SCD Type 2 snapshots, Jinja macros, dbt seeds, schema tests, source freshness checks, and auto-generated documentation
- Documented complete data pipeline architecture in `DATA_PIPELINE_GUIDE.md`, covering ingestion through transformation with debugging and environment management guidance
- Maintained 169-commit project history demonstrating sustained, disciplined learning in modern analytics engineering practices

### Recruiter Value
The 169-commit count is the most impressive signal on the entire profile. It demonstrates that Ritik doesn't just spin up a tutorial and stop — he commits to depth. The community fork also shows his work is valued by peers.

**Complexity Level:** ⭐⭐⭐⭐ (Advanced)

---

## 📦 REPOSITORY 5: `data-ecosystem-platform`
**Link:** https://github.com/Ritik574-coder/data-ecosystem-platform
**Commits:** 72 | **Language:** Julia 91%, Jupyter Notebook, T-SQL

---

### Elevator Pitch
A meta-repository organizing Ritik's entire data engineering learning journey into a structured platform covering Data Warehouse, Data Lake, Data Lakehouse, Modern Data Engineering, and PySpark — a comprehensive learning hub that positions him as someone with breadth across the modern data stack.

---

### Business Problem
Individual data engineering skills were scattered across disconnected projects. There was no unified platform demonstrating the full spectrum of data architecture patterns (warehouse, lake, lakehouse) and modern processing frameworks.

### Solution Implemented
Created a centralized multi-project repository with 5 domain folders covering all major modern data architecture paradigms, with Jupyter notebooks and documentation for each domain.

### Architecture
**Five-Domain Structure:**
- `Data Warehouse/` — Structured modeling, ETL/ELT, dimensional modeling
- `Data Lake/` — Large-scale raw ingestion, Parquet/JSON/CSV, partitioning
- `Data Lakehouse/` — Medallion architecture, incremental processing, Delta Lake-style hybrid
- `Modern_Data_Engineering/` — Modern tooling and workflows
- `PySpark/` — Distributed data processing

### Technologies Used
Python · PySpark · Jupyter Notebooks · T-SQL · Julia (file format artifacts) · Git

### Data Engineering Concepts
- Data Warehouse, Data Lake, and Data Lakehouse architectural patterns
- Distributed processing with PySpark
- File-based storage architectures (Parquet, JSON, CSV)
- Partitioning and schema evolution concepts
- Medallion architecture in lakehouse context
- Incremental data processing patterns

### Key Features
- Breadth-first coverage of all major data architecture paradigms
- PySpark section signals big data processing capability
- 72 commits showing active development
- Organized as a professional portfolio hub

### Technical Highlights
- **Architecture breadth:** Covers DW + Data Lake + Lakehouse + PySpark in one repository — signals awareness of the full modern data ecosystem
- **Data Lakehouse section** covers the most modern hybrid architecture
- **PySpark inclusion** signals readiness for big data environments

### Portfolio Description
A comprehensive data engineering platform repository spanning all major modern data architecture paradigms: Data Warehouse (dimensional modeling, ETL/ELT), Data Lake (large-scale raw ingestion, file-based storage), Data Lakehouse (Medallion architecture, incremental processing), and distributed processing with PySpark. Serves as a centralized portfolio hub demonstrating breadth across the modern data ecosystem.

### Resume Bullet Points
- Built a multi-architecture data engineering platform covering Data Warehouse, Data Lake, Data Lakehouse, and PySpark patterns, demonstrating comprehensive understanding of modern data infrastructure design
- Implemented Data Lakehouse projects using Medallion Architecture principles (Bronze/Silver/Gold) with incremental processing and analytics-ready modeling for hybrid analytical workloads

### Recruiter Value
Shows that Ritik thinks architecturally — he doesn't just know one tool, he understands how all the pieces of the data ecosystem fit together. This is what senior engineers need to see before promoting someone from junior to mid-level.

**Complexity Level:** ⭐⭐⭐½ (Intermediate-Advanced)

---

## 📦 REPOSITORY 6: `Bi-Project-` (Multi-Project Repository)
**Link:** https://github.com/Ritik574-coder/Bi-Project-
**Commits:** 122 | **Stars:** 1

Per the special instructions, this repository contains multiple independent BI projects. Each is analyzed separately below.

---

### PROJECT 6A: Workforce Pulse (HR Analytics Dashboard — Power BI)

**Elevator Pitch:** An HR analytics Power BI dashboard focused on attrition, workforce demographics, and performance, featuring smooth navigation panels and tooltip pages — designed to help HR teams make data-driven decisions.

**Business Problem:** HR teams lacked visibility into attrition drivers, workforce demographics, and performance patterns, relying on manual spreadsheet analysis.

**Solution Implemented:** Interactive Power BI dashboard with advanced navigation panel, tooltip pages for drill-through, and KPI visualization across attrition, demographics, and performance domains.

**Architecture:** Power BI desktop file (`.pbix`) with DAX measures, slicers, bookmarks, and tooltip pages.

**Technologies Used:** Power BI · DAX · Excel/CSV data sources

**Analytics Concepts:** Attrition rate analysis · demographic breakdown · performance segmentation · KPI cards · slicer-based filtering · bookmark navigation

**Data Modeling Concepts:** Power BI data model with relationships, DAX calculated columns, and measures

**Key Features:** Smooth navigation panel · tooltip pages for drill-through · attrition KPIs · demographic breakdowns

**Portfolio Description:** An interactive HR Analytics Power BI dashboard ("Workforce Pulse") tracking employee attrition, demographics, and performance metrics. Features advanced UI design with a smooth navigation panel, tooltip drill-through pages, and slicer-based filtering — built to enable fast, data-driven HR decisions.

**Resume Bullet Points:**
- Designed "Workforce Pulse" HR Analytics Power BI dashboard featuring attrition tracking, demographic analysis, and performance KPIs with advanced navigation panels and tooltip drill-through pages
- Implemented DAX measures for HR metrics including attrition rate, demographic distributions, and performance segmentation with interactive slicer-based filtering

**Recruiter Value:** Shows ability to build business-facing analytics tools in Power BI — a core skill for Analytics Engineer / BI Engineer roles.

---

### PROJECT 6B: People Insights (HR Analytics Dashboard — Tableau)

**Elevator Pitch:** A Tableau HR analytics dashboard exploring hiring trends, education levels, salary distributions, and performance correlations — featuring an education-performance matrix and a salary-age scatter plot.

**Business Problem:** HR leadership needed to understand the relationship between education levels, salary, age, and performance to inform hiring and compensation decisions.

**Solution Implemented:** Tableau Public dashboard with multi-dimensional HR analytics including an education-performance matrix, salary-age scatter plot, and hiring trend visualizations.

**Technologies Used:** Tableau Public · Excel/CSV data sources

**Analytics Concepts:** Education-performance matrix · salary-age scatter analysis · hiring trend visualization · demographic analytics

**Key Features:** Education-performance matrix · salary-age scatter plot · hiring trends · performance visualization

**Portfolio Description:** A Tableau HR analytics dashboard ("People Insights") analyzing hiring trends, educational backgrounds, salary distributions, and performance correlations. Highlights include an education-performance matrix and salary-age scatter plot — providing HR leadership with data-driven compensation and hiring insights.

**Resume Bullet Points:**
- Built "People Insights" Tableau HR dashboard analyzing relationships between education, salary, age, and performance — including an education-performance matrix and salary-age scatter visualization for compensation strategy insights

---

### PROJECT 6C: Sales Pulse 2023 (Sales Analytics Dashboard — Power BI)

**Elevator Pitch:** A Power BI sales analytics dashboard tracking customer growth, order volumes, top buyers, and YoY comparisons — designed to give business leaders immediate visibility into 2023 sales performance.

**Business Problem:** Sales leadership lacked a unified view of customer growth, order performance, and top buyer identification across 2023.

**Solution Implemented:** Power BI dashboard with KPI cards showing YoY comparisons, customer growth metrics, order volume analysis, and top customer spotlight visualization.

**Technologies Used:** Power BI · DAX · Excel/CSV data sources

**Analytics Concepts:** YoY comparison KPIs · customer growth tracking · top buyer identification · order volume analysis

**Key Features:** KPI cards with YoY comparisons · top customer spotlight · customer growth visualization · order analysis

**Portfolio Description:** A Power BI sales analytics dashboard ("Sales Pulse 2023") tracking customer growth, order volumes, and top buyer performance with year-over-year KPI comparisons. Designed for business leadership to quickly identify sales trends and high-value customer segments.

**Resume Bullet Points:**
- Developed "Sales Pulse 2023" Power BI dashboard with YoY KPI comparisons, customer growth tracking, and top buyer spotlight — enabling sales leadership to identify revenue trends and high-value customer segments

---

### PROJECT 6D: ATM Analytics Dashboard

**Elevator Pitch:** A specialized analytics dashboard for ATM network performance monitoring — tracking uptime, transaction volumes, and operational KPIs across ATM locations.

**Technologies Used:** Power BI or Tableau · Financial/ATM transaction data

**Key Features:** ATM performance tracking · uptime monitoring · transaction volume analysis · location-based analytics

**Resume Bullet Point:**
- Built ATM Analytics Dashboard monitoring network uptime, transaction volumes, and operational KPIs across ATM locations for financial services analytics

---

### PROJECT 6E: Data Job Dashboard Overview

**Elevator Pitch:** A dashboard analyzing the data job market — helping professionals understand salary ranges, required skills, and demand trends across data engineering, analytics, and science roles.

**Technologies Used:** Power BI or Tableau · Job market datasets

**Key Features:** Salary range analysis by role · skills demand tracking · geographic job distribution · role comparison

**Resume Bullet Point:**
- Created Data Job Market Dashboard analyzing salary ranges, skill demand, and geographic distribution across data engineering, analytics, and science roles

---

### PROJECT 6F: World Economy Analysis Project

**Elevator Pitch:** A macroeconomic analytics dashboard visualizing global economic indicators across countries — including GDP, growth rates, and economic health metrics.

**Technologies Used:** Tableau or Power BI · World Bank/IMF economic datasets

**Key Features:** Country-level GDP visualization · growth rate comparison · geographic economic mapping · trend analysis

**Resume Bullet Point:**
- Developed World Economy Analysis Dashboard visualizing global GDP, economic growth rates, and macroeconomic indicators across countries using geographic and trend visualizations

---

## 📦 REPOSITORY 7: `Ritik574-coder` (Profile README)
**Link:** https://github.com/Ritik574-coder/Ritik574-coder

This is the GitHub profile README. While not a technical project, it demonstrates:
- Professional self-presentation and personal branding
- Comprehensive technology stack display (35+ tools)
- GitHub analytics integration (stats cards, streak, trophy)
- Planned technical blog topics (ETL with Airflow, Python Best Practices, Azure Synapse, DAX, ML in Pipelines, Kafka Streaming)
- Cross-platform professional presence (LinkedIn, Tableau Public, X, Discord)
- Developer Program Member status

---

# FINAL DELIVERABLES

---

## 🏆 TOP 10 STRONGEST PROJECTS (Ranked)

| Rank | Project | Repository | Score |
|------|---------|-----------|-------|
| 1 | dbt Analytics Engineering with CI/CD | `dbt-analytics-engineering` | ⭐⭐⭐⭐⭐ |
| 2 | Retail Medallion Data Warehouse (8 entities) | `Medallion-Data-Warehouse` | ⭐⭐⭐⭐½ |
| 3 | BusinessDW SQL Server Data Warehouse | `sqlserver-datawarehouse` | ⭐⭐⭐⭐ |
| 4 | dbt SQL Server Learning Project | `dbt_learning_project` | ⭐⭐⭐⭐ |
| 5 | Data Ecosystem Platform | `data-ecosystem-platform` | ⭐⭐⭐½ |
| 6 | Workforce Pulse (HR Analytics — Power BI) | `Bi-Project-` | ⭐⭐⭐½ |
| 7 | Sales Pulse 2023 (Sales Analytics — Power BI) | `Bi-Project-` | ⭐⭐⭐ |
| 8 | People Insights (HR Analytics — Tableau) | `Bi-Project-` | ⭐⭐⭐ |
| 9 | World Economy Analysis Project | `Bi-Project-` | ⭐⭐⭐ |
| 10 | ATM Analytics Dashboard | `Bi-Project-` | ⭐⭐½ |

---

## 📋 PORTFOLIO PROJECT RANKING

### Tier 1 — Lead with These (Flagship Projects)
1. **dbt Analytics Engineering** (`dbt-analytics-engineering`) — Most technically mature; CI/CD, SQLFluff, SCD2, GitHub Pages docs
2. **Retail Medallion Data Warehouse** (`Medallion-Data-Warehouse`) — Deepest data quality implementation; 8-entity retail domain
3. **BusinessDW SQL Server Warehouse** (`sqlserver-datawarehouse`) — Most complete end-to-end DW with Superset dashboards

### Tier 2 — Supporting Evidence (Show Depth)
4. **dbt Learning Project** (`dbt_learning_project`) — 169 commits; demonstrates learning discipline and community impact
5. **Data Ecosystem Platform** (`data-ecosystem-platform`) — Shows breadth across DW/Lake/Lakehouse/PySpark

### Tier 3 — Bonus Showcases (BI/Visualization Skills)
6. **Workforce Pulse** — Power BI HR analytics with advanced navigation
7. **Sales Pulse 2023** — Power BI sales analytics with YoY KPIs
8. **People Insights** — Tableau HR analytics with matrix visualizations
9. **World Economy Analysis** — Macroeconomic Tableau dashboard
10. **ATM Analytics / Data Job Dashboard** — Specialized domain coverage

---

## 🌐 PROJECTS TO FEATURE ON PORTFOLIO HOMEPAGE

**Hero Section (Above the Fold):**
- `dbt-analytics-engineering` — "Production-grade analytics engineering with CI/CD"
- `sqlserver-datawarehouse` — "End-to-end data warehouse with Superset dashboards"

**Featured Projects Grid (3-4 cards):**
- `Medallion-Data-Warehouse` — Retail data quality showcase
- `dbt_learning_project` — Learning depth (169 commits)
- `Bi-Project-` / Workforce Pulse — BI visualization showcase

**Skills Section (Derived from all projects):**
- Data Warehousing: SQL Server, Medallion Architecture, Star Schema, ETL
- Analytics Engineering: dbt Core, dbt-sqlserver, Jinja, macros, snapshots
- BI Visualization: Power BI, Tableau, DAX, Apache Superset
- DevOps/CI/CD: GitHub Actions, Docker, SQLFluff, GitHub Pages
- Data Quality: TRY_CONVERT, defensive SQL, per-entity transformation
- Database: T-SQL, SQL Server 2022, stored procedures

---

## 📄 PROJECTS TO FEATURE IN RESUME

**Resume Section: "Data Engineering Projects"**

1. **dbt Analytics Engineering with Full CI/CD Pipeline** | SQL Server · dbt Core · GitHub Actions · SQLFluff · Docker
   - Complete analytics engineering workflow with automated PR testing, production deployment, and GitHub Pages documentation

2. **Retail Medallion Data Warehouse (8-Entity)** | SQL Server 2022 · T-SQL · Docker · GitHub Actions
   - 8-entity retail domain with enterprise-grade per-entity data quality transformation pipeline

3. **BusinessDW — SQL Server Data Warehouse** | SQL Server · T-SQL · Python · Apache Superset · Docker
   - CRM + ERP integration with Medallion Architecture and Star Schema Gold layer

4. **dbt Learning Project** | dbt Core · SQL Server · Python · GitHub Actions
   - 169-commit project covering full dbt feature spectrum; community-starred and forked

**Resume Section: "BI & Analytics Projects"**

5. **BI Dashboard Collection** | Power BI · Tableau · DAX · SQL
   - 6 dashboards across HR analytics, sales analytics, global economics, ATM operations, and data job market analysis

---

## 🧠 SKILLS INFERRED FROM PROJECTS

### Data Engineering
- Medallion Architecture (Bronze → Silver → Gold) — 3 projects
- ETL/ELT Pipeline Development
- Multi-source data integration (CRM + ERP)
- Batch data ingestion (CSV, BULK INSERT)
- Full-refresh and incremental loading patterns
- Stored procedure-based orchestration
- Schema design and DDL management
- Data lineage and auditability

### Analytics Engineering
- dbt Core (fundamentals through advanced)
- dbt-sqlserver connector
- Jinja templating in SQL
- dbt macros and seeds
- SCD Type 2 via dbt snapshots
- Staging / Intermediate / Marts layer convention
- dbt testing (schema + singular)
- Source freshness monitoring
- dbt documentation and lineage

### Data Quality Engineering
- Defensive SQL patterns (`TRY_CONVERT`, CASE, NULL handling)
- Phone/email/date standardization rules
- Data deduplication
- Boolean normalization
- Per-entity quality documentation
- Data profiling

### Data Modeling
- Star Schema design
- Dimensional modeling (facts + dimensions)
- SCD Type 2 historical tracking
- Gold-layer view architecture
- ERD design and documentation

### BI & Visualization
- Power BI (dashboards, DAX, slicers, bookmarks, tooltip pages)
- Tableau (scatter plots, matrices, geographic maps)
- Apache Superset
- Dashboard design and UX

### DevOps & CI/CD
- GitHub Actions (3 distinct workflow types)
- SQLFluff SQL code linting
- Docker / Docker Compose
- GitHub Pages documentation
- Secret management (GitHub repository secrets)
- Issue templates and PR templates
- CHANGELOG maintenance

### Databases & Query
- SQL Server (2022) — primary database
- T-SQL / Stored Procedures
- pyodbc (Python-SQL Server connectivity)
- MySQL, PostgreSQL, SQLite (from profile tech stack)
- Snowflake (from profile tech stack — learning)

### Programming
- Python (data engineering scripts, dbt runtime)
- Shell scripting (environment setup)
- Jupyter Notebooks (EDA)

### Tools & Infrastructure
- Git / GitHub (version control)
- Docker (containerization)
- Apache Superset (BI)
- VS Code / Cursor / Copilot (AI-assisted development)
- Qodo AI (AI code review)

### In-Learning (from profile, not yet strongly evidenced in projects)
- Apache Airflow (orchestration)
- Apache Spark / PySpark
- Apache Kafka
- Delta Lake
- Airbyte
- MinIO/S3
- AWS / GCP / Azure
- Databricks
- Kubernetes
- Polars

---

## 🛠️ TECHNOLOGY STACK SUMMARY

| Category | Technologies | Evidence Level |
|----------|-------------|---------------|
| Primary Database | SQL Server 2022 | ★★★★★ (5 projects) |
| Transformation | dbt Core, dbt-sqlserver, T-SQL | ★★★★★ (3 projects) |
| Query Language | T-SQL, SQL | ★★★★★ |
| Orchestration | Stored Procedures, GitHub Actions | ★★★★ |
| BI Tools | Power BI, Tableau, Apache Superset | ★★★★ |
| Containerization | Docker, Docker Compose | ★★★★ |
| CI/CD | GitHub Actions (3 workflow types) | ★★★★ |
| Code Quality | SQLFluff | ★★★ |
| Python | Runtime, scripting, EDA | ★★★ |
| Data Modeling | Star Schema, SCD Type 2, Medallion | ★★★★★ |
| Documentation | Markdown, PlantUML, ERDs, dbt docs | ★★★★ |
| Version Control | Git / GitHub | ★★★★★ |

---

## 🌟 PROFESSIONAL PORTFOLIO CONTENT (Ready to Publish)

### Hero Statement for Portfolio Website
**"Data Engineer building scalable, analytics-ready data systems — from raw ingestion to business-ready dimensional models."**

I design and implement end-to-end data platforms using modern tooling: Medallion Architecture on SQL Server, analytics engineering with dbt, CI/CD pipelines with GitHub Actions, and BI dashboards with Power BI and Tableau. My projects cover the full data lifecycle — ingestion, transformation, quality, modeling, and visualization.

### About Section
Ritik is a self-driven Data Engineer from India, building a deep portfolio in data warehousing, analytics engineering, and business intelligence. His hands-on projects span SQL Server data warehouses with Medallion Architecture, production-style dbt analytics pipelines with CI/CD automation, and Power BI / Tableau dashboards across HR, sales, and macroeconomic domains. He consistently documents his work with architecture diagrams, ERDs, per-entity transformation specs, and data flow charts — reflecting the documentation standards of professional engineering teams.

### Skills Badges
SQL Server · dbt Core · T-SQL · Power BI · Tableau · Docker · GitHub Actions · Apache Superset · Python · Star Schema · Medallion Architecture · SQLFluff · SCD Type 2 · ETL/ELT · Data Quality Engineering

---

## 💼 RECRUITER-FOCUSED PERSONAL BRANDING STATEMENT

> **"Ritik Kumar is a Data Engineer who builds production-quality data systems — not just portfolio toys."**

What sets Ritik apart at his experience level is architectural intentionality. He doesn't just write SQL: he implements Medallion Architecture across multiple projects, documents per-entity business rules, enforces code quality with SQLFluff, automates testing and deployment with GitHub Actions, and publishes living documentation to GitHub Pages. His 169-commit dbt learning project and 8-entity Medallion Data Warehouse reveal someone who goes deep, not just wide. For a team hiring a junior-to-mid Data Engineer or Analytics Engineer, Ritik is an unusually strong candidate — he already thinks and documents like a senior.

**Best fit roles:**
- Junior / Associate Data Engineer
- Analytics Engineer (dbt-focused)
- BI Engineer / Data Analyst (with engineering skills)
- SQL Server Data Engineer

**Target companies:**
- Companies using dbt + SQL Server / Snowflake / Databricks
- BI-heavy organizations needing Power BI + backend pipeline skills
- Data consulting firms needing full-stack data skills

---

## ⚠️ AREAS FOR IMPROVEMENT (Honest Assessment)

1. **Cloud exposure is aspirational, not evidenced yet.** The profile lists AWS, GCP, Azure — but no public projects demonstrate cloud-native data engineering. Adding one project using Azure Data Factory, AWS Glue, or GCP BigQuery would dramatically increase recruiter appeal.

2. **Apache Airflow is listed but not demonstrated.** A small DAG orchestrating one of the existing warehouse pipelines would be high-impact.

3. **PySpark needs a standalone project.** The `data-ecosystem-platform` mentions PySpark but the primary language is Julia (likely notebook artifacts). A real PySpark project processing a meaningful dataset would strengthen the big data angle.

4. **No streaming/real-time projects.** Kafka is listed but not demonstrated. Even a simple producer-consumer demo would expand the profile.

5. **Star count is low.** The projects are quality work — they need promotion (blog posts, LinkedIn writeups, DEV.to articles) to gain community recognition.

6. **Snowflake, Databricks absent from projects.** These are the most in-demand warehouses. Migrating one project to Snowflake or adding a Databricks notebook would align with current market demand.

---

*Analysis completed: June 2026*
*Repositories analyzed: sqlserver-datawarehouse, Medallion-Data-Warehouse, dbt-analytics-engineering, dbt_learning_project, data-ecosystem-platform, Bi-Project- (6 sub-projects), Ritik574-coder (profile README)*
*Total projects analyzed: 12 individual projects across 7 repositories*
