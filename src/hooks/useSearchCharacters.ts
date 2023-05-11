import { useDispatch, useSelector } from "react-redux";
import {
  charactersSelector,
  setCharacters,
  setError,
  setLoading,
} from "../store/slices/characters";

import api from "../configs/axios";
import { Character } from "../types";
import { useCallback, useEffect } from "react";

type UseSearchCharacterReturnType = {
  loading: boolean;
  characters: Character[];
  handleLoadMore(): void;
};

export default function useSearchCharacter(): UseSearchCharacterReturnType {
  const { loading, characters, nextPage, hasNextPage } =
    useSelector(charactersSelector);
  const dispatch = useDispatch();

  const fetchCharacters = useCallback(
    async ({ pageParam = 1 }) => {
      try {
        dispatch(setLoading());
        const itemsPerPage = 20;
        const count = pageParam * itemsPerPage;

        const offset = itemsPerPage * pageParam;
        const { data } = await api.get(
          `characters?offset=${offset}&limit=${itemsPerPage}`
        );

        const result = data.data.results.map((item: any) => {
          const securedPath = item.thumbnail.path.replace(
            "http://",
            "https://"
          );
          const thumbnail = `${securedPath}.${item.thumbnail.extension}`;
          return {
            ...item,
            thumbnail,
          };
        });

        dispatch(
          setCharacters({
            characters: result,
            count,
            total: data.data.total,
            nextPage: pageParam + 1,
            hasNextPage: count < data.data.total,
          })
        );
      } catch (e) {
        dispatch(setError());
      }
    },
    [dispatch, setCharacters, setError]
  );

  useEffect(() => {
    fetchCharacters({ pageParam: 1 });
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!hasNextPage) {
      return;
    }
    fetchCharacters({ pageParam: nextPage });
  }, [nextPage, hasNextPage]);

  return {
    loading,
    characters,
    handleLoadMore,
  };
}
