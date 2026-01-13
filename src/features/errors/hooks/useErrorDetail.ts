import { useEffect, useState } from "react";

import { fetchErrorDetail } from "../api/fetchErrorDetail";
import type { ErrorDetailApiResponse } from "../types/error";

export const useErrorDetail = (id: string | undefined) => {
  const [errorDetail, setErrorDetail] = useState<ErrorDetailApiResponse>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchDitaile = async () => {
      setIsLoading(true);

      try {
        const data = await fetchErrorDetail(id);

        setErrorDetail(data);
      } catch (err) {
        console.error("Error: ", err);
        setError("データの取得に失敗しました。");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDitaile();
  }, [id]);

  return { errorDetail, error, isLoading };
};
