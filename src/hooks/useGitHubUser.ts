import { useQuery } from "@tanstack/react-query";

const GITHUB_USERNAME = "icocampos";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const useGitHubUser = () => {
    return useQuery({
        queryKey: ["github-user", GITHUB_USERNAME],
        queryFn: async () => {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
                headers: GITHUB_TOKEN
                    ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
                    : undefined,
            });
            if (!response.ok) throw new Error("Failed to fetch GitHub user data");
            return response.json();
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}