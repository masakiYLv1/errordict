import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const ErrorDetail = () => {
  const { id } = useParams();

  return (
    <Box>
      <Header action="edit" />
      {id}
      <Footer />
    </Box>
  );
};
