import {
  Box,
  Button,
  Divider,
  Paper,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import slackImg from "../../img/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg";
import spotifyImg from "../../img/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg";
import atlassianImg from "../../img/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg";
import asanaImg from "../../img/logo-asana.d758f410d82760a61d1eabcb03409de6.svg";
const Accounts = ({ settingsRefs }) => {
  const p = useTheme().palette;
  const [showMore, setShowMore] = useState(true);

  const divider = (
    <Divider
      sx={{
        my: "1rem",
        mx: "5px",
        background: p.text2,
        border: "none",
        height: "1px",
        width: "100%",
      }}
    />
  );

  return (
    <Paper
      ref={settingsRefs.accounts}
      sx={{ bgcolor: p.bg2, borderRadius: "10px", p: "16px" }}
    >
      <Box sx={{ mb: "24px" }}>
        <Typography
          component={"h6"}
          sx={{
            color: p.text1,
            fontSize: "1.2rem",
            fontWeight: "bold",
            mb: "5px",
          }}
        >
          Accounts
        </Typography>
        <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
          Here you can setup and manage your integration settings.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box
            component={"img"}
            src={slackImg}
            sx={{ width: "50px", height: "50px" }}
          />

          <Box>
            <Typography
              sx={{ color: p.text1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Slack
            </Typography>
            <Box onClick={() => setShowMore((prev) => !prev)}>
              <Typography
                sx={{
                  color: p.text.secondary,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                Show less {showMore ? <ExpandLess /> : <ExpandMore />}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            Enabled
          </Typography>
          <Switch
            defaultChecked
            color="secondary"
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
      </Box>

      {showMore && (
        <Box
          sx={{
            ml: "66px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: p.text.secondary,
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
              }}
            >
              You haven't added your Slack yet or you aren't authorized. Please
              add our Slack Bot to your account by clicking on here. When you've
              added the bot, send your verification code that you have received.
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: p.background.default,
              p: "10px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                pl: "10px",
                color: p.text.secondary,
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              Verifiction Code
            </Typography>

            <Box sx={{ width: "100px" }}>
              <TextField
                size="small"
                color="info"
                value={117913}
                slotProps={{ InputProps: { readOnly: true } }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              bgcolor: p.background.default,
              p: "10px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: p.text.secondary,
                pl: "10px",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              Connected Account
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                sx={{ color: p.text1, fontSize: "0.8rem", fontWeight: "bold" }}
              >
                hello@creative-tim.com
              </Typography>
              <Button
                size="small"
                sx={{
                  px: 2,
                  borderRadius: "7px",
                  background: "linear-gradient(195deg, #42424a , #191919)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                delete
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {divider}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box
            component={"img"}
            src={spotifyImg}
            sx={{ width: "50px", height: "50px" }}
          />

          <Box>
            <Typography
              sx={{ color: p.text1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Spotify
            </Typography>
            <Typography
              sx={{
                color: p.text.secondary,
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
              }}
            >
              Music
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            Enabled
          </Typography>
          <Switch
            defaultChecked
            color="secondary"
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
      </Box>

      {divider}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box
            component={"img"}
            src={atlassianImg}
            sx={{ width: "50px", height: "50px" }}
          />

          <Box>
            <Typography
              sx={{ color: p.text1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Atlassian
            </Typography>
            <Typography
              sx={{
                color: p.text.secondary,
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
              }}
            >
              Payment vendor
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            Enabled
          </Typography>
          <Switch
            defaultChecked
            color="secondary"
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
      </Box>

      {divider}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box
            component={"img"}
            src={asanaImg}
            sx={{ width: "50px", height: "50px" }}
          />

          <Box>
            <Typography
              sx={{ color: p.text1, fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Asana
            </Typography>
            <Typography
              sx={{
                color: p.text.secondary,
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
              }}
            >
              Organize your team
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
            Disabled
          </Typography>
          <Switch
            color="secondary"
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
      </Box>
    </Paper>
  );
};

export default Accounts;
