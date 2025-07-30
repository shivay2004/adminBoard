import { Box, Typography, Skeleton, useTheme, Paper } from "@mui/material";
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
  const theme = useTheme();

  if (loading || !data) {
    return (
      <Box
        sx={{
          borderRadius: 4,
          p: 2,
          height: 460,
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
          color: theme.palette.divider,
          circular: true,
        },
        angleLines: {
          color: theme.palette.divider,
        },
        ticks: {
          backdropColor: "transparent",
          color: theme.palette.text.secondary,
        },
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
        height: 460,
        position: "relative",
        background: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
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

      <Box ml={10} mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Polar chart
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {data.title}
        </Typography>
      </Box>

      <Box height={360}>
        <PolarArea data={chartData} options={options} />
      </Box>
    </Box>
  );
}
