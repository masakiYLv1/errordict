import { Card, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import type { ErrorListItem } from "../types/error";
import { formatDate } from "@/utils/date";
import { ErrorTagList } from "./ErrorTagList";

type ErrorCardProps = {
  errorItem: ErrorListItem;
};

export const ErrorCard = ({ errorItem }: ErrorCardProps) => {
  return (
    <RouterLink to={`/errors/${errorItem.id}`}>
      <Card.Root>
        <Card.Body>
          <Card.Title mb="2" textStyle="2xl">
            {errorItem.title}
          </Card.Title>
          <ErrorTagList tags={errorItem.tags} size="sm" />
          <Text fontSize="14px">{formatDate(errorItem.created_at)}</Text>
        </Card.Body>
      </Card.Root>
    </RouterLink>
  );
};
