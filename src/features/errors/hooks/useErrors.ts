import { useEffect, useState } from "react";
import { fetchErrors } from "../api/fetchErrors";
import { type ErrorListItem } from "../types/error";

export const useErrors = () => {
  const [errors, setErrors] = useState<ErrorListItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const data = await fetchErrors();
        if (data) setErrors(data);
      } catch (err) {
        console.error(err);
        setError("データの取得に失敗しました。");
      }
    };

    fetchDate();
  }, []);

  return { errors, error };
};
