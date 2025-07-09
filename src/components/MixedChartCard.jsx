// src/components/MixedChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Tooltip
);

export default function MixedChartCard({ data, loading }) {
  if (loading || !data) {
    return (
      <Paper elevation={3} sx={{ borderRadius: 4, p: 2 }}>
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        type: "line",
        label: "Line",
        data: data.datasets[0].data,
        borderColor: "#1e88e5",
        backgroundColor: "#1e88e5",
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Bar",
        data: data.datasets[1].data,
        backgroundColor: "#344767",
        borderRadius: 4,
        barThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          borderDash: [4, 4],
          color: "#cfd8dc",
        },
      },
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 4, p: 3, pt: 1, height: 380, position: "relative" }}
    >
      {/* Floating Icon */}
      <Box
        sx={{
          position: "absolute",
          top: -15,
          left: 16,
          width: 64,
          height: 64,
          borderRadius: 2,
          background: "linear-gradient(195deg, #ec407a, #d81b60)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <InsightsIcon fontSize="large" />
      </Box>

      {/* Title */}
      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Mixed chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box height={280}>
        <Chart type="bar" data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
