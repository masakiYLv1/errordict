import { Box, Input, List, Text } from "@chakra-ui/react";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { useErrors } from "../hooks/useErrors";
import { ErrorCard } from "../components/ErrorCard";

export const ErrorsList = () => {
  const { errors, error } = useErrors();

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box>
      <Header action="new" />
      <Box px="10" mx="7">
        <Box mb="5" w="40%" mx="auto">
          <Input placeholder="検索ボックス" />
        </Box>
        <Box>
          <List.Root unstyled>
            {errors.map((item) => (
              <List.Item key={item.id} mb="5">
                <ErrorCard error={item} />
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
