// __tests__/Hello.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For custom matchers like toHaveTextContent
// import { describe, expect, test } from "@jest/globals";
import Hello from "../components/Hello";

describe("Hello World", () => {
  test("renders hello message", () => {
    render(<Hello />);
    const helloElement = screen.getByText(/Hello, World!/i);
    expect(helloElement).toBeInTheDocument();
  });
});
