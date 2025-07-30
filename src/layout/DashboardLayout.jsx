import { useState } from "react";
import Sidebar, {
  SIDEBAR_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
} from "../components/SideBar";
import Header from "../components/Header";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
export default function DashboardLayout({ children }) {
  const [isManuallyCollapsed, setIsManuallyCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const collapsed = isManuallyCollapsed && !isHovered;
  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;
  const isAbove1200 = useMediaQuery("(min-width:1201px)");

  const handleSidebarToggle = () => setSidebarVisible((prev) => !prev);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", gap: 3 }}>
      {isAbove1200 ? (
        <Box sx={{ width: sidebarWidth, flexShrink: 0 }}>
          <Sidebar
            collapsed={collapsed}
            onHoverChange={setIsHovered}
            onManualToggle={() => setIsManuallyCollapsed((prev) => !prev)}
          />
        </Box>
      ) : (
        sidebarVisible && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,

              width: SIDEBAR_WIDTH,
              zIndex: 1300,
              boxShadow: 3,
            }}
          >
            <Sidebar
              collapsed={false}
              onHoverChange={() => {}}
              onManualToggle={handleSidebarToggle}
            />
          </Box>
        )
      )}

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          px: 3, // 24px horizontal padding
          pt: "104px", // header offset
          backgroundColor: (theme) => theme.palette.background.default,
          minHeight: "100vh",
          transition: "padding 0.3s ease",
          overflow: "visible",
        }}
      >
        <Header
          collapsed={collapsed}
          onToggleSidebar={
            isAbove1200
              ? () => setIsManuallyCollapsed((prev) => !prev)
              : handleSidebarToggle
          }
        />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
}
