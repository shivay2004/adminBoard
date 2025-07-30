// src/components/TopSellingProducts.jsx
import React from "react";
import { Box, Typography, Avatar, Skeleton, useTheme } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import img from "../img/blue-shoe.d71240678a32ce1184bb.jpeg";
export default function TopSellingProducts({ data = [], loading = false }) {
  const theme = useTheme();

  const displayed = loading ? Array.from({ length: 5 }) : data;

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        mt: 2,
        mr: 2.4,
        bgcolor: theme.palette.background.paper,
        boxShadow: 3,
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontWeight={700} mb={3}>
        Top Selling Products
      </Typography>

      {/* Header Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 1.5,
          mb: 1,
          color: theme.palette.text.secondary,
          fontSize: 13,
        }}
      >
        <Box width="40%">Product</Box>
        <Box width="20%" textAlign="right">
          Value
        </Box>
        <Box width="20%" textAlign="right">
          Ads Spent
        </Box>
        <Box width="20%" textAlign="right">
          Refunds
        </Box>
      </Box>

      {/* Product Rows */}
      {displayed.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
            borderTop: i > 0 ? "1px solid #eee" : "none",
          }}
        >
          {/* Product Info */}
          <Box sx={{ display: "flex", alignItems: "center", width: "40%" }}>
            {loading ? (
              <Skeleton variant="circular" width={42} height={42} />
            ) : (
              <Avatar src={img} sx={{ width: 42, height: 42, mr: 2 }} />
            )}
            <Box>
              {loading ? (
                <>
                  <Skeleton width={120} height={18} />
                  <Skeleton width={60} height={14} />
                </>
              ) : (
                <>
                  <Typography fontWeight={600} fontSize={14}>
                    {item.product}
                  </Typography>
                  <Typography variant="caption">
                    <Box component="span" fontWeight={700} color="success.main">
                      {item.orders.toLocaleString()}
                    </Box>{" "}
                    orders
                  </Typography>
                </>
              )}
            </Box>
          </Box>

          {/* Value */}
          <Box width="20%" textAlign="right">
            {loading ? (
              <Skeleton width={60} height={18} />
            ) : (
              <Typography fontWeight={500} color="text.secondary">
                ${item.value.toLocaleString()}
              </Typography>
            )}
          </Box>

          {/* Ads Spent */}
          <Box width="20%" textAlign="right">
            {loading ? (
              <Skeleton width={50} height={18} />
            ) : (
              <Typography color="text.secondary">
                ${item.ads_spent.toLocaleString()}
              </Typography>
            )}
          </Box>

          {/* Refunds */}
          <Box
            width="20%"
            textAlign="right"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 0.5,
            }}
          >
            {loading ? (
              <Skeleton width={30} height={18} />
            ) : (
              <>
                <Typography fontWeight={500} color="text.secondary">
                  {item.refunds}
                </Typography>
                {item.refunds < 30 ? (
                  <ArrowDropUpIcon
                    sx={{ color: "success.main", fontSize: "1.2rem" }}
                  />
                ) : (
                  <ArrowDropDownIcon
                    sx={{ color: "error.main", fontSize: "1.2rem" }}
                  />
                )}
              </>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
