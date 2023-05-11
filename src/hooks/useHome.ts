import useFetchCharacters from "./useFetchCharacters";

const useHome = () => {
  const {
    data: characters,
    fetchNextPage,
    isFetchingNextPage,
    handleSearch,
    filter,
  } = useFetchCharacters();

  return {
    functions: {
      fetchNextPage,
      handleSearch,
    },
    states: {
      characters,
      isFetchingNextPage,
      filter,
    },
  };
};

export default useHome;
