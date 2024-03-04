import { render, screen } from "@testing-library/react";
import CustomerSatisfaction from "../../dashboard/CustomerSatisfaction";

describe("CustomerSatisfaction", () => {
  it("renders the component with correct title", () => {
    render(<CustomerSatisfaction />);
    expect(screen.getByText("Customer Satisfaction")).toBeInTheDocument();
  });

  it("renders the Line chart", () => {
    render(<CustomerSatisfaction />);
    expect(
      screen.getByTestId("customer-satisfaction-chart"),
    ).toBeInTheDocument();
  });
});
