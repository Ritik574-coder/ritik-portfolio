import { github, projects } from "../data/portfolio";

const API_URL = "https://api.github.com";
const CACHE_TTL = 60 * 60 * 1000;
const CACHE_KEY = "ritik-portfolio:github:v1";
let requestInFlight: Promise<GitHubData> | null = null;

export interface GitHubProfile {
  avatarUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  updatedAt: string;
}

export interface GitHubRepository {
  name: string;
  stars: number;
  forks: number;
  language: string | null;
  languages: string[];
  updatedAt: string;
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

const fallbackData: GitHubData = {
  profile: {
    avatarUrl: "",
    bio: null,
    followers: 0,
    following: 0,
    publicRepos: Number.parseInt(github.repositories, 10) || 0,
    updatedAt: "",
  },
  repositories: Object.fromEntries(
    projects.map((project) => [
      project.repository,
      { name: project.repository, stars: 0, forks: 0, language: null, languages: [], updatedAt: "" },
    ]),
  ),
  recentActivity: [],
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

  const value: GitHubData = {
    profile: {
      avatarUrl: user.avatar_url,
      bio: user.bio,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      updatedAt: user.updated_at,
    },
    repositories,
    recentActivity: events.slice(0, 5).map((event) => ({
      type: event.type.replace("Event", ""),
      repository: event.repo.name,
      createdAt: event.created_at,
    })),
  };
  setCached(value);
  return value;
};
