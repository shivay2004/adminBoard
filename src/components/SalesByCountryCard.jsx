import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Avatar,
  useTheme,
  Skeleton,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import us from "../img/download.png";
import de from "../img/download.png";
import gb from "../img/download.png";
import br from "../img/download.png";
import WorldMapImage from "../img/download.png";

const flags = {
  "United States": us,
  Germany: de,
  "Great Britain": gb,
  Brasil: br,
};

export default function SalesByCountryCard({
  data = [],
  loading = false,
  numCountries = 4, // <-- Added prop with default value
}) {
  const theme = useTheme();

  // Only show the specified number of countries
  const displayedData = loading
    ? Array.from({ length: numCountries })
    : data.slice(0, numCountries);

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: 3,
        position: "relative",
        overflow: "visible",
        display: "flex",
        gap: 3,
        alignItems: "stretch",
        flexWrap: "wrap",
        mt: 5,
        mr: 2.4,
      }}
    >
      {/* Left: Country Stats */}
      <Box sx={{ flex: 1, minWidth: 360 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          {/* Floating Icon */}
          <Box
            sx={{
              position: "absolute",
              top: -15,
              left: 16,
              width: 64,
              height: 64,
              borderRadius: 2,
              background: "linear-gradient(195deg, #49a3f1,#1e88e5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              fontSize: 28,
            }}
          >
            {loading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <LanguageIcon />
            )}
          </Box>

          {/* Title */}
          <Box sx={{ pl: 8, top: -15, position: "relative" }}>
            {loading ? (
              <Skeleton width={160} height={28} />
            ) : (
              <Typography variant="h6" fontWeight={700}>
                Sales by Country
              </Typography>
            )}
          </Box>
        </Box>

        {displayedData.map((item, idx) => (
          <Box key={idx}>
            {idx > 0 && <Divider sx={{ my: 2 }} />}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Flag */}
              {loading ? (
                <Skeleton variant="circular" width={24} height={24} />
              ) : (
                <Avatar
                  src={flags[item.country]}
                  alt={item.country}
                  sx={{ width: 24, height: 24 }}
                />
              )}

              {/* Stats */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {[110, 80, 110, 80].map((width, i) => (
                  <Box key={i} sx={{ width }}>
                    {loading ? (
                      <>
                        <Skeleton width={50} height={14} />
                        <Skeleton width={width - 10} height={20} />
                      </>
                    ) : (
                      <>
                        <Typography variant="caption" color="text.secondary">
                          {["Country:", "Sales:", "Value:", "Bounce:"][i]}
                        </Typography>
                        <Typography variant="body2">
                          {
                            [
                              item.country,
                              item.sales,
                              `$${Number(item.sales * 92.36).toLocaleString()}`,
                              item.bounce,
                            ][i]
                          }
                        </Typography>
                      </>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right: World Map */}
      <Box
        sx={{
          flex: 1,
          minWidth: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <Skeleton variant="rectangular" width={400} height={240} />
        ) : (
          <img
            src={WorldMapImage}
            alt="World Map"
            style={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </Box>
    </Paper>
  );
}
