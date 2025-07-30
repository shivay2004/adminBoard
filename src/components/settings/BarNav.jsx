import React, { useLayoutEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const navItems = [
  { label: "Messages" },
  { label: "Social" },
  { label: "Notifications" },
  { label: "Backup" },
];

const BarNav = () => {
  const theme = useTheme();
  const p = theme.palette;
  const [currIndex, setCurrIndex] = useState(0);
  const btnRefs = useRef([]);
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const currentBtn = btnRefs.current[currIndex];
    const containerLeft =
      containerRef.current?.getBoundingClientRect().left || 0;
    if (currentBtn) {
      const { left, width } = currentBtn.getBoundingClientRect();
      setIndicatorStyle({
        left: left - containerLeft + 2,
        width: width - 4,
      });
    }
  }, [currIndex]);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        ref={containerRef}
        sx={{
          position: "relative",
          bgcolor:
            theme.palette.mode === "light" ? "#F8F9FA" : p.background.paper,
          p: "5px",
          borderRadius: "12px",
          minHeight: 44,
        }}
      >
        <motion.div
          animate={indicatorStyle}
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
          style={{
            position: "absolute",
            height: 35,
            borderRadius: 8,

            background:
              theme.palette.mode === "light" ? "#fff" : p.background.default,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            zIndex: 0,
          }}
        />

        <Stack
          direction="row"
          spacing={0}
          sx={{ position: "relative", zIndex: 1 }}
        >
          {navItems.map((item, idx) => (
            <Button
              key={item.label}
              ref={(el) => (btnRefs.current[idx] = el)}
              onClick={() => setCurrIndex(idx)}
              disableElevation={currIndex !== idx}
              variant="contained"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "8px",
                minWidth: 100,
                boxShadow: "none",
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  color: p.text.primary,
                  fontWeight: 400,
                  fontSize: "0.95rem",
                }}
              >
                {item.label}
              </Typography>
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default BarNav;
