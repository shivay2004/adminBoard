import { Box, Typography, Stack, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 2,
        px: 3,
        py: 2,
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: "14px",
        color: "text.secondary",
      }}
    >
      <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        © 2025, made with
        <FavoriteIcon fontSize="small" sx={{ color: "#7B809A" }} /> by{" "}
        <Typography component="span" fontWeight="bold" color="text.primary">
          Shivay Goyal
        </Typography>
        for a better web.
      </Typography>

      <Stack direction="row" spacing={3}>
        <Typography variant="body2" color="text.secondary">
          Shivay Goyal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About Us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Blog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          License
        </Typography>
      </Stack>
    </Box>
  );
}
