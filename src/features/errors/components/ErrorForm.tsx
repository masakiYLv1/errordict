import {
  Button,
  Field,
  Fieldset,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { TagInputField } from "./TagInputField";
import { useCreateData } from "../hooks/useCreateData";
import type { FormData } from "../types/form";

type Props = {
  onSuccess: (id: string) => void;
  onCancel: () => void;
};

export const ErrorForm = ({ onSuccess, onCancel }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const { handleCreateData } = useCreateData();

  const onSubmit = async (data: FormData) => {
    const id = await handleCreateData(data);
    if (!id) return;
    onSuccess(id);
  };

  return (
    <Fieldset.Root size="lg" maxW="xl" mx="auto">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

          <TagInputField control={control} />
        </Fieldset.Content>
        <HStack gap="4">
          <Button type="submit" bg="fg.info" _hover={{ opacity: "0.7" }}>
            登録
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            キャンセル
          </Button>
        </HStack>
      </form>
    </Fieldset.Root>
  );
};
