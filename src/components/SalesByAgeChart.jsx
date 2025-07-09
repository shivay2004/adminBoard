import { Box, Paper, Skeleton, Typography, useTheme } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function SalesByAgeChart({ data, loading = false }) {
  const theme = useTheme();
  const p = theme.palette;

  const chartColor = "#233D68";

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        data: data?.data || [],
        axis: "y",
        backgroundColor: chartColor,
        borderColor: chartColor,
        barPercentage: 0.9,
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: p.text.secondary },
      },
      y: {
        grid: {
          color: p.text.disabled,
          drawTicks: false,
        },
        ticks: { color: p.text.secondary },
        border: { dash: [5, 5] },
      },
    },
    layout: {
      padding: { top: 40 },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Paper
      sx={{
        bgcolor: p.background.paper,
        borderRadius: 3,
        p: 3,
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Sales by Age
      </Typography>

      <Box
        sx={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        ) : (
          <Bar data={chartData} options={chartOptions} />
        )}
      </Box>
    </Paper>
  );
}
