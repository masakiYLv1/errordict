import { Heading, Text } from "@chakra-ui/react";

type ErrorDetailProps = {
  title: string;
  content: string | undefined;
};

export const DetailSection = ({ title, content }: ErrorDetailProps) => {
  return (
    <>
      <Heading
        as="h3"
        textStyle="2xl"
        pb="2"
        mt="12"
        mb="4"
        borderBottomWidth="1px"
      >
        {title}
      </Heading>
      <Text textStyle="16px" lineHeight="1.7">
        {content}
      </Text>
    </>
  );
};
