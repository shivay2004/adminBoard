import x from "../img/profile.jpg";
import React, { useState } from "react";
import { Divider } from "@mui/material";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Dashboard,
  Widgets,
  Home,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

// widths for sidebar
export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_COLLAPSED_WIDTH = 72;

export default function SideBar({ collapsed, onHoverChange }) {
  const theme = useTheme();
  const [openMenus, setOpenMenus] = useState({
    profile: false,
    dashboards: false,
    pages: false,
  });

  const isExpanded = !collapsed;

  const handleMenuToggle = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        elevation: 3,
        sx: {
          width: isExpanded ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
          transition: "width 0.3s",
          overflowX: "hidden",
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper,
          height: "calc(100% - 32px)",
          mt: 2,
          ml: 2,
        },
      }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Logo and Name */}
      <Box
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Home fontSize="large" />
        {isExpanded && (
          <Typography variant="h6" fontWeight={600}>
            Otis Admin PRO
          </Typography>
        )}
        <Divider
          variant="fullWidth"
          sx={{
            height: "1px",
            background: "radial-gradient(circle, #000 5%, #fff 100%)",
            width: "100%",
            border: "none",
          }}
        />
      </Box>

      <List>
        {/* Profile */}
        <ListItemButton onClick={() => handleMenuToggle("profile")}>
          <ListItemIcon>
            <Avatar src={x} />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Brooklyn Alice" />}
          {isExpanded && (openMenus.profile ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse
          in={openMenus.profile && isExpanded}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton component={NavLink} to="/profile">
              <ListItemText primary="My Profile" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/settings">
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Dashboards */}
        <ListItemButton onClick={() => handleMenuToggle("dashboards")}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Dashboards" />}
          {isExpanded &&
            (openMenus.dashboards ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse
          in={openMenus.dashboards && isExpanded}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton component={NavLink} to="/sales">
              <ListItemText primary="Sales" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/analytics">
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Pages */}
        <Box sx={{ pl: 2, pt: 2, pb: 0.5 }}>
          <Typography
            variant="body2"
            fontWeight={600}
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            Pages
          </Typography>
        </Box>
        <ListItemButton onClick={() => handleMenuToggle("pages")}>
          <ListItemIcon>
            <Widgets />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Pages" />}
          {isExpanded && (openMenus.pages ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse
          in={openMenus.pages && isExpanded}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton component={NavLink} to="/charts">
              <ListItemText primary="Charts" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/widgets">
              <ListItemText primary="Widgets" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
