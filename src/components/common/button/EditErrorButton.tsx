import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type EditProps = {
  id: string | undefined;
};

export const EditErrorButton = ({ id }: EditProps) => {
  return (
    <RouterLink to={`/errors/${id}/edit`}>
      <Button size="sm" bg="fg.info" _hover={{ opacity: "0.7" }}>
        編集
      </Button>
    </RouterLink>
  );
};
