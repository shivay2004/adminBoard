import {
  DateRange,
  NotificationsActive,
  Savings,
  Task,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
  LinearProgress,
} from "@mui/material";
import { Line } from "react-chartjs-2";

const WidgetsRow1 = () => {
  const theme = useTheme();
  const p = {
    bg1: theme.palette.background.paper,
    bg3: theme.palette.background.default,
    text1: theme.palette.text.primary,
    text4: theme.palette.text.secondary,
    text3: theme.palette.divider || theme.palette.text.secondary,
  };

  return (
    <Grid container spacing={3}>
      <Grid item size={{ xs: 12, md: 4 }}>
        <Box
          component={Paper}
          sx={{ background: p.bg1, borderRadius: "10px", p: "16px" }}
        >
          <Typography
            variant="h6"
            sx={{ color: p.text1, fontSize: "1rem", fontWeight: "bold" }}
          >
            Upcoming events
          </Typography>
          <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
            Joined
          </Typography>

          <Stack spacing={3} sx={{ mt: "16px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(190deg, #42424a , #191919)",
                  borderRadius: "10px",
                }}
              >
                <Savings sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: p.text1,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  Cyber Week
                </Typography>
                <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                  27 March 2020, at 12:30 PM
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(190deg, #42424a , #191919)",
                  borderRadius: "10px",
                }}
              >
                <NotificationsActive
                  sx={{ color: "#fff", fontSize: "1.2rem" }}
                />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: p.text1,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  Meeting with Marry
                </Typography>
                <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                  24 March 2020, at 10:00 PM
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(190deg, #42424a , #191919)",
                  borderRadius: "10px",
                }}
              >
                <Task sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: p.text1,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  Tasks planification
                </Typography>
                <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                  24 March 2020, at 12:30 AM
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, md: 8 }}>
        <Box
          component={Paper}
          sx={{
            background: p.bg1,
            borderRadius: "10px",
            p: "16px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(190deg, #49a3f1 , #1A73E8)",
                  borderRadius: "10px",
                }}
              >
                <DateRange sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Avatar>

              <Box>
                <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                  Tasks
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: p.text1,
                    fontWeight: "bold",
                  }}
                >
                  480
                </Typography>
              </Box>
            </Box>

            <Box sx={{ minWidth: 200 }}>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: p.text4,
                  textAlign: "left",
                  mb: 0.5,
                  fontWeight: "600",
                }}
              >
                60%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={60}
                sx={{
                  height: 6,
                  borderRadius: 5,
                  backgroundColor: p.bg3,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#1C95FF",
                  },
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minWidth: 0,
              height: "200px",
              py: "16px",
            }}
          >
            <Line
              data={{
                labels: [
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    data: [40, 45, 42, 41, 40, 43, 40, 42, 39],
                    borderColor: "#1C95FF",
                    pointRadius: 4,
                    pointBackgroundColor: "#1C95FF",
                    pointBorderColor: "#1C95FF",
                  },
                ],
              }}
              options={{
                plugins: { legend: { display: false } },
                scales: {
                  y: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      color: p.text3,
                    },
                  },
                  x: {
                    grid: {
                      color: p.text3,
                      borderDash: [5, 5],
                    },
                    ticks: {
                      color: p.text3,
                    },
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WidgetsRow1;
