import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";

export const ErrorDetail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Box>
      <Header action="edit" />
      <Box>
        <RouterLink to="/">
          <Button size="xs" variant="ghost" _hover={{ opacity: "0.7" }}>
            ← 一覧へ戻る
          </Button>
        </RouterLink>
        <Heading textStyle="4xl" textAlign="center" my="5">
          タイトル
        </Heading>
        <Text textStyle="sm" textAlign="center" mb="10">
          登録日
        </Text>
        <Box px="10">
          <Box p="10" bg="red.50" borderRadius="md">
            <HStack mb="4">
              <Tag.Root size="xl">
                <Tag.Label>タグ</Tag.Label>
              </Tag.Root>
              <Tag.Root size="xl">
                <Tag.Label>タグ2</Tag.Label>
              </Tag.Root>
            </HStack>
            <Heading
              as="h3"
              textStyle="2xl"
              pb="2"
              mb="4"
              borderBottomWidth="1px"
            >
              エラーメッセージ
            </Heading>
            <Text textStyle="16px" lineHeight="1.7">
              エラーメッセージの内容が入ります。
            </Text>
            <Heading
              as="h3"
              textStyle="2xl"
              pb="2"
              mt="12"
              mb="4"
              borderBottomWidth="1px"
            >
              発生状況
            </Heading>
            <Text textStyle="16px" lineHeight="1.7">
              発生状況の内容が入ります。
            </Text>
            <Heading
              as="h3"
              textStyle="2xl"
              pb="2"
              mt="12"
              mb="4"
              borderBottomWidth="1px"
            >
              環境
            </Heading>
            <Text textStyle="16px" lineHeight="1.7">
              環境の内容が入ります。
            </Text>
            <Heading
              as="h3"
              textStyle="2xl"
              pb="2"
              mt="12"
              mb="4"
              borderBottomWidth="1px"
            >
              原因
            </Heading>
            <Text textStyle="16px" lineHeight="1.7">
              原因の内容が入ります。
            </Text>
            <Heading
              as="h3"
              textStyle="2xl"
              pb="2"
              mt="12"
              mb="4"
              borderBottomWidth="1px"
            >
              解決方法
            </Heading>
            <Text textStyle="16px" lineHeight="1.7">
              解決方法の内容が入ります。
            </Text>
            <Heading
              as="h3"
              textStyle="2xl"
              pb="2"
              mt="12"
              mb="4"
              borderBottomWidth="1px"
            >
              参考リンク
            </Heading>
            <List.Root unstyled>
              <List.Item>
                <Text textStyle="16px" lineHeight="1.7">
                  参考リンクの内容が入ります。
                </Text>
              </List.Item>
              <List.Item>
                <Text textStyle="16px" lineHeight="1.7">
                  参考リンクの内容が入ります。
                </Text>
              </List.Item>
            </List.Root>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
