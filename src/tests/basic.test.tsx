import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Basic Test", () => {
  it("should render a simple component", () => {
    const SimpleComponent = () => <div>Hello Vitest</div>;
    render(<SimpleComponent />);
    expect(screen.getByText("Hello Vitest")).toBeInTheDocument();
  });

  it("should pass a simple test", () => {
    expect(1 + 1).toBe(2);
  });
});
