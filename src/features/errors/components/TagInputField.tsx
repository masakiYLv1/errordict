import { Field, Span, TagsInput } from "@chakra-ui/react";
import { Controller, type Control } from "react-hook-form";
import type { FormData } from "../types/form";

type Props = {
  control: Control<FormData>;
};

export const TagInputField = ({ control }: Props) => {
  return (
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
  );
};
