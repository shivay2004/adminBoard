// src/components/BarChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Bar } from "react-chartjs-2";

export default function BarChartCard({ data, loading }) {
  if (loading || !data) {
    return (
      <Paper elevation={3} sx={{ borderRadius: 4, p: 2 }}>
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((ds) => ({
      label: ds.label,
      data: ds.data,
      backgroundColor: "#344767",
      borderRadius: 4,
      barThickness: 28,
    })),
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
          display: true,
          borderDash: [2, 6],
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
          background: "linear-gradient(195deg, #42424a , #191919)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontSize: 28,
        }}
      >
        <BarChartIcon fontSize="large" />
      </Box>

      {/* Title beside icon */}
      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Bar chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box height={280}>
        <Bar data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
