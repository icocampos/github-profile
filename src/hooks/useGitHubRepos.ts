/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useRepoStore } from "../store/useRepoStore";

const GITHUB_USERNAME = "icocampos";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const useGitHubRepos = (
  type: "repositories" | "starred",
  page: number
) => {
  const { language, type: repoType } = useRepoStore();

  return useQuery({
    queryKey: ["repos", type, page, language, repoType],
    queryFn: () => fetchRepos(type, page),
    //keepPreviousData: true,
    staleTime: 1000 * 60,
  });
};

const fetchRepos = async (
  sourceType: "repositories" | "starred",
  page = 1,
  repoType = "All",
  language = "All"
): Promise<any[]> => {
  const per_page = 3;
  let endpoint =
    sourceType === "repositories"
      ? `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${per_page}&page=${page}`
      : `https://api.github.com/users/${GITHUB_USERNAME}/starred?per_page=${per_page}&page=${page}`;

      if (sourceType === "repositories" && repoType !== "All") {
        endpoint += `&type=${repoType.toLowerCase()}`;
      } 

  const res = await fetch(endpoint, {
    headers: GITHUB_TOKEN
      ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
      : undefined,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repos");
  }

  const data = await res.json();

  const filteredByLanguage =
    language === "All"
      ? data
      : data.filter((repo: any) => repo.language === language);

  return filteredByLanguage;
};
