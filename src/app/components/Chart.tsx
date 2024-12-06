import { useEffect, useState, useRef } from "react";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Typography } from "@material-tailwind/react";
import Select from "react-select";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  const [data, setData] = useState(null);
  const [selectedMonths, setSelectedMonths] = useState([{ value: "All", label: "All" }]);
  const chartRef = useRef(null); // Ref for accessing the chart instance

  useEffect(() => {
    fetch("/task-data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <p>Loading chart...</p>;
  }

  const labels = data.activity.monthly.map((item) => item.month.toUpperCase());
  const values = data.activity.monthly.map((item) => item.value);

  // Handle filtering logic
  const isAllSelected =
    selectedMonths.length === 1 && selectedMonths[0].value === "All";
  const filteredLabels = isAllSelected
    ? labels
    : selectedMonths.map((item) => item.value);
  const filteredValues = filteredLabels.map(
    (label) => values[labels.indexOf(label)]
  );

  const chartData = {
    labels: filteredLabels,
    datasets: [
      {
        label: "Monthly Activity",
        data: filteredValues,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return "rgba(75, 192, 192, 0.6)";

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(33, 150, 243, 1)");
          gradient.addColorStop(1, "rgba(33, 150, 243, 0.1)");
          return gradient;
        },
        borderColor: "rgba(33, 150, 243, 1)",
        borderWidth: 1,
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: "rgba(100, 100, 100, 1)",
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: true,
          color: "rgba(100, 100, 100, 1)",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  // Format labels for Select component, including "All"
  const selectOptions = [
    { value: "All", label: "All" },
    ...labels.map((label) => ({ value: label, label })),
  ];

  return (
    <Card
      className="p-6"
      placeholder={null}
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}>
      <div className="flex justify-between "> 
      <Typography
        className="mb-4 text-center"
        placeholder={null}
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
        variant="paragraph">
        Activity
      </Typography>
      <Select
        className="w-48 mb-6"
        isMulti
        options={selectOptions}
        placeholder="Months"
        value={selectedMonths}
        onChange={(selected) => {
          if (selected.some((item) => item.value === "All")) {
            setSelectedMonths([{ value: "all", label: "All" }]);
          } else {
            setSelectedMonths(selected);
          }
        }}
      />
      </div> 
      <hr/>
      <div style={{ width: "100%", margin: "auto" }}>
        <Bar ref={chartRef} data={chartData} options={options} />
      </div>
    </Card>
  );
};

export default Chart;
