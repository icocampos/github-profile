import React from "react";
import { RepositoryCard } from "./RepositoryCard";

interface Repo {
  id: number;
  owner: {
    login: string;
  };
  name: string;
  html_url: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
}

interface RepositoryListProps {
  repositories: Repo[];
}

export const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className="mt-4">
      {repositories.map((repo) => (
        <RepositoryCard key={repo.id} {...repo} />
      ))}
    </div>
  );
};
