import { render, screen } from "@testing-library/react";
import App from "./App";

render(<App />);

test("renders learn react link", () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
