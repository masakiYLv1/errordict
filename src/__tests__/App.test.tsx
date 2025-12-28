import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App tests", () => {
  test("test", () => {
    render(<App />);
    expect(true).toBeTruthy();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
