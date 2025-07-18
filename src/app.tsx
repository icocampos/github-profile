import { FaLink } from "react-icons/fa"
import { HeaderDesktop } from "./components/HeaderDesktop"
import { InfoProfile } from "./components/InfoProfile"
import { ToggleSegment } from "./components/ToggleSegment"
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState<'repositories' | 'starred'>('repositories');

  const repoData = [
    { id: 1, name: 'Repo 1', forks: 142 },
    { id: 2, name: 'Repo 2', forks: 98 },
    { id: 3, name: 'Repo 3', forks: 76 },
    { id: 4, name: 'Repo 4', forks: 54 },
    { id: 5, name: 'Repo 5', forks: 32 },
  ]

  const starredData = [
    { id: 1, name: 'Starred Repo 1', forks: 120 },
    { id: 2, name: 'Starred Repo 2', forks: 85 },
    { id: 3, name: 'Starred Repo 3', forks: 60 },
    { id: 4, name: 'Starred Repo 4', forks: 45 },
    { id: 5, name: 'Starred Repo 5', forks: 30 },
  ]

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

       <div className="w-full h-full sm:pt-20 lg:pl-48 max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
        <ToggleSegment
          selected={activeTab}
          onSelect={setActiveTab}
          counts={{
            repositories: repoData.length,
            starred: starredData.length,
          }}
        />
        {activeTab === 'repositories' ? (
          <div>
            {repoData.map(repo => (
              <div key={repo.id} className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">{repo.name}</h2>
                <p className="text-gray-600">Forks: {repo.forks}</p>
              </div>
            ))}
          </div>
        ): (
          <div>
            {starredData.map(repo => (
              <div key={repo.id} className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">{repo.name}</h2>
                <p className="text-gray-600">Forks: {repo.forks}</p>
              </div>
            ))}
          </div>
        )}
        </div>     

      </div>
    </>
  )
}

export default App
