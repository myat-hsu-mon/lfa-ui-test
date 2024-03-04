import { render, screen } from "@testing-library/react";
import Profit from "../../dashboard/Profit";

describe("Profit", () => {
  it("renders the component with correct title", () => {
    render(<Profit />);
    expect(screen.getByText("Profit")).toBeInTheDocument();
  });

  it("renders the Line chart", () => {
    render(<Profit />);
    expect(screen.getByTestId("profit-chart")).toBeInTheDocument();
  });
});
