import { useState } from "react";

export const useErrorDetail = () => {
  const [errorDetail, setErrorDetail] = useState(null);
  const [error, setError] = useState<string | null>(null);
};
