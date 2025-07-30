import { Box, Button, Paper, Typography, useTheme } from "@mui/material";

const DeleteAcc = ({ settingsRefs }) => {
  const p = useTheme().palette;

  return (
    <Paper
      ref={settingsRefs.delete}
      sx={{
        bgcolor: p.bg2,
        borderRadius: "10px",
        p: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ mb: "24px" }}>
        <Typography
          component={"h6"}
          sx={{
            color: p.text1,
            fontSize: "1.2rem",
            fontWeight: "bold",
            mb: "5px",
          }}
        >
          Delete Account
        </Typography>
        <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
          Once you delete your account, there is no going back. Please be
          certain.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          color={p.text.secondary}
          variant="outlined"
          sx={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            py: "10px",
            borderRadius: "10px",
          }}
        >
          deactivate
        </Button>
        <Button
          color="error"
          variant="contained"
          sx={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            py: "10px",
            borderRadius: "10px",
            "&:hover": {
              bgcolor: p.error.main,
              boxShadow: `0 0px 20px -5px ${p.error.main}`,
            },
          }}
        >
          delete account
        </Button>
      </Box>
    </Paper>
  );
};

export default DeleteAcc;
