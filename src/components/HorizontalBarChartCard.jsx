// src/components/HorizontalBarChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import { Bar } from "react-chartjs-2";

export default function HorizontalBarChartCard({ data, loading }) {
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
      barThickness: 24,
    })),
  };

  const options = {
    indexAxis: "y", // ✅ Horizontal bars
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          drawBorder: false,
          borderDash: [5, 5],
          color: "#cfd8dc",
        },
        ticks: {
          color: "#8898aa",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#8898aa",
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
        <AlignHorizontalLeftIcon fontSize="large" />
      </Box>

      {/* Title beside icon */}
      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Horizontal bar chart
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
