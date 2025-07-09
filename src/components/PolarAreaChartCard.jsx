import { Paper, Box, Typography, Skeleton } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

export default function PolarAreaChartCard({ data, loading }) {
  if (loading || !data) {
    return (
      <Paper elevation={3} sx={{ borderRadius: 4, p: 2 }}>
        <Skeleton variant="rectangular" height={400} />
      </Paper>
    );
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.datasets[0].label,
        data: data.datasets[0].data,
        backgroundColor: [
          "#1A73E8",
          "#D81B60",
          "#191919",
          "#F44336",
          "#42424a",
          "#4CAF50",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
        padding: 8,
      },
    },
    scales: {
      r: {
        grid: {
          color: "#d3d3d3",
          circular: true,
        },
        angleLines: {
          color: "#d3d3d3",
        },
        ticks: {
          backdropColor: "transparent",
          color: "#999",
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
        height: 460, // Increased height
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
        <ExploreIcon fontSize="large" />
      </Box>

      {/* Title beside icon */}
      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Polar chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Chart */}
      <Box height={360}>
        <PolarArea data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
