import x from "../img/profile.jpg";
import React, { useState } from "react";
import { Divider } from "@mui/material";
import logoImg from "../img/image.png";
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
  Image,
} from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";

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
  const isDark = theme.palette.mode === "dark";

  const handleMenuToggle = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const divider = (
    <Divider
      sx={{
        height: "1px",
        border: "none",
        background: `radial-gradient(circle, ${theme.palette.text.secondary} 5%, ${theme.palette.background.paper} 100%)`,
        opacity: 0.4,
        width: "100%",
      }}
    />
  );

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
          background: theme.palette.background.paper,
          height: "calc(100% - 32px)",
          mt: 2,
          ml: 2,
        },
      }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Logo and Name */}
      <Link
        to={"/dashboard/analytics"}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            mb: 2,
            width: "100%",
            justifyContent: collapsed ? "center" : "flex-start",
            px: collapsed ? 0 : 1.5,
            pt: 3,
            pl: collapsed ? 0 : 3,
          }}
        >
          <Box
            component="img"
            src={logoImg}
            sx={{
              width: 32,
              height: 32,
              filter: !isDark ? "invert(1)" : "invert(0)",
            }}
          />
          {!collapsed && (
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: 0.2,
                pl: 0.5,
              }}
            >
              Otis Admin PRO
            </Typography>
          )}
        </Box>
      </Link>
      {divider}

      <List>
        {/* Profile */}
        <ListItemButton onClick={() => handleMenuToggle("profile")}>
          <ListItemIcon>
            <Avatar src={x} />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Brooklyn Alice" />}
          {isExpanded && (openMenus.profile ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={openMenus.profile} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              pl: collapsed ? 5.5 : 2,
              display: collapsed ? "flex" : "block",
              flexDirection: "column",
              alignItems: collapsed ? "center" : "flex-start",
            }}
          >
            <ListItemButton
              component={NavLink}
              to="/profile"
              sx={(nav) => ({
                borderRadius: 2,
                mb: 1,
                backgroundColor: nav.isActive
                  ? theme.palette.action.selected
                  : "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              })}
            >
              <ListItemIcon>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                >
                  M
                </Typography>
              </ListItemIcon>
              {isExpanded && (
                <ListItemText
                  primary="My Profile"
                  sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
                />
              )}
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/settings"
              sx={(nav) => ({
                borderRadius: 2,
                mb: 1,
                backgroundColor: nav.isActive
                  ? theme.palette.action.selected
                  : "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              })}
            >
              <ListItemIcon>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                >
                  S
                </Typography>
              </ListItemIcon>
              {isExpanded && (
                <ListItemText
                  primary="Settings"
                  sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>
        {divider}

        {/* Dashboards */}
        <ListItemButton
          onClick={() => handleMenuToggle("dashboards")}
          sx={{
            borderRadius: 2,
            mb: 1,
            backgroundColor:
              openMenus.dashboards && isExpanded
                ? theme.palette.action.selected
                : "transparent",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
            justifyContent: collapsed ? "center" : "flex-start",
            px: collapsed ? 0 : 2,
            alignItems: "center",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: collapsed ? "100%" : "auto",
              pl: collapsed ? 0 : 1,
            }}
          >
            <Dashboard
              sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
            />
          </ListItemIcon>
          {isExpanded && (
            <ListItemText
              primary="Dashboards"
              sx={{ color: theme.palette.text.primary, fontWeight: 400, ml: 1 }}
            />
          )}
          {isExpanded &&
            (openMenus.dashboards ? (
              <ExpandLess sx={{ color: theme.palette.text.primary }} />
            ) : (
              <ExpandMore sx={{ color: theme.palette.text.primary }} />
            ))}
        </ListItemButton>
        <Collapse in={openMenus.dashboards} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              pl: collapsed ? 5.5 : 2,
              display: collapsed ? "flex" : "block",
              flexDirection: "column",
              alignItems: collapsed ? "center" : "flex-start",
            }}
          >
            <ListItemButton
              component={NavLink}
              to="/analytics"
              sx={(nav) => ({
                borderRadius: 2,
                mb: 1,
                backgroundColor: nav.isActive
                  ? theme.palette.action.selected
                  : "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              })}
            >
              <ListItemIcon>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                >
                  A
                </Typography>
              </ListItemIcon>
              {isExpanded && (
                <ListItemText
                  primary="Analytics"
                  sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
                />
              )}
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/sales"
              sx={(nav) => ({
                borderRadius: 2,
                mb: 1,
                backgroundColor: nav.isActive
                  ? theme.palette.primary.main
                  : "transparent",
                color: nav.isActive
                  ? theme.palette.common.white
                  : theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: nav.isActive
                    ? theme.palette.primary.dark
                    : theme.palette.action.hover,
                  color: nav.isActive
                    ? theme.palette.common.white
                    : theme.palette.text.primary,
                },
              })}
            >
              <ListItemIcon>
                <Typography
                  sx={{
                    color: (nav) =>
                      nav.isActive
                        ? theme.palette.common.white
                        : theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                >
                  S
                </Typography>
              </ListItemIcon>
              {isExpanded && (
                <ListItemText
                  primary="Sales"
                  sx={{
                    color: (nav) =>
                      nav.isActive
                        ? theme.palette.common.white
                        : theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        {/* Pages */}
        <Box sx={{ pl: 2, pt: 2, pb: 0.5 }}>
          <Typography
            variant="body2"
            fontWeight={600}
            color={theme.palette.text.primary}
            sx={{ textAlign: "left" }}
          >
            Pages
          </Typography>
        </Box>
        <ListItemButton
          onClick={() => handleMenuToggle("pages")}
          sx={{
            borderRadius: 2,
            mb: 1,
            backgroundColor:
              openMenus.pages && isExpanded
                ? theme.palette.action.selected
                : "transparent",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
            justifyContent: collapsed ? "center" : "flex-start",
            px: collapsed ? 0 : 2,
            alignItems: "center",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: collapsed ? "100%" : "auto",
              pl: collapsed ? 0 : 1,
            }}
          >
            <Image
              sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
            />
          </ListItemIcon>
          {isExpanded && (
            <ListItemText
              primary="Pages"
              sx={{ color: theme.palette.text.primary, fontWeight: 400, ml: 1 }}
            />
          )}
          {isExpanded &&
            (openMenus.pages ? (
              <ExpandLess sx={{ color: theme.palette.text.primary }} />
            ) : (
              <ExpandMore sx={{ color: theme.palette.text.primary }} />
            ))}
        </ListItemButton>
        <Collapse in={openMenus.pages} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              pl: collapsed ? 5.5 : 2,
              display: collapsed ? "flex" : "block",
              flexDirection: "column",
              alignItems: collapsed ? "center" : "flex-start",
            }}
          >
            <ListItemButton
              component={NavLink}
              to="/charts"
              sx={(nav) => ({
                borderRadius: 2,
                mb: 1,
                backgroundColor: nav.isActive
                  ? theme.palette.action.selected
                  : "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              })}
            >
              <ListItemIcon>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                >
                  C
                </Typography>
              </ListItemIcon>
              {isExpanded && (
                <ListItemText
                  primary="Charts"
                  sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
                />
              )}
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/widgets"
              sx={(nav) => ({
                borderRadius: 2,
                mb: 1,
                backgroundColor: nav.isActive
                  ? theme.palette.action.selected
                  : "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              })}
            >
              <ListItemIcon>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 400,
                  }}
                >
                  W
                </Typography>
              </ListItemIcon>
              {isExpanded && (
                <ListItemText
                  primary="Widgets"
                  sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>
        {divider}
      </List>
    </Drawer>
  );
}
