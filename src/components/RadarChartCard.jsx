// src/components/RadarChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import RadarIcon from "@mui/icons-material/Radar";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RadarChartCard({ data, loading }) {
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
      backgroundColor: "rgba(30, 136, 229, 0.2)",
      borderColor: "rgba(30, 136, 229, 0.6)",
      pointBackgroundColor: "rgba(30, 136, 229, 0.6)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(30, 136, 229, 0.6)",
      fill: true,
      tension: 0.1,
      borderWidth: 1.5,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      r: {
        grid: {
          circular: true,
          color: "#d1d9e6",
          borderDash: [4, 4],
        },
        angleLines: {
          color: "#d1d9e6",
          borderDash: [4, 4],
        },
        ticks: {
          backdropColor: "transparent",
          color: "#888",
          stepSize: 5,
        },
        pointLabels: {
          color: "#344767",
          font: {
            size: 13,
            weight: "500",
          },
        },
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
        height: 460,
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
          background: "linear-gradient(195deg, #ffa726, #fb8c00)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <RadarIcon fontSize="large" />
      </Box>

      {/* Title beside icon */}
      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Radar chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box height={360}>
        <Radar data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
