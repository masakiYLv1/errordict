import { HStack, Tag } from "@chakra-ui/react";
import type { ErrorTag } from "../types/error";

type ErrorTagProps = {
  tags: ErrorTag[];
  size: "sm" | "xl";
};

export const ErrorTagList = ({ tags, size }: ErrorTagProps) => {
  return (
    <HStack>
      {tags.map((tag) => (
        <Tag.Root key={tag.id} size={size}>
          <Tag.Label>{tag.name}</Tag.Label>
        </Tag.Root>
      ))}
    </HStack>
  );
};
