import { Box, Input } from "@chakra-ui/react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const ErrorSearchInput = ({ value, onChange }: Props) => {
  return (
    <Box mb="5" w="40%" mx="auto">
      <Input
        placeholder="タイトルで検索"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
};
