import { render, screen } from "@testing-library/react";
import ProductClass from "../../dashboard/ProductClass";

const labels = ["Electronics", "Clothes", "Beauty Care", "Books", "Toys"];
const data = {
  labels: labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgb(239 68 68)",
        "rgb(99 102 241)",
        "rgb(245 158 11)",
        "rgb(14 165 233)",
        "rgb(34 197 94)",
      ],
      borderRadius: 5,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "left",
      labels: {
        usePointStyle: true,
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  aspectRatio: 2.5,
};

describe("ProductClass", () => {
  it("renders the component with correct title", () => {
    render(<ProductClass data={data} options={options} />);
    expect(screen.getByText("Product Class")).toBeInTheDocument();
  });
  it("renders the Doughnut chart", () => {
    render(<ProductClass data={data} options={options} />);
    expect(screen.getByTestId("product-class-chart")).toBeInTheDocument();
  });
});
