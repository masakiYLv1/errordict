import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "@/components/common/button/BackButton";
import { ErrorForm } from "../components/ErrorForm";
import { useCreateData } from "../hooks/useCreateData";
import type { FormData } from "../types/form";
import { Loading } from "@/components/common/Loading";

export const ErrorNew = () => {
  const navigate = useNavigate();
  const { handleCreateData, isLoading } = useCreateData();

  if (isLoading) {
    return <Loading message="Saving..." />;
  }

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
