import { Box, Typography, Paper, Skeleton } from "@mui/material";
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
  type,
  color,
  loading = false,
}) {
  const labels = data?.map((item) => item[xKey]) || [];
  const values = data?.map((item) => item[dataKey]) || [];

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: color,
        borderColor: "#fff",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#ffffff55" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "#ffffff55" },
      },
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: 0,
        overflow: "visible",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 3,
      }}
    >
      {/* Chart container */}
      <Box
        sx={{
          position: "absolute",
          top: -30,
          width: "90%",
          height: 180,
          background: color,
          borderRadius: 3,
          boxShadow: 3,
          px: 2,
          pt: 1,
        }}
      >
        {loading ? (
          <Skeleton variant="rectangular" height="100%" />
        ) : type === "line" ? (
          <Line data={chartData} options={options} />
        ) : (
          <Bar data={chartData} options={options} />
        )}
      </Box>

      {/* Text content */}
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
    </Paper>
  );
}
