import BarChart from "../common/Chart";

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = {
  labels: labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 65],
      backgroundColor: [
        "rgb(239 68 68)",
        "rgb(99 102 241)",
        "rgb(245 158 11)",
        "rgb(14 165 233)",
        "rgb(34 197 94)",
        "rgb(59 130 246)",
      ],
      borderRadius: 5,
      barThickness: 20,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 10,
        display: false,
      },
      beginAtZero: true,
      display: false,
    },
  },
};

export default function WeeklySales() {
  return (
    <div className="card">
      <h2 className="mb-2">Weekly Sales</h2>
      <div>
        <BarChart data={data} type="bar" options={options} />
      </div>
    </div>
  );
}
