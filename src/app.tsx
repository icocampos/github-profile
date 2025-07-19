import { useRepoStore } from "./store/useRepoStore";
import { useGitHubRepos } from "./hooks/useGitHubRepos";

import { FaLink } from "react-icons/fa"
import { HeaderDesktop } from "./components/HeaderDesktop"
import { InfoProfile } from "./components/InfoProfile"
import { ToggleSegment } from "./components/ToggleSegment";
import { SearchBar } from "./components/SearchBar";
import { FilterButtons } from "./components/FilterButtons";
import { RepositoryList } from "./components/RepositoryList";
import { Pagination } from "./components/Pagination";

const App = () => {
  const { tab, setTab, search, setSearch, page, setPage } = useRepoStore();
  const { data, isLoading, error } = useGitHubRepos(tab, page);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filtered = (data || []).filter((repo: any) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  )

  const hasNextPage = (data?.length || 0) === 10; // Assuming 10 is the per_page limit

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full top-0 left-0 fixed z-50">
          <HeaderDesktop />
        </div>

        <div className="w-full h-full sm:pt-20 lg:pl-48">
            <InfoProfile
              avatarUrl="https://avatars.githubusercontent.com/u/82005138?v=4"
              username="Ícaro Campos"
              bio="Software Engineer passionate about open source."
              company="Tech Company"
              location="City, Country"
              links={[
                {
                  label: "GitHub",
                  url: "",
                  icon: <FaLink />,
                },
              ]}
            />  
        </div>    
        
        <div className="max-w-3xl h-4/5 flex flex-col items-center pr-48 py-8 pl-8">
          <ToggleSegment
            selected={tab}
            onSelect={setTab}
            counts={{ repositories: 81, starred: 12 }} 
          />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <SearchBar value={search} onChange={setSearch} />
            <FilterButtons />
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

      </div>
    </>
  )
}

export default App
