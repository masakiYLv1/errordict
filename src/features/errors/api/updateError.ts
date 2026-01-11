import { supabase } from "@/lib/supabaseClient";

type payload = {
  title: string;
  message: string;
  situation: string | null;
  cause: string | null;
  solution: string;
  reference_links: string[] | [];
};

export const updateError = async (
  id: string,
  payload: payload,
  tags: { name: string }[]
) => {
  // errorsテーブル更新
  const { error: errorMessage } = await supabase
    .from("errors")
    .update(payload)
    .eq("id", id);

  if (errorMessage) {
    throw new Error(errorMessage.message);
  }

  // tagsテーブル更新 upsert
  const { data: updatedTags, error: tagError } = await supabase
    .from("tags")
    .upsert(tags, { onConflict: "name" })
    .select("id");

  if (tagError) {
    throw new Error(tagError.message);
  }

  if (!updatedTags) {
    throw new Error("タグの取得に失敗しました");
  }

  // 中間テーブル用データ作成
  const errorTagsToInsert = updatedTags.map((tag) => ({
    error_id: id,
    tag_id: tag.id,
  }));

  // 依存関係削除
  await supabase.from("error_tags").delete().eq("error_id", id);

  // 依存関係再作成（タグがあるときだけ）
  if (errorTagsToInsert.length > 0) {
    await supabase.from("error_tags").insert(errorTagsToInsert);
  }

  return id;
};
