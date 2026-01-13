import { Box, List, Text } from "@chakra-ui/react";
import { useState } from "react";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { useErrors } from "../hooks/useErrors";
import { ErrorCard } from "../components/ErrorCard";
import { ErrorSearchInput } from "../components/ErrorSearchInput";
import { Loading } from "@/components/common/Loading";

export const ErrorsList = () => {
  const [keyword, setKeyword] = useState("");
  const { errorList, error, isLoading } = useErrors(keyword);

  if (isLoading) {
    return <Loading />;
  }

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box>
      <Header action="new" />
      <ErrorSearchInput value={keyword} onChange={setKeyword} />
      <Box px="10" mx="10">
        <Box>
          <List.Root unstyled>
            {errorList.map((item) => (
              <List.Item key={item.id} mb="5">
                <ErrorCard errorItem={item} />
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
