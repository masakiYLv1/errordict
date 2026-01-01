import { Box, Flex, Heading, Separator } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { NewErrorButton } from "./button/NewErrorButton";
import { EditErrorButton } from "./button/EditErrorButton";

type HeaderAction = "new" | "edit";

type HeaderProps = {
  action: HeaderAction;
};

export const Header = ({ action }: HeaderProps) => {
  return (
    <>
      <Box px="10" py="5">
        <Flex align="center" justify="space-between">
          <RouterLink to="/">
            <Heading as="h1">ErrorDict</Heading>
          </RouterLink>
          {action === "new" && <NewErrorButton />}
          {action === "edit" && <EditErrorButton />}
        </Flex>
      </Box>
      <Separator size="md" pb="5" />
    </>
  );
};
