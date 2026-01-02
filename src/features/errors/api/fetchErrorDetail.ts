import { supabase } from "@/lib/supabaseClient";
import type { ErrorDetailApiResponse } from "../types/error";

export const fetchErrorDetail = async (
  id: string
): Promise<ErrorDetailApiResponse> => {
  const { data, error } = await supabase
    .from("errors")
    .select(
      `id, title, message, situation, environment, cause, solution, reference_links, created_at, updated_at, error_tags(tags(id, name))`
    )
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Error: ", error);
    throw new Error("データの取得に失敗しました。");
  }

  return data;
};
