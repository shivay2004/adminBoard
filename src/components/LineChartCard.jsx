// src/components/LineChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Line } from "react-chartjs-2";

export default function LineChartCard({ data, loading }) {
  if (loading || !data) {
    return (
      <Paper elevation={3} sx={{ borderRadius: 4, p: 2 }}>
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((ds, i) => {
      const color = ["#2979ff", "#42424a", "#d81b60"][i % 3];
      return {
        label: ds.label,
        data: ds.data,
        borderColor: color,
        backgroundColor: "transparent",
        pointRadius: 4,
        pointBackgroundColor: color,
        pointBorderColor: color,
        pointHoverRadius: 6,
        tension: 0,
        fill: false,
      };
    }),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 4, p: 3, pt: 1, position: "relative", height: 380 }}
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
          background: "linear-gradient(195deg, #49a3f1,#1e88e5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontSize: 28,
        }}
      >
        <TrendingUpIcon fontSize="large" />
      </Box>

      {/* Title beside icon */}
      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Line chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box height={280}>
        <Line data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
