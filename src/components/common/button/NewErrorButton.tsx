import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const NewErrorButton = () => {
  return (
    <Button asChild size="sm" bg="fg.info" _hover={{ opacity: 0.7 }}>
      <RouterLink to="/errors/new">エラー登録</RouterLink>
    </Button>
  );
};
