import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
  Filler
} from "chart.js";
import "chartjs-adapter-date-fns";

const API_URL = import.meta.env.VITE_API_Coin;

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, TimeScale, Filler);

const Coinchart = ({ coinId }) => {
  const [chartData, setChartData] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const chartinfo = async () => {
      const res = await fetch(`${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`);
      const data = await res.json();

      const prices = data.prices.map((price) => ({ x: price[0], y: price[1] }));

      setChartData({
        datasets: [
          {
            label: "Price (USD)",
            data: prices,
            fill: true,
            borderColor: "#007bff",
            backgroundColor: "rgba(0,123,255,0.1)",
            pointRadius: 0,
            tension: 0.3
          }
        ]
      });

      setLoading(false);
    };

    chartinfo();
  }, [coinId]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false }
    },
    scales: {
      x: {
        type: "time",
        time: { unit: "day", tooltipFormat: "MMM dd", displayFormats: { day: "MMM dd" } },
        ticks: { autoSkip: true, maxTicksLimit: 7 }
      },
      y: {
        ticks: { callback: (value) => `$${value.toLocaleString()}` }
      }
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {Loading && <p>Loading chart...</p>}
      {!Loading && chartData && <Line data={chartData} options={options} />}
    </div>
  );
};

export default Coinchart;
