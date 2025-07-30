import React, { useLayoutEffect, useRef, useState } from "react";
import { Box, Tab, Tabs, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";

const tabItems = [
  { label: "App", icon: <HomeIcon fontSize="small" /> },
  { label: "Message", icon: <EmailIcon fontSize="small" /> },
  { label: "Settings", icon: <SettingsIcon fontSize="small" /> },
];

const ProfileTabs = ({ value, onChange }) => {
  const theme = useTheme();
  const tabsRef = useRef([]);
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const currentTab = tabsRef.current[value];
    const containerLeft =
      containerRef.current?.getBoundingClientRect().left || 0;
    if (currentTab) {
      const { left, width } = currentTab.getBoundingClientRect();
      setIndicatorStyle({
        left: left - containerLeft + 2,
        width: width - 4,
      });
    }
  }, [value]);

  return (
    <Box
      ref={containerRef}
      sx={{
        padding: "3px",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        borderRadius: "12px",
        position: "relative",
        height: 40,
      }}
    >
      <motion.div
        animate={indicatorStyle}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        style={{
          position: "absolute",
          height: 35,
          borderRadius: 12,
          background:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : "#ffffff",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          zIndex: 0,
        }}
      />

      <Tabs
        value={value}
        onChange={onChange}
        aria-label="profile tabs"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          position: "relative",
          zIndex: 1,
          "& .MuiTabs-flexContainer": {
            gap: 1.5,
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            minHeight: "44px",
            top: "-5px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            color: theme.palette.text.primary,
            "&.Mui-selected": {
              color: theme.palette.text.primary,
            },
          },
        }}
      >
        {tabItems.map((tab, index) => (
          <Tab
            key={tab.label}
            icon={tab.icon}
            iconPosition="start"
            label={tab.label}
            ref={(el) => (tabsRef.current[index] = el)}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ProfileTabs;
