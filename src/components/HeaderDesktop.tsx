import { GitHubLogo } from "./svg/GitHubLogo";

export const HeaderDesktop = () => {
  return (
    <header className="bg-header shadow-md">
      <div className="hidden sm:flex flex-row gap-6 p-4 lg:pl-56">
        <GitHubLogo />
        <div className="text-white text-lg font-semibold">
            / <span className="pl-4">Profile</span>
        </div>
      </div>
    </header>
  );
}