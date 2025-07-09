import { useState } from "react";
import Sidebar, {
  SIDEBAR_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
} from "../components/SideBar";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
export default function DashboardLayout({ children }) {
  const [isManuallyCollapsed, setIsManuallyCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const collapsed = isManuallyCollapsed && !isHovered;
  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;

  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          collapsed={collapsed}
          onHoverChange={setIsHovered}
          onManualToggle={() => setIsManuallyCollapsed((prev) => !prev)}
        />
      </Box>

      <Box
        component="main"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",

          ml: `${sidebarWidth + 20}px`,
          px: "3px",
          pt: "104px",
          backgroundColor: (theme) => theme.palette.background.default,
          minHeight: "100vh",
          transition: "margin-left 0.3s ease",
          overflow: "visible",
        }}
      >
        <Header
          collapsed={collapsed}
          onToggleSidebar={() => setIsManuallyCollapsed((prev) => !prev)}
        />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
}
