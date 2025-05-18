import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IntersectionObserverTest } from "./IntersectionObserverTest";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

describe("Lazy Load Test", () => {
  it("Lazy Load Test", () => {
    render(<IntersectionObserverTest />);
    expect(screen.getByText("Lazy Load Test")).toBeInTheDocument();
  });
});
