import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "@/components/common/button/BackButton";
import { ErrorForm } from "../components/ErrorForm";
import { useCreateData } from "../hooks/useCreateData";
import type { FormData } from "../types/form";

export const ErrorNew = () => {
  const navigate = useNavigate();
  const { handleCreateData } = useCreateData();

  const handleSubmit = async (data: FormData) => {
    const id = await handleCreateData(data);
    if (!id) return;
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
      <ErrorForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitLabel="登録"
      />
    </Box>
  );
};
