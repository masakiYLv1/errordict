import {
  Button,
  Field,
  Fieldset,
  Input,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const LoginForm = () => {
  return (
    <Fieldset.Root w="full">
      <form>
        <VStack gap="4">
          <Field.Root>
            <Field.Label>メールアドレス</Field.Label>
            <Input />
          </Field.Root>

          <Field.Root>
            <Field.Label>パスワード</Field.Label>
            <Input />
          </Field.Root>

          <Button type="submit" w="full" bg="fg.info">
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
