import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const ChangePass = ({ settingsRefs }) => {
  const p = useTheme().palette;
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <Paper
      ref={settingsRefs.password}
      sx={{ bgcolor: p.bg2, borderRadius: "10px", p: "16px" }}
    >
      <Typography
        component={"h6"}
        sx={{
          color: p.text1,
          fontSize: "1.2rem",
          fontWeight: "bold",
          mb: "24px",
        }}
      >
        Change Password
      </Typography>

      <Grid container spacing={3}>
        <Grid item size={{ xs: 12 }}>
          <TextField
            type={showCurrent ? "text" : "password"}
            size="small"
            fullWidth
            color="info"
            label="Current Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowCurrent(!showCurrent)}
                    edge="end"
                  >
                    {showCurrent ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <TextField
            type={showNew ? "text" : "password"}
            size="small"
            fullWidth
            color="info"
            label="New Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowNew(!showNew)} edge="end">
                    {showNew ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <TextField
            type={showConfirm ? "text" : "password"}
            size="small"
            fullWidth
            color="info"
            label="Confirm New Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirm(!showConfirm)}
                    edge="end"
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            component={"h6"}
            sx={{
              color: p.text1,
              fontSize: "1.2rem",
              fontWeight: "bold",
              mt: "50px",
              mb: "10px",
            }}
          >
            Password requirements
          </Typography>
          <Typography sx={{ color: p.text.secondary, fontWeight: 400 }}>
            Please follow this guide for a strong password
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 2 }}>
            <ListItem
              sx={{
                display: "list-item",
                p: 0,
                "&::marker": { fontSize: "1.2rem", color: p.text4 },
              }}
            >
              <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
                One special character
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                p: 0,
                "&::marker": { fontSize: "1.2rem", color: p.text4 },
              }}
            >
              <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
                Min 6 characters
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                p: 0,
                "&::marker": { fontSize: "1.2rem", color: p.text4 },
              }}
            >
              <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
                One number (2 are recommended)
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                p: 0,
                "&::marker": { fontSize: "1.2rem", color: p.text4 },
              }}
            >
              <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
                Change it often
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "0.75rem",
              px: "20px",
              py: "6px",
              borderRadius: "12px",
              background: "linear-gradient(195deg, #42424a , #191919)",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              "&:hover": {
                background: "linear-gradient(195deg, #42424a , #191919)",
                opacity: 0.9,
                color: "#fff",
              },
            }}
          >
            Update Password
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ChangePass;
