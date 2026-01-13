import { useEffect, useState } from "react";

import { fetchErrors } from "../api/fetchErrors";
import { type ErrorListItem } from "../types/error";

export const useErrors = (keyword?: string) => {
  const [errorList, setErrorList] = useState<ErrorListItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await fetchErrors(keyword);
        if (data) {
          const formattedErrors: ErrorListItem[] = data.map((item) => ({
            ...item,
            tags: item.error_tags.flatMap((t) => t.tags),
          }));

          setErrorList(formattedErrors);
        }
      } catch (err) {
        console.error(err);
        setError("データの取得に失敗しました。");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return { errorList, error, isLoading };
};
