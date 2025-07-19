import { useQuery } from "@tanstack/react-query";

const GITHUB_USERNAME = "icocampos";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const useGitHubRepos = (
  type: "repositories" | "starred",
  page: number
) => {
  return useQuery({
    queryKey: ["repos", type, page],
    queryFn: () => fetchRepos(type, page),
    //keepPreviousData: true,
    staleTime: 1000 * 60,
  });
};

const fetchRepos = async (
  type: "repositories" | "starred",
  page = 1
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any[]> => {
  const per_page = 10;
  const endpoint =
    type === "repositories"
      ? `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${per_page}&page=${page}`
      : `https://api.github.com/users/${GITHUB_USERNAME}/starred?per_page=${per_page}&page=${page}`;

  const res = await fetch(endpoint, {
    headers: GITHUB_TOKEN
      ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
      : undefined,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repos");
  }

  return res.json();
};
