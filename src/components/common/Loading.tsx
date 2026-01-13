import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

type Props = {
  message?: string;
};

export const Loading = ({ message = "Loading..." }: Props) => {
  return (
    <Center p="10">
      <VStack>
        <Spinner size="lg" color="teal.500" />
        <Text fontSize="sm" color="gray.500">
          {message}
        </Text>
      </VStack>
    </Center>
  );
};
