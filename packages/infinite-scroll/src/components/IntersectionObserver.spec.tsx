import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { IntersectionObserverTest } from "./IntersectionObserverTest";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { handlers, mockData } from "../mocks/handler";
import { setupServer } from "msw/node";

describe("Lazy Load Test", () => {
  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("recipe 더미데이터를 성공적으로 불러와 화면에 표시한다.", async () => {
    await act(async () => {
      render(<IntersectionObserverTest />);
      screen.debug();
    });

    // 초기 상태 확인
    expect(screen.getByText("Lazy Load Test")).toBeInTheDocument();

    // 데이터 로드 후 텍스트 확인
    expect(screen.getByText(mockData.recipes[0].name)).toBeInTheDocument();
  });
});
