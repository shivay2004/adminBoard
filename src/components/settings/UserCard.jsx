import { Box, Paper, Switch, Typography, useTheme } from "@mui/material";
import profileImg from "../../img/profile.jpg";
import { useState } from "react";

const UserCard = ({ settingsRefs }) => {
  const p = useTheme().palette;
  const [visible, setVisible] = useState(true);

  const handleChange = (e) => {
    setVisible(e.target.checked);
  };

  return (
    <Paper
      ref={settingsRefs.profile}
      sx={{
        bgcolor: p.bg2,
        borderRadius: "10px",
        p: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <Box
          component={"img"}
          src={profileImg}
          sx={{ width: "80px", borderRadius: "50%" }}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ color: p.text.primary, fontWeight: "bold" }}
          >
            Richard Davis
          </Typography>
          <Typography
            sx={{
              color: p.text.secondary,
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            CEO / Co-Founder
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography
          sx={{
            color: p.text.primary,
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        >
          Switch to {visible && "in"}visible
        </Typography>
        <Switch
          color="info"
          checked={visible}
          onChange={handleChange}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#fff",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#3B3B47",
              opacity: 1,
              border: "1.5px solid #3B3B47",
            },
            "& .MuiSwitch-track": {
              backgroundColor: p.grey[300],
              opacity: 1,
            },
            "& .MuiSwitch-thumb": {
              boxShadow: "0 2px 6px 0 rgba(0,0,0,0.15)",
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default UserCard;
