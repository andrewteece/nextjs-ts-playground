import Counter from "@/app/(play)/Counter";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("Counter", () => {
  it("increments and resets", () => {
    render(<Counter />);
    const inc = screen.getByText("+1");
    fireEvent.click(inc);
    fireEvent.click(inc);
    screen.getByText("Count: 2");
    fireEvent.click(screen.getByText("Reset"));
    screen.getByText("Count: 0");
  });
});
