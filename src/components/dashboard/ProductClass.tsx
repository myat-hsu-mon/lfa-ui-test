import { Doughnut } from "react-chartjs-2";

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
      position: "left" as "left",
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

export default function ProductClass() {
  return (
    <div className="card flex-1 ">
      <h2>Product Class</h2>
      <Doughnut
        data={data}
        options={options}
        data-testid="product-class-chart"
      />
    </div>
  );
}
