import React from "react";
import { Link } from "react-router-dom";

interface RepositoryCardProps {
  owner: {
    login: string;
  };
  name: string;
  html_url?: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({
  owner,
  name,
  description,
  stargazers_count,
  forks_count,
  language,
}) => {
  return (
    <div className="mb-4">
      <Link
        to={`/repo-info/${owner.login}/${name}`}
        rel="noopener noreferrer"
        className="text-sm text-gray-800 font-medium"
      >
        {owner.login} / <span className="text-blue-600">{name}</span>
      </Link>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="flex gap-4 text-xs text-gray-500 mt-2 items-center">
        {language && <span>{language}</span>}
        <span>⭐ {stargazers_count}</span>
        <span>🍴 {forks_count}</span>
      </div>
    </div>
  );
};