import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  BatteryChargingFull,
  VolumeDown,
  Wifi,
  AccountBalance,
  Payment,
} from "@mui/icons-material";
import mastercardImg from "../../img/mastercard.webp";

const WidgetsRow2 = () => {
  const p = useTheme().palette;

  const divider = (
    <Divider
      sx={{
        my: 2,
        mx: 0,
        background: p.divider,
        border: "none",
        height: "1px",
        width: "100%",
        opacity: 0.4,
      }}
    />
  );

  return (
    <Grid container spacing={3}>
      <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
        <Stack spacing={3}>
          <Box
            component={Paper}
            sx={{
              background: p.background.paper,
              borderRadius: "10px",
              p: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: "65px",
                  height: "65px",
                  background: "linear-gradient(190deg, #49a3f1 , #1A73E8)",
                  borderRadius: "10px",
                }}
              >
                <BatteryChargingFull
                  sx={{ color: "#fff", fontSize: "1.5rem" }}
                />
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    color: p.text.secondary,
                    fontSize: "0.9rem",
                    textAlign: "end",
                  }}
                >
                  Battery Health
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: p.text.primary,
                    textAlign: "end",
                    fontWeight: "bold",
                  }}
                >
                  99%
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            component={Paper}
            sx={{
              background: p.background.paper,
              borderRadius: "10px",
              p: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: "65px",
                  height: "65px",
                  background: "linear-gradient(190deg, #49a3f1 , #1A73E8)",
                  borderRadius: "10px",
                }}
              >
                <VolumeDown sx={{ color: "#fff", fontSize: "1.5rem" }} />
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    color: p.text.secondary,
                    fontSize: "0.9rem",
                    textAlign: "end",
                  }}
                >
                  Music Volume
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: p.text.primary,
                    textAlign: "end",
                    fontWeight: "bold",
                  }}
                >
                  15/100
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Grid>

      <Grid item size={{ xs: 12, sm: 3, md: 2.5 }}>
        <Box
          component={Paper}
          sx={{
            display: "flex",
            background: p.background.paper,
            borderRadius: "10px",
            p: "16px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: "65px",
                  height: "65px",
                  background: "linear-gradient(190deg, #49a3f1 , #1A73E8)",
                  borderRadius: "10px",
                }}
              >
                <AccountBalance sx={{ color: "#fff", fontSize: "1.5rem" }} />
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  color: p.text.primary,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Salary
              </Typography>
              <Typography
                sx={{
                  color: p.text.secondary,
                  fontSize: "0.7rem",
                  textAlign: "end",
                }}
              >
                Belong Interactive
              </Typography>
            </Box>

            {divider}

            <Typography
              variant="h6"
              sx={{ color: p.text.primary, fontWeight: "bold" }}
            >
              +$2000
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, sm: 3, md: 2.5 }}>
        <Box
          component={Paper}
          sx={{
            display: "flex",
            background: p.background.paper,
            borderRadius: "10px",
            p: "16px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: "65px",
                  height: "65px",
                  background: "linear-gradient(190deg, #49a3f1 , #1A73E8)",
                  borderRadius: "10px",
                }}
              >
                <Payment sx={{ color: "#fff", fontSize: "1.5rem" }} />
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  color: p.text.primary,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Paypal
              </Typography>
              <Typography
                sx={{
                  color: p.text.secondary,
                  fontSize: "0.7rem",
                  textAlign: "end",
                }}
              >
                Freelance Payment
              </Typography>
            </Box>

            {divider}

            <Typography
              variant="h6"
              sx={{ color: p.text.primary, fontWeight: "bold" }}
            >
              $455.00
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
        <Box
          component={Paper}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "linear-gradient(190deg, #42424a , #191919)",
            borderRadius: "10px",
            p: "24px",
            height: "100%",
          }}
        >
          <Wifi sx={{ color: "#fff" }} />

          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", wordSpacing: "10px", color: "#fff" }}
          >
            4562 1122 4594 7852
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box>
                <Typography sx={{ color: "#cccdd1", fontSize: "0.9rem" }}>
                  Card Holder
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Jack Peterson
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#cccdd1", fontSize: "0.9rem" }}>
                  Expires
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  11/22
                </Typography>
              </Box>
            </Box>

            <Box sx={{ maxWidth: "40px", flex: 1 }}>
              <Box
                component="img"
                src={mastercardImg}
                sx={{ width: "100%", overflow: "hidden" }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WidgetsRow2;
