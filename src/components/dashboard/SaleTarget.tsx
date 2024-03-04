import { Doughnut } from "react-chartjs-2";

const labels = ["Electronics", "Clothes"];
const data = {
  labels: labels,
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["rgb(39 222 151)", "rgba(39,222,151,0.2)"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  aspectRatio: 2,
};

export default function SaleTarget() {
  return (
    <div className="card w-48">
      <h2 className="text-center">Sales Target</h2>
      <div className="my-4">
        <Doughnut
          data-testid="sales-target-chart"
          data={data}
          options={options}
        />
      </div>
      <h2 className="mt-1 text-center">Archived</h2>
    </div>
  );
}
