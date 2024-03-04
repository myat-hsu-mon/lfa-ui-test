import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

const lastMonthData = [25, 36, 28, 35, 37, 30];
const currentMonthData = [35, 46, 38, 45, 47, 40];

const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    x: {
      display: false,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 10,
      },
    },
  },
  aspectRatio: 2.3,
};

export default function CustomerSatisfaction() {
  const [lastMonthGradient, setLastMonthGradient] = useState<CanvasGradient>();
  const [thisMonthGradient, setThisMonthGradient] = useState<CanvasGradient>();

  useEffect(() => {
    const ctx = document.getElementById(
      "customer-satisfaction-chart",
    ) as HTMLCanvasElement;
    const context = ctx.getContext("2d");

    if (context) {
      let gradientStroke1 = context.createLinearGradient(0, 0, 0, 100);
      gradientStroke1.addColorStop(0, "#3B82F6");
      gradientStroke1.addColorStop(1, "#fff");
      setLastMonthGradient(gradientStroke1);

      let gradientStroke2 = context.createLinearGradient(0, 0, 0, 70);
      gradientStroke2.addColorStop(0, "#48D75E");
      gradientStroke2.addColorStop(1, "#fff");
      setThisMonthGradient(gradientStroke2);
    }
  }, []);

  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "Last Month",
        data: lastMonthData,
        fill: true,
        borderColor: "#3B82F6",
        tension: 0.1,
        backgroundColor: lastMonthGradient,
        pointRadius: 0,
      },
      {
        label: "This Month",
        data: currentMonthData,
        fill: true,
        borderColor: "#48D75E",
        tension: 0.1,
        backgroundColor: thisMonthGradient,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="card w-84 border">
      <h2 className="mb-3">Customer Satisfaction</h2>
      <div>
        <Line
          data-testid="customer-satisfaction-chart"
          data={data}
          options={options}
          id="customer-satisfaction-chart"
        />
      </div>
    </div>
  );
}
