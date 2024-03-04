import { screen, render } from "@testing-library/react";
import SaleCard from "../../../dashboard/todaySales/SaleCard";

describe("SaleCard", () => {
  const sale = {
    title: "Example Sale",
    amount: 100,
    changeAmountFromYesterday: 10,
    icon: () => <svg />,
    bgDarkColor: "bg-dark",
    bgLightColor: "bg-light",
  };

  it("renders sale card with correct title, amount, and change amount", () => {
    render(<SaleCard sale={sale} />);
    expect(screen.getByText("Example Sale")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("+10% from yesterday")).toBeInTheDocument();
  });

  it("renders sale card with correct background colors", () => {
    render(<SaleCard sale={sale} />);
    expect(screen.getByTestId("sale-card")).toHaveClass("bg-light");
  });
});
