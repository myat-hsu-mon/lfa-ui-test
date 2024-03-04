import {
  ArrowTrendingUpIcon,
  PlayIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

const options = {
  plugins: {
    legend: {
      display: false,
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
};

const Sales = () => {
  const [gradientStroke, setGradientStroke] = useState<CanvasGradient>();
  useEffect(() => {
    const ctx = document.getElementById("sales-chart") as HTMLCanvasElement;
    const context = ctx.getContext("2d");

    if (context) {
      let gradientStroke2 = context.createLinearGradient(0, 0, 0, 70);
      gradientStroke2.addColorStop(0, "#3B82F6");
      gradientStroke2.addColorStop(1, "#fff");
      setGradientStroke(gradientStroke2);
    }
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [35, 42, 38, 45, 47],
        fill: true,
        borderColor: "rgb(59 130 246)",
        tension: 0.1,
        backgroundColor: gradientStroke,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="card w-48">
      <div className="flex items-center justify-between">
        <h2>Sales</h2>
        <div className="rounded-full bg-green/20 p-2 font-bold">
          <ArrowTrendingUpIcon
            className="h-4 w-4 shrink-0 font-bold text-green-dark"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="-mt-2 ">
        <Line
          data={data}
          options={options}
          id="sales-chart"
          data-testid="sales-chart"
        />
      </div>
      <div>
        <h1 className="-mt-1 text-2xl">446</h1>
        <h2 className="font-normal text-gray-600">Number of sales</h2>
        <div className="flex items-center space-x-3 pl-2">
          <div className="rounded-full bg-blue-500/10 p-1">
            <XCircleIcon
              className="h-4 w-4 shrink-0 text-blue-500"
              aria-hidden="true"
            />
          </div>
          <span className="text-lg text-gray-500">36%</span>
          <PlayIcon
            className="h-4 w-4 shrink-0 -rotate-90 text-green"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
