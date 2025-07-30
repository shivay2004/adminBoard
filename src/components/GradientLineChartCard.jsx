import { Box, Typography, Skeleton, useTheme, Paper } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Line } from "react-chartjs-2";

export default function GradientLineChartCard({ data, loading }) {
  const theme = useTheme();

  if (loading || !data) {
    return (
      <Box
        sx={{
          borderRadius: 4,
          p: 2,
          height: 380,
          background: theme.palette.background.paper,
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </Box>
    );
  }

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((ds, i) => ({
      label: ds.label,
      data: ds.data,
      borderColor: ["#2979ff", "#42424a"][i % 2],
      backgroundColor: (context) => {
        const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(
          0,
          i === 0 ? "rgba(41,121,255,0.4)" : "rgba(66,66,66,0.3)"
        );
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        return gradient;
      },
      tension: 0,
      pointRadius: 0,
      fill: true,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme.palette.divider,
          borderDash: [4],
        },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        borderRadius: 4,
        p: 3,
        pt: 1,
        height: 380,
        position: "relative",
        background: theme.palette.background.paper,
      }}
    >
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
        <ShowChartIcon fontSize="large" />
      </Box>

      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Line chart with gradient
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      <Box sx={{ height: 280 }}>
        <Line data={chartData} options={options} />
      </Box>
    </Box>
  );
}
