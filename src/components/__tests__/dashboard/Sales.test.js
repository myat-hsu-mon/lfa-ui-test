import React from "react";
import { render, screen } from "@testing-library/react";
import Sales from "../../dashboard/Sales";

describe("Sales", () => {
  it("renders the component with correct title", () => {
    render(<Sales />);
    expect(screen.getByText("Sales")).toBeInTheDocument();
  });

  it("renders the chart with correct data", () => {
    render(<Sales />);
    expect(screen.getByTestId("sales-chart")).toBeInTheDocument();
  });
});
