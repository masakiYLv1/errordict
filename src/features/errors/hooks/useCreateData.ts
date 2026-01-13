import { useState } from "react";

import { supabase } from "@/lib/supabaseClient";
import { toaster } from "@/components/ui/toaster";
import type { FormData } from "../types/form";

export const useCreateData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateData = async (
    insertFormData: FormData
  ): Promise<string | undefined | null> => {
    setIsLoading(true);

    try {
      // errorテーブル 参照リンク - データベースに配列で登録するための処理 -
      const referenceLinks = insertFormData.reference_links
        .split("\n")
        .map((link) => link.trim())
        .filter(Boolean);

      // errorテーブル insert
      const { data: errorId, error: errorMessage } = await supabase
        .from("errors")
        .insert([
          {
            title: insertFormData.title,
            message: insertFormData.message,
            situation: insertFormData.situation,
            environment: insertFormData.environment,
            cause: insertFormData.cause,
            solution: insertFormData.solution,
            reference_links: referenceLinks,
          },
        ])
        .select("id")
        .single();

      if (!errorId || errorMessage) {
        throw errorMessage ?? new Error("Failed to insert error record");
      }

      // tagsテーブル tags=[]対策
      if (insertFormData.tags.length > 0) {
        // tagsテーブル tagsをSupabaseに登録するための処理
        const tagsNameToInsert = insertFormData.tags.map((tag) => ({
          name: tag,
        }));

        // tagsテーブル upsert
        const { data: tagsId, error: tagsError } = await supabase
          .from("tags")
          .upsert(tagsNameToInsert, { onConflict: "name" })
          .select("id");

        if (!tagsId || tagsError) {
          throw tagsError ?? new Error("Failed to upsert tags");
        }

        // error_tagsテーブル tagsId → tagId 中間テーブル用に定義
        const errorTagsToInsert = tagsId?.map((tagId) => ({
          error_id: errorId.id,
          tag_id: tagId.id,
        }));

        // error_tagsテーブル 中間テーブル insert
        const { error: errorTagsError } = await supabase
          .from("error_tags")
          .insert(errorTagsToInsert);

        if (errorTagsError) {
          throw errorTagsError;
        }
      }

      toaster.create({
        title: "データを登録しました",
        type: "success",
      });

      return errorId.id;
    } catch (err) {
      console.log(err);

      toaster.create({
        title: "データの登録に失敗しました",
        // description: error.message,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { handleCreateData, isLoading };
};
