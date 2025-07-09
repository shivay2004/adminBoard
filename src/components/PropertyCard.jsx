import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  useTheme,
  Skeleton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PropertyCard({
  image,
  title,
  location,
  price,
  loading = false,
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "visible",
        transition: "all 0.3s ease",
        boxShadow: 3,
        "&:hover .hover-img": {
          transform: "translateY(-40px)",
        },
      }}
    >
      {/* Image */}
      <Box
        className="hover-img"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          transition: "transform 0.3s ease",
          borderRadius: "12px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {loading ? (
          <Skeleton
            variant="rounded"
            sx={{ width: "90%", height: 180, borderRadius: 2 }}
          />
        ) : (
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "90%",
              height: "100%",
              top: -20,
              position: "relative",
              objectFit: "cover",
              borderRadius: "inherit",
              display: "block",
            }}
          />
        )}
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          mt: -7,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          zIndex: 1,
          position: "relative",
        }}
      >
        <IconButton sx={{ color: theme.palette.error.main }} disabled={loading}>
          <RefreshIcon />
        </IconButton>
        <IconButton
          sx={{ color: theme.palette.primary.main }}
          disabled={loading}
        >
          <EditIcon />
        </IconButton>
      </Box>

      {/* Content */}
      <CardContent sx={{ textAlign: "center", pt: 1 }}>
        {loading ? (
          <Skeleton
            variant="text"
            width="60%"
            sx={{ mx: "auto", height: 30 }}
          />
        ) : (
          <Typography
            variant="h6"
            fontWeight={500}
            sx={{ color: theme.palette.text.primary }}
          >
            {title}
          </Typography>
        )}

        {loading ? (
          <Skeleton
            variant="text"
            width="80%"
            sx={{ mx: "auto", mt: 1, mb: 2 }}
          />
        ) : (
          <Typography
            variant="body2"
            sx={{ mt: 1, mb: 2, color: theme.palette.text.secondary }}
          >
            The place is close to Metro Station and bus stop just 2 min by walk
            and near to "Naviglio" where you can enjoy the night life.
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            px: 1,
            color: theme.palette.text.secondary,
          }}
        >
          {loading ? (
            <Skeleton width={60} height={20} />
          ) : (
            <Typography fontWeight={400}>${price}/night</Typography>
          )}

          {loading ? (
            <Skeleton width={80} height={20} />
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOnIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
