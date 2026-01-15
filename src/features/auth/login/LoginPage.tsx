// src/features/auth/login/LoginPage.tsx
import { Box, Heading, VStack } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { BackButton } from "@/components/common/button/BackButton";

export const LoginPage = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box w="full" maxW="sm" p="8" bg="white" borderRadius="md" boxShadow="md">
        <BackButton to="/" />
        <VStack gap="8">
          <Heading size="md">ログイン</Heading>
          <LoginForm />
        </VStack>
      </Box>
    </Box>
  );
};
