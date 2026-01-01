import { HStack, Tag } from "@chakra-ui/react";
import type { ErrorTag } from "../types/error";

type ErrorTagProps = {
  tags: ErrorTag[];
};

export const ErrorTagList = ({ tags }: ErrorTagProps) => {
  return (
    <HStack>
      {tags.map((tag) => (
        <Tag.Root key={tag.id}>
          <Tag.Label>{tag.name}</Tag.Label>
        </Tag.Root>
      ))}
    </HStack>
  );
};
