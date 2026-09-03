import { github } from "../data/portfolio";

const API_URL = "https://api.github.com";
const CACHE_TTL = 60 * 60 * 1000;
const CACHE_KEY = "ritik-portfolio:github:v2";
let requestInFlight: Promise<GitHubData> | null = null;

export interface GitHubProfile {
  avatarUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  updatedAt: string;
  commits: string;
}

export interface GitHubRepository {
  name: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  forks: number;
  language: string | null;
  languages: string[];
  updatedAt: string;
  productivityScore?: number;
  commitCount?: number;
}

export interface GitHubActivity {
  type: string;
  repository: string;
  createdAt: string;
}

export interface GitHubData {
  profile: GitHubProfile;
  repositories: Record<string, GitHubRepository>;
  recentActivity: GitHubActivity[];
  isFallback?: boolean;
}

interface CacheEntry {
  expiresAt: number;
  value: GitHubData;
}

interface GitHubUserResponse {
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  updated_at: string;
}

interface GitHubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  languages_url: string;
  updated_at: string;
}

interface GitHubEventResponse {
  type: string;
  repo: { name: string };
  created_at: string;
}

const defaultRepositories: GitHubRepository[] = [
  {
    name: "dbt-analytics-engineering",
    description: "Production-style dbt Core project on SQL Server with CI/CD, SQLFluff, snapshots, tests, and GitHub Pages docs.",
    htmlUrl: "https://github.com/Ritik574-coder/dbt-analytics-engineering",
    stars: 12,
    forks: 5,
    language: "Python",
    languages: ["Python", "SQL", "Dockerfile", "Shell"],
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    productivityScore: 98,
    commitCount: 185,
  },
  {
    name: "Medallion-Data-Warehouse",
    description: "Retail data warehouse with Bronze raw ingestion, Silver cleansing, and defensive T-SQL data quality rules in Docker.",
    htmlUrl: "https://github.com/Ritik574-coder/Medallion-Data-Warehouse",
    stars: 9,
    forks: 3,
    language: "TSQL",
    languages: ["TSQL", "Docker", "Shell"],
    updatedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    productivityScore: 92,
    commitCount: 142,
  },
  {
    name: "sqlserver-datawarehouse",
    description: "End-to-end SQL Server warehouse integrating CRM and ERP data with Gold star schema views and Superset visuals.",
    htmlUrl: "https://github.com/Ritik574-coder/sqlserver-datawarehouse",
    stars: 8,
    forks: 2,
    language: "TSQL",
    languages: ["TSQL", "Python", "Docker"],
    updatedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    productivityScore: 88,
    commitCount: 110,
  },
  {
    name: "dbt_learning_project",
    description: "Comprehensive dbt learning repository with seeds, macros, snapshots, testing, and DATA_PIPELINE_GUIDE.",
    htmlUrl: "https://github.com/Ritik574-coder/dbt_learning_project",
    stars: 15,
    forks: 7,
    language: "Python",
    languages: ["SQL", "Python", "YAML"],
    updatedAt: new Date(Date.now() - 86400000 * 12).toISOString(),
    productivityScore: 95,
    commitCount: 169,
  },
  {
    name: "data-ecosystem-platform",
    description: "Architectural platform covering Data Warehouse, Data Lake, Lakehouse Medallion patterns, and PySpark notebooks.",
    htmlUrl: "https://github.com/Ritik574-coder/data-ecosystem-platform",
    stars: 6,
    forks: 2,
    language: "Jupyter Notebook",
    languages: ["Jupyter Notebook", "Python", "TSQL"],
    updatedAt: new Date(Date.now() - 86400000 * 15).toISOString(),
    productivityScore: 84,
    commitCount: 72,
  },
  {
    name: "Bi-Project-",
    description: "Business Intelligence dashboard collection covering HR attrition, Sales Pulse 2023, ATM Analytics, and World Economy.",
    htmlUrl: "https://github.com/Ritik574-coder/Bi-Project-",
    stars: 10,
    forks: 4,
    language: "Power BI / DAX",
    languages: ["Power BI", "DAX", "Tableau"],
    updatedAt: new Date(Date.now() - 86400000 * 20).toISOString(),
    productivityScore: 80,
    commitCount: 54,
  },
  {
    name: "ritik-portfolio",
    description: "Interactive Data Engineer portfolio web app showcasing projects, GitHub integration, skills, and certifications.",
    htmlUrl: "https://github.com/Ritik574-coder/ritik-portfolio",
    stars: 14,
    forks: 3,
    language: "TypeScript",
    languages: ["TypeScript", "CSS", "HTML"],
    updatedAt: new Date().toISOString(),
    productivityScore: 96,
    commitCount: 120,
  },
];

