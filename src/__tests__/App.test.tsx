import { render, screen } from "@testing-library/react";
import { Provider } from "@/components/ui/provider";

import App from "../App";
import { BrowserRouter } from "react-router-dom";

jest.mock("@/lib/supabaseClient");

describe("App tests", () => {
  test("test", async () => {
    render(
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const input = await screen.findByPlaceholderText("検索ボックス");
    expect(input).toBeInTheDocument();
  });
});
