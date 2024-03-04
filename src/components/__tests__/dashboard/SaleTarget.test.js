import { render, screen } from "@testing-library/react";
import SaleTarget from "../../dashboard/SaleTarget";

describe("SaleTarget", () => {
  it("renders the component with correct title", () => {
    render(<SaleTarget />);
    expect(screen.getByText("Sales Target")).toBeInTheDocument();
  });

  it("renders the doughnut chart with correct data", () => {
    render(<SaleTarget />);
    expect(screen.getByTestId("sales-target-chart")).toBeInTheDocument();
  });
});
