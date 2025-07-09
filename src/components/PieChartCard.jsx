// src/components/PieChartCard.jsx
import { Paper, Box, Typography, Skeleton } from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartCard({ data, loading }) {
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
        label: data.datasets[0].label,
        data: data.datasets[0].data,
        backgroundColor: ["#1A73E8", "#D81B60", "#191919", "#495361"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // ❌ remove legend
      },
      tooltip: {
        backgroundColor: "#000",
        bodyColor: "#fff",
        titleColor: "#fff",
        padding: 8,
        boxPadding: 6,
        borderColor: "#fff",
        borderWidth: 1,
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
        <PieChartIcon fontSize="large" />
      </Box>

      {/* Title beside icon */}
      <Box ml={10} mb={1}>
        <Typography variant="h6" fontWeight="bold">
          Pie chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      {/* Bigger Chart Area */}
      <Box flexGrow={1}>
        <Pie data={chartData} options={options} />
      </Box>
    </Paper>
  );
}
