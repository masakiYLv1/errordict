import {
  Box,
  Button,
  Field,
  Fieldset,
  HStack,
  Input,
  Span,
  TagsInput,
  Textarea,
} from "@chakra-ui/react";

import { BackButton } from "@/components/common/button/BackButton";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient";
import { toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";

type FormData = {
  title: string;
  message: string;
  situation: string;
  environment: string;
  cause: string;
  solution: string;
  reference_links: string;
  tags: string[];
};

export const ErrorNew = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const handleCreateData = async (insertFormData: FormData) => {
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

      toaster.create({
        title: "データを登録しました",
        type: "success",
      });

      navigate(`/errors/${errorId.id}`);
    } catch (err) {
      console.log(err);

      toaster.create({
        title: "データの登録に失敗しました",
        // description: error.message,
        type: "error",
      });
    }
  };

  return (
    <Box mb="12">
      <Box mt="16">
        <BackButton to="/" />
      </Box>
      <Fieldset.Root size="lg" maxW="xl" mx="auto">
        <form onSubmit={handleSubmit(handleCreateData)} noValidate>
          <Fieldset.Content>
            <Field.Root required invalid={!!errors.title}>
              <Field.Label>
                タイトル
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("title", { required: "※ 必須項目です" })} />
              <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root required invalid={!!errors.message}>
              <Field.Label>
                エラーメッセージ
                <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                {...register("message", { required: "※ 必須項目です" })}
                autoresize
              />
              <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root>
              <Field.Label>発生状況</Field.Label>
              <Textarea {...register("situation")} autoresize />
            </Field.Root>

            <Field.Root>
              <Field.Label>環境</Field.Label>
              <Textarea {...register("environment")} autoresize />
            </Field.Root>

            <Field.Root required invalid={!!errors.cause}>
              <Field.Label>
                原因
                <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                {...register("cause", { required: "※ 必須項目です" })}
                autoresize
              />
              <Field.ErrorText>{errors.cause?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root required invalid={!!errors.solution}>
              <Field.Label>
                解決方法
                <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                {...register("solution", { required: "※ 必須項目です" })}
                autoresize
              />
              <Field.ErrorText>{errors.solution?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root>
              <Field.Label>参考リンク</Field.Label>
              <Textarea
                placeholder="1行1URLで入力"
                {...register("reference_links")}
                autoresize
              />
            </Field.Root>

            <Field.Root mb="4">
              <Controller
                control={control}
                name="tags"
                defaultValue={[]}
                render={({ field }) => (
                  <TagsInput.Root
                    value={Array.isArray(field.value) ? field.value : []}
                    onValueChange={(values) => field.onChange(values.value)}
                  >
                    <TagsInput.Label>タグ</TagsInput.Label>
                    <TagsInput.Control>
                      <TagsInput.Items />
                      <TagsInput.Input placeholder="必要ならここにタグを追加..." />
                    </TagsInput.Control>
                    <Span textStyle="xs" color="fg.muted" ms="auto">
                      EnterキーまたはReturnキーを押してタグを追加します
                    </Span>
                  </TagsInput.Root>
                )}
              />
            </Field.Root>
          </Fieldset.Content>
          <HStack gap="4">
            <Button type="submit" bg="fg.info" _hover={{ opacity: "0.7" }}>
              登録
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              キャンセル
            </Button>
          </HStack>
        </form>
      </Fieldset.Root>
    </Box>
  );
};
