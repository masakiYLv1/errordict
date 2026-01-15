import { Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type BackButtonProps = {
  to: string;
  label?: string;
};

export const BackButton = ({ to, label = "← 一覧へ戻る" }: BackButtonProps) => {
  return (
    <Button asChild size="xs" variant="ghost" _hover={{ opacity: 0.7 }}>
      <RouterLink to={to}>{label}</RouterLink>
    </Button>
  );
};
