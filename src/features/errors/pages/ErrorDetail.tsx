import { Box, Button, Heading, Tag, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";

export const ErrorDetail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Box>
      <Header action="edit" />
      <Box>
        <Button>← 一覧へ戻る</Button>
        <Heading>タイトル</Heading>
        <Text>登録日</Text>
        <Box>
          <Box>
            <Tag.Root>
              <Tag.Label>タグ</Tag.Label>
            </Tag.Root>
            <Heading as="h3">エラーメッセージ</Heading>
            <Text>エラーメッセージの内容が入ります。</Text>
            <Heading as="h3">発生状況</Heading>
            <Text>発生状況の内容が入ります。</Text>
            <Heading as="h3">環境</Heading>
            <Text>環境の内容が入ります。</Text>
            <Heading as="h3">原因</Heading>
            <Text>原因の内容が入ります。</Text>
            <Heading as="h3">解決方法</Heading>
            <Text>解決方法の内容が入ります。</Text>
            <Heading as="h3">参考リンク</Heading>
            <Text>参考リンクの内容が入ります。</Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
