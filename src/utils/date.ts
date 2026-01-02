export const formatDate = (dateStr: string | undefined): string | undefined => {
  if (!dateStr) return;
  const date = new Date(dateStr);
  const yearDate = date.getFullYear();
  const monthDate = String(date.getMonth() + 1).padStart(2, "0");
  const dayDate = String(date.getDate()).padStart(2, "0");
  return `${yearDate}/${monthDate}/${dayDate}`;
};
