import { useContext, useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Typography,
  Breadcrumbs,
  TextField,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  AccountCircle,
  Settings,
  Notifications,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { ColorModeContext } from "../context/ThemeContext";
import { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from "./SideBar";
import NotificationMenu from "./NotificationMenu";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Header({ onToggleSidebar, collapsed }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery("(max-width:1200px)");
  const [scrolled, setScrolled] = useState(false);
  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box
      elevation={scrolled ? 4 : 0}
      sx={{
        position: "fixed",
        top: scrolled ? 8 : 24,
        left: isMobile ? 23 : sidebarWidth + 16 + 36,
        right: isMobile ? 43 : 40,
        height: 64,
        zIndex: theme.zIndex.drawer + 1,
        borderRadius: 3,
        backgroundColor: scrolled
          ? theme.palette.background.paper
          : theme.palette.background.default,
        opacity: scrolled ? 0.92 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(6px)" : "none",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Breadcrumb  */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Breadcrumbs separator="/" sx={{ fontSize: "0.875rem" }}>
            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.text.secondary,
                }}
              >
                <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
              </Box>
            </RouterLink>

            {/* path */}
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              return isLast ? (
                <Typography
                  key={to}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  {capitalize(value)}
                </Typography>
              ) : (
                <RouterLink to={to} key={to} style={{ textDecoration: "none" }}>
                  <Box
                    component="span"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {capitalize(value)}
                  </Box>
                </RouterLink>
              );
            })}
          </Breadcrumbs>

          <IconButton onClick={onToggleSidebar} size="small">
            <MenuIcon sx={{ color: theme.palette.text.secondary }} />
          </IconButton>
        </Box>

        {/* Title */}
        {pathnames.length > 0 && (
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={15}
            sx={{ color: theme.palette.text.primary }}
          >
            {capitalize(pathnames[pathnames.length - 1])}
          </Typography>
        )}
      </Box>

      {/* RIGHT */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* dark mode */}
        <IconButton
          onClick={colorMode.toggleColorMode}
          size="small"
          sx={{ color: theme.palette.text.secondary }}
        >
          {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
        </IconButton>

        {!isMobile && (
          <TextField
            label="Search here"
            variant="outlined"
            size="small"
            sx={{ width: 200 }}
          />
        )}

        <IconButton size="small">
          <AccountCircle sx={{ color: theme.palette.text.secondary }} />
        </IconButton>
        <IconButton size="small">
          <Settings sx={{ color: theme.palette.text.secondary }} />
        </IconButton>

        <NotificationMenu />
      </Box>
    </Box>
  );
}
