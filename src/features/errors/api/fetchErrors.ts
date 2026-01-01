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

  // console.log(data);
  // const formattedErrors = data.map((e) => ({
  //   ...e,
  //   tags: e.error_tags.flatMap((t) => t.tags),
  // }));
  // console.log(formattedErrors);
  // const testData1 = data?.map((item) => item.error_tags.map((et) => et.tags));
  // console.log(testData1);
  // const testData2 = data?.map((item) =>
  //   item.error_tags.flatMap((et) => et.tags).map((tag) => tag)
  // );
  // console.log(testData2);

  return data ?? [];
};
