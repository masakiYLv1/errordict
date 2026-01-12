import { supabase } from "@/lib/supabaseClient";
import type { ErrorApiResponse } from "../types/error";

export const fetchErrors = async (
  keyword?: string
): Promise<ErrorApiResponse[]> => {
  // 変数に格納することで変数に対して条件を追加できる（ilikeはDBクエリ用メソッド）※配列にilikeは存在しない
  // awaitは実行するタイミングで使用する
  let query = supabase
    .from("errors")
    .select(`id, title, created_at, updated_at, error_tags(tags(id, name))`);

  // タイトル部分一致検索
  if (keyword && keyword.trim() !== "") {
    query = query.ilike("title", `%${keyword}%`);
  }

  // データベースとの通信を実行するためawaitを使用
  const { data, error } = await query;

  if (error) {
    console.error("Error: ", error);
    console.log("データの取得に失敗しました。");
  }

  return data ?? [];
};
