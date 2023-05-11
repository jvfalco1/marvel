import { useInfiniteQuery, FetchNextPageOptions } from "@tanstack/react-query";
import api from "../configs/axios";
import { Character } from "../types";
import { useCallback, useState } from "react";

type UseFetchCharactersReturnType = {
  data: Character[];
  isLoading: boolean;
  fetchNextPage(options?: FetchNextPageOptions): void;
  isFetchingNextPage: boolean;
  handleSearch(q: string): void;
  filter: string;
};

export default function useFetchCharacters(): UseFetchCharactersReturnType {
  const [filter, setFilter] = useState("");

  const handleSearch = useCallback((q: string) => {
    setFilter(q);
  }, []);

  const getCharacters = useCallback(
    async ({ pageParam = 0 }) => {
      const itemsPerPage = 20;

      const offset = itemsPerPage * pageParam;

      const url = filter
        ? `characters?offset=${offset}&limit=${itemsPerPage}&nameStartsWith=${filter}`
        : `characters?offset=${offset}&limit=${itemsPerPage}`;

      const { data } = await api.get(url);

      const result = data.data.results.map((item: any) => {
        const securedPath = item.thumbnail.path.replace("http://", "https://");
        const thumbnail = `${securedPath}.${item.thumbnail.extension}`;
        return {
          ...item,
          thumbnail,
        };
      });

      return {
        data: result,
        nextPage: pageParam + 1,
      };
    },
    [filter]
  );

  const { isLoading, data, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(["characters", filter], getCharacters, {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    });

  return {
    isLoading,
    data: data?.pages.flatMap((page) => page.data) as Character[],
    fetchNextPage,
    isFetchingNextPage,
    handleSearch,
    filter,
  };
}
