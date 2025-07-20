import { create } from 'zustand';

interface RepoStore {
  tab: "repositories" | "starred";
  setTab: (tab: "repositories" | "starred") => void;
  search: string;
  setSearch: (term: string) => void;
  page: number;
  setPage: (page: number) => void;
  language: string;
  setLanguage: (lang: string) => void;
  type: string;
  setType: (type: string) => void;
}

export const useRepoStore = create<RepoStore>((set) => ({
  tab: "repositories",
  setTab: (tab) => set({ tab, page: 1 }),
  search: "",
  setSearch: (term) => set({ search: term, page: 1 }),
  page: 1,
  setPage: (page) => set({ page }),
  language: "All",
  setLanguage: (language) => set({ language }),
  type: "All",
  setType: (type) => set({ type }),
}));
