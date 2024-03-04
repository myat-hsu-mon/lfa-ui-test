import { render, screen } from "@testing-library/react";
import RecentOrders from "../../dashboard/RecentOrders";

describe("RecentOrders", () => {
  it("renders the component with correct title", () => {
    render(<RecentOrders />);

    expect(screen.getByText("Recent Orders")).toBeInTheDocument();
  });

  it("renders the table with correct headers", () => {
    render(<RecentOrders />);

    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("City")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
  });

  it("renders the table with correct data", () => {
    render(<RecentOrders />);

    expect(screen.getByText("Kuppuraj")).toBeInTheDocument();
    expect(screen.getByText("Coimbatore")).toBeInTheDocument();
    expect(screen.getByText("$18,999")).toBeInTheDocument();
  });
});
