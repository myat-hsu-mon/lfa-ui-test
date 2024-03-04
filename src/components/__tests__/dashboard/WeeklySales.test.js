import { render, screen } from "@testing-library/react";
import WeeklySales from "../../dashboard/WeeklySales";

describe("WeeklySales", () => {
  it("renders the component with correct title", () => {
    render(<WeeklySales />);

    expect(screen.getByText("Weekly Sales")).toBeInTheDocument();
  });

  it("renders the bar chart with correct data", () => {
    render(<WeeklySales />);

    expect(screen.getByText("Mon")).toBeInTheDocument();
    expect(screen.getByText("Tue")).toBeInTheDocument();
    expect(screen.getByText("Wed")).toBeInTheDocument();
    expect(screen.getByText("Thu")).toBeInTheDocument();
    expect(screen.getByText("Fri")).toBeInTheDocument();
    expect(screen.getByText("Sat")).toBeInTheDocument();
    expect(screen.getByText("65")).toBeInTheDocument();
    expect(screen.getByText("59")).toBeInTheDocument();
    expect(screen.getByText("80")).toBeInTheDocument();
    expect(screen.getByText("81")).toBeInTheDocument();
    expect(screen.getByText("56")).toBeInTheDocument();
    expect(screen.getByText("65")).toBeInTheDocument();
  });
});
