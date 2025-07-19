import { create } from 'zustand';

interface RepoStore {
  tab: "repositories" | "starred";
  setTab: (tab: "repositories" | "starred") => void;
  search: string;
  setSearch: (term: string) => void;
  page: number;
  setPage: (page: number) => void;
}

export const useRepoStore = create<RepoStore>((set) => ({
  tab: "repositories",
  setTab: (tab) => set({ tab, page: 1 }), // reset ao trocar aba
  search: "",
  setSearch: (term) => set({ search: term, page: 1 }), // reset ao buscar
  page: 1,
  setPage: (page) => set({ page }),
}));