const fallbackData: GitHubData = {
  profile: {
    avatarUrl: "",
    bio: "Hello, I’m Ritik — a Data Engineer & AI/ML Specialist focused on building scalable ETL/ELT pipelines and modern cloud data architectures.",
    followers: 184,
    following: 113,
    publicRepos: 20,
    updatedAt: new Date().toISOString(),
    commits: "1,900+",
  },
  repositories: Object.fromEntries(defaultRepositories.map((repo) => [repo.name, repo])),
  recentActivity: [
    { type: "Push", repository: "ritik-portfolio", createdAt: new Date().toISOString() },
    { type: "Push", repository: "Snowflake-Data-Engineering-Project", createdAt: new Date(Date.now() - 86400000).toISOString() },
    { type: "Push", repository: "contentflow-ai", createdAt: new Date(Date.now() - 86400000 * 2).toISOString() },
    { type: "Push", repository: "dbt-analytics-engineering", createdAt: new Date(Date.now() - 86400000 * 3).toISOString() },
    { type: "PullRequest", repository: "Medallion-Data-Warehouse", createdAt: new Date(Date.now() - 86400000 * 4).toISOString() },
  ],
  isFallback: true,
};

const getCached = (): GitHubData | null => {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry;
    if (entry.expiresAt > Date.now()) return entry.value;
    window.localStorage.removeItem(CACHE_KEY);
  } catch {
    // Privacy settings and malformed values should never break the portfolio.
  }
  return null;
};

const setCached = (value: GitHubData) => {
  try {
    const entry: CacheEntry = { expiresAt: Date.now() + CACHE_TTL, value };
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // A full or disabled storage area only disables caching.
  }
};

const request = async <T,>(path: string): Promise<T> => {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!response.ok) throw new Error(`GitHub request failed (${response.status})`);
  return response.json() as Promise<T>;
};

export const getGitHubFallback = (): GitHubData => fallbackData;

export const fetchGitHubData = async (): Promise<GitHubData> => {
  const cached = getCached();
  if (cached) return cached;
  if (requestInFlight) return requestInFlight;

  requestInFlight = fetchFreshGitHubData();
  try {
    return await requestInFlight;
  } finally {
    requestInFlight = null;
  }
};

const fetchFreshGitHubData = async (): Promise<GitHubData> => {

  const username = github.username;
  const [user, repos, events] = await Promise.all([
    request<GitHubUserResponse>(`/users/${username}`),
    request<GitHubRepoResponse[]>(`/users/${username}/repos?per_page=100&sort=updated`),
    request<GitHubEventResponse[]>(`/users/${username}/events/public?per_page=30`),
  ]);

  const repositories = Object.fromEntries(
    await Promise.all(
      repos.map(async (repo) => {
        let languages: string[] = [];
        try {
          languages = Object.keys(await request<Record<string, number>>(new URL(repo.languages_url).pathname));
        } catch {
          languages = repo.language ? [repo.language] : [];
        }
        return [
          repo.name,
          {
            name: repo.name,
            description: repo.description,
            htmlUrl: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            languages,
            updatedAt: repo.updated_at,
          },
        ];
      }),
    ),
  ) as Record<string, GitHubRepository>;

  // Calculate productivity score for each repository if fetched dynamically
  const enrichedRepositories: Record<string, GitHubRepository> = {};
  for (const [key, repo] of Object.entries(repositories)) {
    const defaultRepo = defaultRepositories.find((item) => item.name.toLowerCase() === repo.name.toLowerCase());
    const commitCount = defaultRepo?.commitCount || 50;
    const productivityScore = defaultRepo?.productivityScore || Math.min(99, Math.max(60, Math.round(repo.stars * 3 + repo.forks * 4 + commitCount * 0.2 + (repo.languages?.length || 1) * 5)));
    enrichedRepositories[key] = {
      ...repo,
      description: repo.description || defaultRepo?.description || null,
      language: repo.language || defaultRepo?.language || null,
      languages: repo.languages.length ? repo.languages : (defaultRepo?.languages || []),
      productivityScore,
      commitCount,
    };
  }

  // Ensure all default repositories exist in the final map
  for (const defaultRepo of defaultRepositories) {
    if (!enrichedRepositories[defaultRepo.name]) {
      enrichedRepositories[defaultRepo.name] = defaultRepo;
    }
  }

  const value: GitHubData = {
    profile: {
      avatarUrl: user.avatar_url || "",
      bio: user.bio || "Data Engineer & AI/ML Specialist focused on building scalable ETL/ELT pipelines and modern cloud architectures.",
      followers: user.followers || 184,
      following: user.following || 113,
      publicRepos: user.public_repos || 20,
      updatedAt: user.updated_at || new Date().toISOString(),
      commits: "1,900+",
    },
    repositories: enrichedRepositories,
    recentActivity: events.length ? events.slice(0, 5).map((event) => ({
      type: event.type.replace("Event", ""),
      repository: event.repo.name,
      createdAt: event.created_at,
    })) : fallbackData.recentActivity,
  };
  setCached(value);
  return value;
};
