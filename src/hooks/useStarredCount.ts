import { useQuery } from "@tanstack/react-query";

const GITHUB_USERNAME = "icocampos";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const useStarredCount = () => {
    return useQuery({
        queryKey: ["starred-count", GITHUB_USERNAME],
        queryFn: async () => {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/starred?per_page=1`, {
                headers: GITHUB_TOKEN
                    ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
                    : undefined,
            });
            const linkHeader = response.headers.get("link");
            if (!linkHeader) return 0;

            const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
            return match ? parseInt(match[1], 10) : 0;
           
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}