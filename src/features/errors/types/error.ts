export type ErrorTag = {
  id: string;
  name: string;
};

export type ErrorApiResponse = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  error_tags: {
    tags: ErrorTag[];
  }[];
};

export type ErrorListItem = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  tags: ErrorTag[];
};
