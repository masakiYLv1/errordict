import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const NewErrorButton = () => {
  return (
    <RouterLink to="/errors/new">
      <Button size="sm" bg="fg.info" _hover={{ opacity: "0.7" }}>
        エラー登録
      </Button>
    </RouterLink>
  );
};
