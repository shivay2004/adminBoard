// src/components/BubbleChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { Bubble } from "react-chartjs-2";

export default function BubbleChartCard({ data, loading }) {
  if (loading || !data) {
    return (
      <Paper elevation={3} sx={{ borderRadius: 4, p: 2 }}>
        <Skeleton variant="rectangular" height={300} />
      </Paper>
    );
  }

  const chartData = {
    datasets: data.datasets.map((ds, i) => ({
      label: ds.label,
      data: ds.data,
      backgroundColor: i % 2 === 0 ? "#1e88e5" : "#344767",
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
        grid: {
          drawBorder: false,
          borderDash: [4, 4],
          color: "#cfd8dc",
        },
        beginAtZero: true,
      },
      y: {
        grid: {
          drawBorder: false,
          borderDash: [4, 4],
          color: "#cfd8dc",
        },
        beginAtZero: true,
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
        <BubbleChartIcon fontSize="large" />
      </Box>

      {/* Title */}
      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Bubble chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box height={280}>
        <Bubble data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
