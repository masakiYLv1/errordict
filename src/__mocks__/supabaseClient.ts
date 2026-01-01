const mockListData = [
  {
    id: "e1",
    title: "これはテストです。",
    created_at: "2026/01/01",
    updated_at: "2026/01/01",
    error_tags: [
      {
        tags: [
          {
            id: "t1",
            name: "タグ1",
          },
        ],
      },
    ],
  },
];

export const supabase = {
  from: jest.fn(),
};

supabase.from.mockImplementation(() => ({
  select: jest.fn().mockResolvedValue({
    data: mockListData,
    error: null,
  }),
}));
