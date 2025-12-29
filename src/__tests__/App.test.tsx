import { render, screen } from "@testing-library/react";
import { Provider } from "@/components/ui/provider";

import App from "../App";

describe("App tests", () => {
  test("test", () => {
    render(
      <Provider>
        <App />
      </Provider>
    );

    const button = screen.getByRole("button", { name: "Click me1" });
    expect(button).toHaveTextContent("Click me1");
  });
});
