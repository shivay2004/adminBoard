// src/components/DoughnutChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip); // No Legend

export default function DoughnutChartCard({ data, loading }) {
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
        ...data.datasets[0],
        backgroundColor: [
          "#1A73E8", // blue
          "#D81B60", // pink
          "#191919", // black
          "#F44336", // red
          "#42424a", // dark gray
        ],
        borderColor: "#fff",
        borderWidth: 2,
        cutout: "40%", // Doughnut center
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // ✅ No legend
      },
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
        padding: 8,
      },
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        p: 3,
        pt: 1,
        height: 380,
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
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
          background: "linear-gradient(195deg, #66bb6a, #43a047)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <DonutLargeIcon fontSize="large" />
      </Box>

      {/* Title beside icon */}
      <Box ml={10} mb={1}>
        <Typography variant="h6" fontWeight="bold">
          Doughnut chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box flexGrow={1}>
        <Doughnut data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
