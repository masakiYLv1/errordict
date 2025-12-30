import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Box, Card, HStack, Input, List, Tag, Text } from "@chakra-ui/react";

export const ErrorsList = () => {
  return (
    <Box>
      <Header />
      <Box px="10" mx="7">
        <Box mb="5">
          <Input placeholder="検索ボックス" />
        </Box>
        <Box>
          <List.Root unstyled>
            <List.Item mb="5">
              <Card.Root>
                <Card.Body>
                  <Card.Title>タイトル</Card.Title>
                  <HStack>
                    <Tag.Root>
                      <Tag.Label>React</Tag.Label>
                    </Tag.Root>
                    <Tag.Root>
                      <Tag.Label>TypeScript</Tag.Label>
                    </Tag.Root>
                  </HStack>
                  <Text>登録日</Text>
                </Card.Body>
              </Card.Root>
            </List.Item>
            <List.Item mb="5">
              <Card.Root>
                <Card.Body>
                  <Card.Title>タイトル2</Card.Title>
                  <HStack>
                    <Tag.Root>
                      <Tag.Label>React</Tag.Label>
                    </Tag.Root>
                    <Tag.Root>
                      <Tag.Label>TypeScript</Tag.Label>
                    </Tag.Root>
                  </HStack>
                  <Text>登録日</Text>
                </Card.Body>
              </Card.Root>
            </List.Item>
          </List.Root>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
