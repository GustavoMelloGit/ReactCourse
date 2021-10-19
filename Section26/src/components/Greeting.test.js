import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  test("verify greetings test", () => {
    render(<Greeting />);
    const greetings = screen.getByText("Greetings");
    expect(greetings).toBeInTheDocument();
  });

  test("tests if MyFriend is on screen", () => {
    render(<Greeting />);
    const text = screen.getByText("My friend", { exact: false });
    expect(text).toBeInTheDocument();
  });

  test("tests if text changed on button click", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const text = screen.getByText("Stranger", { exact: false });

    expect(text).toBeInTheDocument();
  });

  test("testes if my friend text is removed when button clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const textMyFriend = screen.queryByText("My friend", { exact: false });
    expect(textMyFriend).not.toBeInTheDocument();
  });
});
