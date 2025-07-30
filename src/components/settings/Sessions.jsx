import {
  ArrowForward,
  DesktopWindowsRounded,
  PhoneIphone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  collapseClasses,
  colors,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const Sessions = ({ settingsRefs }) => {
  const p = useTheme().palette;

  const divider = (
    <Divider
      sx={{
        my: "1rem",
        mx: "5px",
        background: p.text2,
        border: "none",
        height: "1px",
        width: "100%",
      }}
    />
  );

  return (
    <Paper
      ref={settingsRefs.sessions}
      sx={{ bgcolor: p.bg2, borderRadius: "10px", p: "16px" }}
    >
      <Box sx={{ mb: "24px" }}>
        <Typography
          component={"h6"}
          sx={{
            color: p.text.primary,
            fontSize: "1.2rem",
            fontWeight: "bold",
            mb: "5px",
          }}
        >
          Sessions
        </Typography>
        <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
          This is a list of devices that have logged into your account. Remove
          those that you do not recognize.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <DesktopWindowsRounded sx={{ color: p.text.secondary }} />

          <Box>
            <Typography sx={{ color: p.text.secondary, fontSize: "rem" }}>
              Bucharest 68.133.163.201
            </Typography>
            <Typography
              sx={{
                color: p.text.secondary,
                display: "flex",
                alignItems: "center",
                fontSize: "0.7rem",
              }}
            >
              Your current session
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box
            sx={{
              bgcolor: "#bce1be",
              textAlign: "center",
              borderRadius: "5px",
              width: "60px",
              py: "3px",
            }}
          >
            {" "}
            <Typography
              sx={{
                color: "#339537",
                fontSize: "0.7rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              active
            </Typography>
          </Box>

          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            EU
          </Typography>

          <Box
            sx={{
              "&:hover .arrowIcon": { transform: "translateX(5px)" },
            }}
          >
            <Typography
              sx={{
                color: "#1A73E8",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              See more{" "}
              <ArrowForward
                className={"arrowIcon"}
                sx={{ fontSize: "0.9rem", transition: "transform linear 0.1s" }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>

      {divider}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <DesktopWindowsRounded sx={{ color: p.text.secondary }} />

          <Box>
            <Typography sx={{ color: p.text.secondary, fontSize: "rem" }}>
              Chrome on macOS
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            US
          </Typography>

          <Box
            sx={{
              "&:hover .arrowIcon": { transform: "translateX(5px)" },
            }}
          >
            <Typography
              sx={{
                color: "#1A73E8",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              See more{" "}
              <ArrowForward
                className={"arrowIcon"}
                sx={{ fontSize: "0.9rem", transition: "transform linear 0.1s" }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>

      {divider}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <PhoneIphone sx={{ color: p.text.secondary }} />

          <Box>
            <Typography sx={{ color: p.text.secondary, fontSize: "rem" }}>
              Safari on iPhone
            </Typography>
            <Typography>{"  "}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            US
          </Typography>

          <Box
            sx={{
              "&:hover .arrowIcon": { transform: "translateX(5px)" },
            }}
          >
            <Typography
              sx={{
                color: "#1A73E8",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              See more{" "}
              <ArrowForward
                className={"arrowIcon"}
                sx={{ fontSize: "0.9rem", transition: "transform linear 0.1s" }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Sessions;
