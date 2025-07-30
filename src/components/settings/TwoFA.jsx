import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const TwoFA = ({ settingsRefs }) => {
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
      ref={settingsRefs.twofa}
      sx={{ bgcolor: p.bg2, borderRadius: "10px", p: "16px" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "24px",
        }}
      >
        <Typography
          component={"h6"}
          sx={{ color: p.text1, fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Two-factor authentication
        </Typography>

        <Box
          sx={{
            bgcolor: "#bce1be",
            textAlign: "center",
            borderRadius: "5px",
            width: "70px",
            py: "3px",
          }}
        >
          <Typography
            sx={{
              color: "#339537",
              fontSize: "0.7rem",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            enabled
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: p.text.secondary, fontWeight: 200 }}>
          Security keys
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            sx={{
              color: p.text.secondary,
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            No security keys
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "0.8rem",
              borderRadius: "10px",
              color: p.text.primary,
              borderColor: p.text.primary,
            }}
          >
            edit
          </Button>
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
        <Typography sx={{ color: p.text.secondary }}>SMS number</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            sx={{
              color: p.text.secondary,
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            +3012374423
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "0.8rem",
              borderRadius: "10px",
              color: p.text.primary,
              borderColor: p.text.primary,
            }}
          >
            add
          </Button>
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
        <Typography sx={{ color: p.text.secondary }}>
          Authenticator app
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            sx={{
              color: p.text.secondary,
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            Not Configured
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "0.8rem",
              borderRadius: "10px",
              color: p.text.primary,
              borderColor: p.text.primary,
            }}
          >
            set up
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default TwoFA;
