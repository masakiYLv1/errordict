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
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
  message: string;
  situation: string;
  environment: string;
  cause: string;
  solution: string;
  reference_links: string;
};

export const ErrorNew = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box mb="12">
      <Box mt="16">
        <BackButton to="/" />
      </Box>
      <Fieldset.Root size="lg" maxW="xl" mx="auto">
        <form onSubmit={onSubmit}>
          <Fieldset.Content>
            <Field.Root>
              <Field.Label>タイトル</Field.Label>
              <Input {...register("title", { required: true })} />
            </Field.Root>

            <Field.Root>
              <Field.Label>エラーメッセージ</Field.Label>
              <Textarea
                {...register("message", { required: true })}
                autoresize
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>発生状況</Field.Label>
              <Textarea {...register("situation")} autoresize />
            </Field.Root>

            <Field.Root>
              <Field.Label>環境</Field.Label>
              <Textarea {...register("environment")} autoresize />
            </Field.Root>

            <Field.Root>
              <Field.Label>原因</Field.Label>
              <Textarea {...register("cause", { required: true })} autoresize />
            </Field.Root>

            <Field.Root>
              <Field.Label>解決方法</Field.Label>
              <Textarea
                {...register("solution", { required: true })}
                autoresize
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>参考リンク</Field.Label>
              <Textarea {...register("reference_links")} autoresize />
            </Field.Root>

            <Field.Root mb="4">
              <TagsInput.Root defaultValue={["React", "Chakra", "TypeScript"]}>
                <TagsInput.Label>タグ</TagsInput.Label>
                <TagsInput.Control>
                  <TagsInput.Items />
                  <TagsInput.Input placeholder="必要ならここにタグを追加..." />
                </TagsInput.Control>
                <Span textStyle="xs" color="fg.muted" ms="auto">
                  EnterキーまたはReturnキーを押してタグを追加します
                </Span>
              </TagsInput.Root>
            </Field.Root>
          </Fieldset.Content>
          <HStack gap="4">
            <Button type="submit" bg="fg.info" _hover={{ opacity: "0.7" }}>
              登録
            </Button>
            <Button variant="outline">キャンセル</Button>
          </HStack>
        </form>
      </Fieldset.Root>
    </Box>
  );
};
