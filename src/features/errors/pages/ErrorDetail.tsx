import {
  Box,
  Button,
  Heading,
  List,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { useErrorDetail } from "../hooks/useErrorDetail";
import { formatDate } from "@/utils/date";
import { ErrorTagList } from "../components/ErrorTagList";
import { DetailSection } from "../components/DetailSection";

export const ErrorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { errorDetail, error } = useErrorDetail(id);

  if (error) return <Text color="red.500">{error}</Text>;

  const tags =
    errorDetail?.error_tags.flatMap((et) =>
      Array.isArray(et.tags) ? et.tags : [et.tags]
    ) ?? [];

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
          {errorDetail?.title}
        </Heading>
        <Text textStyle="sm" textAlign="center" mb="10">
          {formatDate(errorDetail?.created_at)}
        </Text>
        <Box px="10">
          <Box p="10" borderRadius="md">
            <ErrorTagList tags={tags} size="xl" />
            <DetailSection
              title="エラーメッセージ"
              content={errorDetail?.message}
            />
            <DetailSection title="発生状況" content={errorDetail?.situation} />
            <DetailSection title="環境" content={errorDetail?.environment} />
            <DetailSection title="原因" content={errorDetail?.cause} />
            <DetailSection title="解決方法" content={errorDetail?.solution} />
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
              {errorDetail?.reference_links.map((link, index) => (
                <List.Item key={index}>
                  <ChakraLink href={link} color="green.500" target="_blank">
                    {link}
                  </ChakraLink>
                </List.Item>
              ))}
            </List.Root>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
