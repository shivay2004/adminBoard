import { Box, Typography, Skeleton } from "@mui/material";

export default function SalesStats({ title, value, change, period, loading }) {
  const isPositive = change?.startsWith("+");

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        p: 1.5,
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {loading ? (
        <>
          <Skeleton width="40%" />
          <Skeleton width="60%" height={36} />
          <Skeleton width="50%" />
        </>
      ) : (
        <>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography fontWeight={600} fontSize={13} color="text.secondary">
              {title}
            </Typography>
            <Typography variant="caption" fontSize={12} color="text.disabled">
              6 May - 7 May
            </Typography>
          </Box>

          <Typography
            variant="h6"
            fontWeight={700}
            color="text.primary"
            sx={{ lineHeight: 1.2 }}
          >
            {title === "Sales"
              ? `$${value.toLocaleString()}`
              : value.toLocaleString()}
          </Typography>

          <Typography variant="body2" fontSize={13}>
            <Box
              component="span"
              fontWeight={600}
              color={isPositive ? "success.main" : "error.main"}
            >
              {change}
            </Box>{" "}
            since {period}
          </Typography>
        </>
      )}
    </Box>
  );
}
