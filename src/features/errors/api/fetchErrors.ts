import { supabase } from "@/lib/supabaseClient";
import type { ErrorApiResponse } from "../types/error";

export const fetchErrors = async (): Promise<ErrorApiResponse[]> => {
  const { data, error } = await supabase
    .from("errors")
    .select(`id, title, created_at, updated_at, error_tags(tags(id, name))`);

  if (error) {
    console.error("Error: ", error);
    console.log("データの取得に失敗しました。");
  }

  return data ?? [];
};
