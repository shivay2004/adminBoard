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

import us from "../img/download.png";
import de from "../img/download.png";
import gb from "../img/download.png";
import br from "../img/download.png";

const flags = {
  "United States": us,
  Germany: de,
  "Great Britain": gb,
  Brasil: br,
};

export default function SalesByCountryCompact({
  data = [],
  loading = false,
  numCountries = 4,
}) {
  const theme = useTheme();
  const displayedData = loading
    ? Array.from({ length: numCountries })
    : data.slice(0, numCountries);

  return (
    <Paper
      sx={{
        borderRadius: 2,
        p: 2.5,
        height: "100%",
        minHeight: 280,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#344767", fontSize: "1rem", mb: 1.5 }}
      >
        Sales by Country
      </Typography>

      {/* Country List */}
      {displayedData.map((item, idx) => (
        <Box key={idx}>
          {idx > 0 && <Divider sx={{ my: 1.5 }} />}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
              {["Country:", "Sales:", "Bounce:"].map((label, i) => (
                <Box key={i} sx={{ width: i === 0 ? 110 : 80 }}>
                  {loading ? (
                    <>
                      <Skeleton width={50} height={14} />
                      <Skeleton width={70} height={20} />
                    </>
                  ) : (
                    <>
                      <Typography variant="caption" color="text.secondary">
                        {label}
                      </Typography>
                      <Typography variant="body2">
                        {[item.country, item.sales, item.bounce][i]}
                      </Typography>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
}
