import { Card, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import type { ErrorListItem } from "../types/error";
import { formatDate } from "@/utils/date";
import { ErrorTagList } from "./ErrorTagList";

type ErrorCardProps = {
  error: ErrorListItem;
};

export const ErrorCard = ({ error }: ErrorCardProps) => {
  return (
    <RouterLink to={`/errors/${error.id}`}>
      <Card.Root>
        <Card.Body>
          <Card.Title mb="2" textStyle="2xl">
            {error.title}
          </Card.Title>
          <ErrorTagList tags={error.tags} size="sm" />
          <Text fontSize="14px">{formatDate(error.created_at)}</Text>
        </Card.Body>
      </Card.Root>
    </RouterLink>
  );
};
