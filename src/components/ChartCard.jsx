import { Box, Typography, Skeleton, useTheme } from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

export default function ChartCard({
  title,
  subtitle,
  footer,
  data,
  dataKey,
  xKey,
  type = "line",
  color = "linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)",
  loading = false,
}) {
  const theme = useTheme();
  const labels = data?.map((item) => item[xKey]) || [];
  const values = data?.map((item) => item[dataKey]) || [];

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: 4,
        borderRadius: type === "bar" ? 20 : undefined,
        borderSkipped: false,
        barPercentage: 0.25,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        grid: {
          color: type === "bar" ? "#ffffff33" : false,
          borderDash: [5, 5],
        },
        ticks: {
          color: "#ffffffdd",
          font: { size: 12 },
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#ffffff33",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#ffffffdd",
          font: { size: 12 },
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 0,
        overflow: "visible",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 3,
        bgcolor: theme.palette.background.paper,
        boxShadow: 3,
      }}
    >
      {/* Floating Chart Section */}
      <Box
        sx={{
          position: "absolute",
          top: -30,
          width: "90%",
          height: 180,
          background: color,
          borderRadius: "16px",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          px: 2,
          pt: 1,
        }}
      >
        {loading ? (
          <Skeleton variant="rounded" width="100%" height="100%" />
        ) : type === "line" ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <Bar data={chartData} options={chartOptions} />
        )}
      </Box>

      {/* Card Content */}
      <Box sx={{ mt: 22, px: 3, alignSelf: "flex-start", width: "100%" }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {loading ? <Skeleton width="40%" /> : title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {loading ? <Skeleton width="60%" /> : subtitle}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {loading ? (
            <Skeleton width="40%" />
          ) : (
            <Box
              component="span"
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <i className="fa-regular fa-clock" style={{ marginRight: 4 }} />
              {footer}
            </Box>
          )}
        </Typography>
      </Box>
    </Box>
  );
}
