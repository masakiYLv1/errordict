import { useEffect, useState } from "react";
import { fetchErrorDetail } from "../api/fetchErrorDetail";
import type { ErrorDetailApiResponse } from "../types/error";

export const useErrorDetail = (id: string | undefined) => {
  const [errorDetail, setErrorDetail] = useState<ErrorDetailApiResponse>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchDitaile = async () => {
      try {
        const data = await fetchErrorDetail(id);

        setErrorDetail(data);
      } catch (err) {
        console.error("Error: ", err);
        setError("データの取得に失敗しました。");
      }
    };

    fetchDitaile();
  }, [id]);

  return { errorDetail, error };
};
