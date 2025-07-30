import { LightbulbRounded, TurnRight } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Line } from "react-chartjs-2";

const WidgetsRow3 = () => {
  const p = useTheme().palette;
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <Grid container spacing={3}>
      <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
        <Box
          component={Paper}
          sx={{
            background: p.background.paper,
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
              mb: "20px",
            }}
          >
            <Typography sx={{ color: p.text.secondary }}>Full Body</Typography>
            <Box
              sx={{
                bgcolor: "#aecef7", // leaving as-is per your original
                borderRadius: "5px",
                px: "10px",
                py: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "#095BC6",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                moderate
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: p.text.secondary }}>
            What matters is the people who are sparked by it. And the people who
            are liked.
          </Typography>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
        <Box
          component={Paper}
          sx={{
            background: lightsOn ? "#1F78E9" : p.background.paper,
            borderRadius: "10px",
            p: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
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
            <Typography sx={{ color: lightsOn ? "#fff" : p.text.secondary }}>
              {lightsOn ? "On" : "Off"}
            </Typography>
            <Switch
              checked={lightsOn}
              onChange={() => setLightsOn(!lightsOn)}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#fff",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#000",
                },
              }}
            />
          </Box>

          <LightbulbRounded sx={{ color: "#344767" }} />

          <Typography sx={{ color: lightsOn ? "#fff" : p.text.secondary }}>
            Lights
          </Typography>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, md: 3 }}>
        <Box
          component={Paper}
          sx={{ background: p.background.paper, borderRadius: "10px" }}
        >
          <Box sx={{ p: "16px" }}>
            <Typography
              sx={{
                color: p.text.secondary,
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Calories
            </Typography>
            <Typography
              sx={{
                color: p.text.primary,
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              97{" "}
              <Typography
                component={"span"}
                sx={{
                  color: p.success.main,
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                +5%
              </Typography>
            </Typography>
          </Box>

          <Box sx={{ width: "100%", height: "100px" }}>
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
                    data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
                    tension: 0.5,
                    borderColor: "#344767",
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                plugins: { legend: { display: false } },
                scales: {
                  x: { display: false, grid: { display: false } },
                  y: { display: false, grid: { display: false } },
                },
                elements: { point: { radius: 0 } },
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </Box>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
        <Box
          component={Paper}
          sx={{
            background: p.background.paper,
            borderRadius: "10px",
            p: "16px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(190deg, #49a3f1 , #1A73E8)",
              borderRadius: "10px",
            }}
          >
            <TurnRight sx={{ color: "#fff", fontSize: "1.5rem" }} />
          </Avatar>

          <Box>
            <Typography
              variant="h6"
              component="span"
              sx={{ color: p.text.primary, fontWeight: "bold" }}
            >
              754{" "}
              <Typography
                component="span"
                sx={{
                  color: p.text.secondary,
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                m
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: p.text.secondary,
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              >
                New York City
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
        <Box
          component={Paper}
          sx={{
            background: p.background.paper,
            borderRadius: "10px",
            p: "16px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            Steps
          </Typography>

          <Typography
            variant={"h6"}
            component={"p"}
            sx={{
              color: p.text.primary,
              fontSize: "1.8rem",
              fontWeight: "bold",
              mt: "24px",
              mb: "16px",
            }}
          >
            11.4K
          </Typography>

          <Box
            sx={{
              bgcolor: "#bbe0ba",
              borderRadius: "5px",
              width: "50px",
              p: "5px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: p.success.dark,
                fontSize: "0.8rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              +4.3%
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WidgetsRow3;
