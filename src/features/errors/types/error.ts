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

export type ErrorDetailApiResponse = {
  id: string;
  title: string;
  message: string;
  situation: string | null;
  environment: string | null;
  cause: string;
  solution: string;
  reference_links: string[] | null;
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
