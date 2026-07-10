import { useEffect, useState } from "react";
import { fetchGitHubData, getGitHubFallback, type GitHubData } from "../lib/github";

export const useGitHubData = () => {
  const [data, setData] = useState<GitHubData>(getGitHubFallback);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let active = true;
    fetchGitHubData()
      .then((value) => {
        if (!active) return;
        setData(value);
        setStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  return { data, status };
};
