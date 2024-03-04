import { render, screen } from "@testing-library/react";
import TodaySales from "../../../dashboard/todaySales/TodaySales";

describe("TodaySales", () => {
  it("renders the component with correct title and date", () => {
    render(<TodaySales />);

    expect(screen.getByText("Today's Sales")).toBeInTheDocument();
    expect(screen.getByText("Sales Summary")).toBeInTheDocument();
    expect(screen.getByText("Tue, 05-09-2023")).toBeInTheDocument();
  });

  it("renders the SaleCardList component", () => {
    render(<TodaySales />);
    expect(screen.getByTestId("sale-card-list")).toBeInTheDocument();
  });

  it("renders the CalendarDaysIcon", () => {
    render(<TodaySales />);
    expect(screen.getByTestId("calendar-days-icon")).toBeInTheDocument();
  });
});
