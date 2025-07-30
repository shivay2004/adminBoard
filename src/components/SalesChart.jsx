import {
  Box,
  Typography,
  Skeleton,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function SalesChart({ channels, revenueData, loading }) {
  const theme = useTheme();
  const p = theme.palette;

  const pieColors = ["#1A73E8", "#D81B60", "#191919", "#495361"];

  const pieData = {
    labels: Object.keys(channels || {}).filter((key) => key !== "notes"),
    datasets: [
      {
        data: Object.entries(channels || {})
          .filter(([key, val]) => key !== "notes" && typeof val === "number")
          .map(([, val]) => val),
        backgroundColor: pieColors,
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: revenueData?.months || [],
    datasets: [
      {
        label: "Facebook Ads",
        data: revenueData?.facebookAds || [],
        borderColor: "#2979ff",
        backgroundColor: "#2979ff",
        tension: 0,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
      {
        label: "Google Ads",
        data: revenueData?.googleAds || [],
        borderColor: "#424242",
        backgroundColor: "#424242",
        tension: 0,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 5,
          boxHeight: 5,
          color: p.text.secondary,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: p.text.secondary },
        grid: { color: p.mode === "light" ? "#eee" : "#2a2d40" },
      },
      x: {
        ticks: { color: p.text.secondary },
        grid: { color: p.mode === "light" ? "#f5f5f5" : "#2a2d40" },
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "row" }, // Use md for desktop
        flexWrap: "wrap",
        gap: 2,
        mt: 1,
        alignItems: "stretch",
      }}
    >
      {/* Channels Pie Chart */}
      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          flex: { xs: "1 1 100%", md: "1 1 0" }, // 1 part on desktop
          minWidth: 250,
          maxWidth: { xs: "100%", md: "32.2%" },
          p: 2,
          bgcolor: p.background.paper,
          borderRadius: 2,
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            Channels
          </Typography>
          <IconButton size="small" sx={{ color: p.text.secondary }}>
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>

        {loading ? (
          <>
            <Skeleton
              variant="circular"
              width={180}
              height={180}
              sx={{ mx: "auto" }}
            />
            <Skeleton height={20} width="90%" sx={{ mt: 2 }} />
            <Skeleton height={20} width="80%" />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={32}
              sx={{ mt: 2, borderRadius: 1 }}
            />
          </>
        ) : (
          <>
            <Box height={220}>
              <Pie
                data={pieData}
                options={{
                  plugins: {
                    legend: {
                      position: "right",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        boxWidth: 5,
                        boxHeight: 5,
                        color: p.text.secondary,
                      },
                    },
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: "70%" }}
              >
                More than <strong>1,200,000</strong> sales are made using
                referral marketing, and <strong>700,000</strong> are from social
                media.
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: p.background.default,
                  color: p.text.primary,
                  textTransform: "none",
                  fontSize: "0.75rem",
                  borderRadius: 1,
                  px: 2,
                }}
              >
                Read More
              </Button>
            </Box>
          </>
        )}
      </Box>

      {/* Revenue Line Chart */}
      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          flex: { xs: "1 1 100%", md: "2 1 0" }, // 2 parts on desktop
          minWidth: 250,
          maxWidth: { xs: "100%", md: "65.5%" },
          p: 2,
          bgcolor: p.background.paper,
          borderRadius: 2,
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            Revenue
          </Typography>
          <IconButton size="small" sx={{ color: p.text.secondary }}>
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>

        {loading ? (
          <>
            <Skeleton width="40%" height={28} />
            <Skeleton
              variant="rectangular"
              height={240}
              sx={{ mt: 2, borderRadius: 2 }}
            />
          </>
        ) : (
          <Box height={280}>
            <Line data={lineData} options={lineOptions} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
