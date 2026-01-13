import { Box, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { BackButton } from "@/components/common/button/BackButton";
import { ErrorForm } from "../components/ErrorForm";
import { useErrorDetail } from "../hooks/useErrorDetail";
import { useErrorUpdate } from "../hooks/useErrorUpdate";
import type { FormData } from "../types/form";
import { Loading } from "@/components/common/Loading";

export const ErrorEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { errorDetail, error, isLoading } = useErrorDetail(id);
  const { handleUpdateData, isLoadingUpdate } = useErrorUpdate();

  if (isLoading) {
    return <Loading />;
  }

  if (isLoadingUpdate) {
    return <Loading message="Updating..." />;
  }

  if (error) return <Text color="red.500">{error}</Text>;

  if (!errorDetail) return null;

  if (!id) return;

  // タグをForm用に変換
  const tags =
    errorDetail?.error_tags.flatMap((et) =>
      Array.isArray(et.tags) ? et.tags : [et.tags]
    ) ?? [];

  // Formデータはstringのみを受け取るためnull防止策として ?? "",を使用
  const convertToFormdata = {
    title: errorDetail?.title ?? "",
    message: errorDetail?.message ?? "",
    situation: errorDetail?.situation ?? "",
    environment: errorDetail?.environment ?? "",
    cause: errorDetail?.cause ?? "",
    solution: errorDetail?.solution ?? "",
    reference_links: errorDetail?.reference_links?.join("\n") ?? "",
    tags: tags.map((tag) => tag.name) ?? [],
  };

  // Update処理
  const handleSubmit = async (data: FormData) => {
    const updateId = await handleUpdateData(errorDetail.id, data);
    navigate(`/errors/${updateId}`);
  };

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <Box mb="12">
      <Box mt="16">
        <BackButton to={`/errors/${id}`} label="←" />
      </Box>
      <ErrorForm
        defaultValues={convertToFormdata}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitLabel="更新"
      />
    </Box>
  );
};
