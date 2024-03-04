import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Dashboard", () => {
  it("renders all sub-components correctly", () => {
    render(<Dashboard />);

    expect(screen.getByText("Today's Sales")).toBeInTheDocument();
    expect(screen.getByText("Weekly Sales")).toBeInTheDocument();
    expect(screen.getByText("Sales")).toBeInTheDocument();
    expect(screen.getByText("Profit")).toBeInTheDocument();
    expect(screen.getByText("Product Class")).toBeInTheDocument();
    expect(screen.getByText("Customer Satisfaction")).toBeInTheDocument();
    expect(screen.getByText("Recent Orders")).toBeInTheDocument();
    expect(screen.getByText("Sales Target")).toBeInTheDocument();
  });
});
