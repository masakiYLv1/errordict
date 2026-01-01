import { Box, Card, HStack, Input, List, Tag, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { useErrors } from "../hooks/useErrors";
import { formatDate } from "@/utils/date";

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
                <RouterLink to={`/errors/${item.id}`}>
                  <Card.Root>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <HStack>
                        {item.error_tags
                          .flatMap((et) => et.tags)
                          .map((tag) => (
                            <Tag.Root key={tag.id}>
                              <Tag.Label>{tag.name}</Tag.Label>
                            </Tag.Root>
                          ))}
                      </HStack>
                      <Text>{formatDate(item.created_at)}</Text>
                    </Card.Body>
                  </Card.Root>
                </RouterLink>
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
