import { render, screen } from "@testing-library/react";
import SaleCardList from "../../../dashboard/todaySales/SaleCardList";

describe("SaleCardList", () => {
  it("renders sale cards with correct data", () => {
    render(<SaleCardList />);

    expect(screen.getByText("Total Sales")).toBeInTheDocument();
    expect(screen.getByText("₹ 37,446")).toBeInTheDocument();
    expect(screen.getByText("Total Orders")).toBeInTheDocument();
    expect(screen.getByText("365")).toBeInTheDocument();
    expect(screen.getByText("New Customers")).toBeInTheDocument();
    expect(screen.getByText("36")).toBeInTheDocument();
    expect(screen.getByText("Total Earnings")).toBeInTheDocument();
    expect(screen.getByText("₹ 16,285")).toBeInTheDocument();
  });
});
