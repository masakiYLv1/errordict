import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import { ErrorIdContext } from "@/features/errors/components/contexts/ErrorIdContext";

export const EditErrorButton = () => {
  const id = useContext(ErrorIdContext);

  return (
    <RouterLink to={`/errors/${id}/edit`}>
      <Button size="sm" bg="fg.info" _hover={{ opacity: "0.7" }}>
        編集
      </Button>
    </RouterLink>
  );
};
