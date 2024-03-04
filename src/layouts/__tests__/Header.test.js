import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders correctly", () => {
    const setSidebarOpen = jest.fn();
    render(<Header setSidebarOpen={setSidebarOpen} />);

    expect(screen.getByText("Hello Gokul")).toBeInTheDocument();
    expect(screen.getByText("Welcome back!")).toBeInTheDocument();
  });

  it("calls setSidebarOpen when sidebar button is clicked", () => {
    const setSidebarOpen = jest.fn();
    render(<Header setSidebarOpen={setSidebarOpen} />);

    fireEvent.click(screen.getByRole("button", { name: /Open sidebar/i }));

    expect(setSidebarOpen).toHaveBeenCalledTimes(1);
    expect(setSidebarOpen).toHaveBeenCalledWith(true);
  });
});
