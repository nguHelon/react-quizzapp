import { render, screen } from "@testing-library/react";
import Quiz from "../components/Quiz.js";

test("Quiz components renders without crashing", () => {
    render(<Quiz />);

    const answerBtns = screen.getAllByRole("button");
    expect(answerBtns).toBeInTheDocument();
})