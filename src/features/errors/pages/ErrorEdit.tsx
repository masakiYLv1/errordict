import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "@/components/common/button/BackButton";
import { ErrorForm } from "../components/ErrorForm";

export const ErrorEdit = () => {
  const navigate = useNavigate();

  const handleSuccess = (id: string) => {
    navigate(`/errors/${id}`);
  };

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <Box mb="12">
      <Box mt="16">
        <BackButton to="/" />
      </Box>
      <ErrorForm onSuccess={handleSuccess} onCancel={handleCancel} />
    </Box>
  );
};
