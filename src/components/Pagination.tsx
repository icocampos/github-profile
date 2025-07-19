export const Pagination = ({
  page,
  setPage,
  hasNextPage,
}: {
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
}) => (
  <div className="flex justify-center items-center gap-4 mt-6">
    <button
      onClick={() => setPage(page - 1)}
      disabled={page === 1}
      className="px-4 py-2 border rounded disabled:opacity-50"
    >
      Anterior
    </button>
    <span>Página {page}</span>
    <button
      onClick={() => setPage(page + 1)}
      disabled={!hasNextPage}
      className="px-4 py-2 border rounded disabled:opacity-50"
    >
      Próxima
    </button>
  </div>
);
