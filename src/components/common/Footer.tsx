import { Box, Separator, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Separator size="md" mt="5" />
      <Box px="10" py="5">
        <Text textAlign="center">&copy; 2025</Text>
      </Box>
    </>
  );
};
