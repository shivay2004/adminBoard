import { Box, Typography, Skeleton } from "@mui/material";

export default function StatCard({
  icon,
  title,
  value,
  change,
  period,
  color,
  loading = false,
}) {
  const changeText =
    change > 0
      ? `+${change}% than last ${period}`
      : period === "update"
      ? "Just updated"
      : `${change}% than last ${period}`;

  const changeColor = change > 0 ? "#4caf50" : "text.secondary";

  return (
    <Box
      sx={{
        borderRadius: 3,
        px: 2,
        pt: 1.5,
        pb: 1.5,
        minWidth: 200,
        position: "relative",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "background.paper",
        boxShadow: 3,
      }}
    >
      {/* Icon badge */}
      <Box
        sx={{
          position: "absolute",
          top: -15,
          left: 16,
          width: 64,
          height: 64,
          borderRadius: 2,
          background: loading ? "#ccc" : color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontSize: 28,
        }}
      >
        {loading ? (
          <Skeleton variant="circular" width={32} height={32} />
        ) : (
          icon
        )}
      </Box>

      {/* Text block */}
      <Box sx={{ textAlign: "right", ml: "auto", mt: 1 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: "text.secondary" }}
        >
          {loading ? <Skeleton width={80} /> : title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "text.primary",
          }}
        >
          {loading ? <Skeleton width={60} /> : value.toLocaleString()}
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#e0e0e0",
          my: 1.5,
          mx: -2,
        }}
      />

      {/* Change info */}
      <Typography
        variant="caption"
        sx={{
          color: loading ? "text.secondary" : changeColor,
          fontWeight: 500,
        }}
      >
        {loading ? <Skeleton width="70%" /> : changeText}
      </Typography>
    </Box>
  );
}
