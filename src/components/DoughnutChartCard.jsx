
import { Box, Typography, Skeleton, useTheme, Paper } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export default function DoughnutChartCard({ data, loading }) {
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
    datasets: [
      {
        ...data.datasets[0],
        backgroundColor: [
          "#1A73E8", 
          "#D81B60", 
          "#191919", 
          "#F44336", 
          "#42424a", 
        ],
        borderColor: "#fff",
        borderWidth: 2,
        cutout: "40%", 
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/*Icon */}
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

      {/* Title */}
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
    </Box>
  );
}
