/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { HeaderDesktop } from "../components/HeaderDesktop";
import { MdArrowBackIos } from "react-icons/md";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const fetchRepo = async (owner: string, repo: string) => {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : undefined,
});
  if (!res.ok) {
    throw new Error("Failed to fetch repository data");
  }
  return res.json();
};

const fetchCommits = async (owner: string, repo: string) => {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`, {
    headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : undefined,
});
  if (!res.ok) {
    throw new Error("Failed to fetch repository data");
  }
  return res.json();
};

const InfoPage = () => {
  const { owner, repo } = useParams();

  const { data: repoData, isLoading: loadingRepo } = useQuery({
    queryKey: ["repo", owner, repo],
    queryFn: () => fetchRepo(owner!, repo!),
  })

  const { data: commits, isLoading: loadingCommits } = useQuery({
    queryKey: ["commits", owner, repo],
    queryFn: () => fetchCommits(owner!, repo!),
  })

  if (loadingRepo || loadingCommits) {
    return <p className="p-4" >Loading...</p>;
  }

  return (
    <>
      <header className="hidden sm:flex flex-col w-full top-0 left-0 fixed z-50">
        <HeaderDesktop />
      </header>
      <main className="py-6 px-8 max-w-3xl mx-auto sm:pt-20">
        <div className="sm:hidden flex flex-col items-center gap-4 mb-6 left-0 fixed z-50">
          <button className="px-4 py-2 text-gray-900 rounded-3xl transition-colors">
            <Link to={"/"} className="flex items-center gap-1 text-2xl">
              <MdArrowBackIos />
            </Link>
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-4 mb-6 right-10 top-20 fixed z-50">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-3xl hover:bg-gray-600 transition-colors">
            <Link to={"/"} className="flex items-center gap-1">
              <MdArrowBackIos />
              <span>Back</span>
            </Link>
          </button>
        </div>
        <div className="pl-4 sm:pl-0">
          <h1 className="text-2xl font-bold mb-2">{repoData.full_name}</h1>
          <p className="text-gray-600 mb-4">{repoData.description}</p>
        </div>
        
        <div className="flex gap-4 text-sm text-gray-500 mb-6 pl:-8 sm:pl-0">
          <span>⭐ {repoData.stargazers_count} Stars</span>
          <span>🍴 {repoData.forks_count} Forks</span>
          {repoData.language && <span>Language: {repoData.language}</span>}
        </div>
        <h2 className="text-lg font-semibold mb-2 pl:-8 sm:pl-0">Recent Commits</h2>
        <ul className="space-y-3 pl:-8 sm:pl-0">
          {commits.map((commit: any) => (
            <li key={commit.sha} className="border p-3 rounded-mb">
              <p className="font-medium">{commit.commit.message}</p>
              <p className="text-gray-500 text-sm">by {commit.commit.author.name} on {new Date(commit.commit.author.date).toLocaleDateString()}</p>
              <a href={commit.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">View Commit</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default InfoPage;
