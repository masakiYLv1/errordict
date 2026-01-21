import {
  Button,
  Field,
  Fieldset,
  Input,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useLogin } from "./useLogin";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("ログインに失敗しました");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fieldset.Root w="full">
      <form onSubmit={handleSubmit}>
        <VStack gap="4">
          <Field.Root>
            <Field.Label>メールアドレス</Field.Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>パスワード</Field.Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field.Root>

          <Button type="submit" w="full" bg="fg.info" loading={isLoading}>
            ログイン
          </Button>

          <ChakraLink
            asChild
            display="block"
            fontSize="xs"
            color="gray.600"
            textAlign="right"
            _hover={{ textDecoration: "underline", opacity: 0.7 }}
          >
            <RouterLink to="/auth/forgot-password">
              パスワードを忘れた方はこちら
            </RouterLink>
          </ChakraLink>

          <ChakraLink
            asChild
            display="block"
            fontSize="sm"
            color="blue.500"
            variant="plain"
            _hover={{ textDecoration: "underline", opacity: 0.7 }}
          >
            <RouterLink to="/auth/register">新規登録はこちら</RouterLink>
          </ChakraLink>
        </VStack>
      </form>
    </Fieldset.Root>
  );
};
