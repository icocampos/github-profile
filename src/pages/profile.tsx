import { useRepoStore } from "../store/useRepoStore";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import { useGitHubUser } from "../hooks/useGitHubUser";
import { useStarredCount } from "../hooks/useStarredCount";

import { FaLink } from "react-icons/fa"
import { HeaderDesktop } from "../components/HeaderDesktop"
import { InfoProfile } from "../components/InfoProfile"
import { ToggleSegment } from "../components/ToggleSegment";
import { SearchBar } from "../components/SearchBar";
import { RepositoryList } from "../components/RepositoryList";
import { Pagination } from "../components/Pagination";
import { RepoSelects } from "../components/RepoSelect";

const ProfilePage = () => {
  const { tab, setTab, search, setSearch, page, setPage } = useRepoStore();
  const { data, isLoading, error } = useGitHubRepos(tab, page);
  const { data: user } = useGitHubUser();
  const { data: starredCount } = useStarredCount();


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filtered = (data || []).filter((repo: any) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  )

  const hasNextPage = (data?.length || 0) === 3;

  return (
    <>
        <header className="w-full top-0 left-0 fixed z-50">
          <HeaderDesktop />
        </header>
        <main className="flex flex-col sm:flex-row">
          <div className="w-full h-full flex flex-col items-center justify-center sm:pt-20 ">
            <InfoProfile
              avatarUrl={user?.avatar_url ?? ""}
              username={user?.login ?? 'unknown'}
              bio={user?.bio ?? 'No bio available'}
              company={user?.company ?? 'Not specified'}
              location={user?.location ?? 'Not specified'}
              links={[
                {
                  label: "GitHub",
                  url: user?.html_url ?? "",
                  icon: <FaLink />,
                },
              ]}
            />  
          </div>

          <div className="flex flex-col sm:pt-20 items-center justify-center w-full max-w-4xl bg-white lg:pr-96 px-8">
            <div className="px-0">
              <ToggleSegment
              selected={tab}
              onSelect={setTab}
              counts={{ repositories: user?.public_repos ?? 0, starred: starredCount ?? 0 }} 
            />
            </div>

            <div className="flex flex-row gap-2">
              <SearchBar value={search} onChange={setSearch} />
              <RepoSelects />
            </div>
            
            {isLoading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">Error loading repositories</p>}

            {!isLoading && !error && (
              <>
                <RepositoryList repositories={filtered} />
                <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
              </>
            )}
          </div>   
        </main>  
       

    </>
  )
}

export default ProfilePage
