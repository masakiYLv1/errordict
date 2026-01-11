import { toaster } from "@/components/ui/toaster";
import type { FormData } from "../types/form";
import { updateError } from "../api/updateError";

export const useErrorUpdate = () => {
  const handleUpdateData = async (id: string, data: FormData) => {
    try {
      // errorテーブル 参照リンク データベースに配列で登録するための処理
      const referenceLinks = data.reference_links
        .split("\n")
        .map((link) => link.trim())
        .filter(Boolean);

      // tagsテーブル tagsをSupabaseに登録するための処理 []へ変換
      const tagNameToUpdate =
        data.tags.length > 0 ? data.tags.map((tag) => ({ name: tag })) : [];

      // タグを除く記事のフォーマット
      const payload = {
        title: data.title,
        message: data.message,
        situation: data.situation,
        cause: data.cause,
        solution: data.solution,
        reference_links: referenceLinks,
      };

      // Update APIを呼ぶ
      const updatedId = await updateError(id, payload, tagNameToUpdate);

      toaster.create({
        title: "データを登録しました",
        type: "success",
      });

      return updatedId;
    } catch (err) {
      console.log(err);

      toaster.create({
        title: "データの登録に失敗しました",
        // description: error.message,
        type: "error",
      });
    }
  };

  return { handleUpdateData };
};
