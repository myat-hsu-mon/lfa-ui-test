import { render, fireEvent, screen } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation", () => {
  it("renders correctly", () => {
    render(<Navigation sidebarOpen={true} setSidebarOpen={() => {}} />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Sale Analytics")).toBeInTheDocument();
    // Add more assertions for other rendered elements
  });

  it("closes sidebar when XMarkIcon button is clicked", () => {
    const setSidebarOpenMock = jest.fn();
    render(
      <Navigation sidebarOpen={true} setSidebarOpen={setSidebarOpenMock} />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Close sidebar/i }));
    expect(setSidebarOpenMock).toHaveBeenCalledWith(false);
  });
});
