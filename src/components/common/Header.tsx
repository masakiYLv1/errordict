import { Box, Flex, Heading, Separator } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { NewErrorButton } from "./button/NewErrorButton";

export const Header = () => {
  return (
    <>
      <Box px="10" py="5">
        <Flex align="center" justify="space-between">
          <RouterLink to="/">
            <Heading as="h1">ErrorDict</Heading>
          </RouterLink>
          <NewErrorButton />
        </Flex>
      </Box>
      <Separator size="md" pb="5" />
    </>
  );
};
