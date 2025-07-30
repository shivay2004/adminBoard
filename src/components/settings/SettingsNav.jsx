import {
  Box,
  Drawer,
  List,
  ListItemButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"

import {
  Badge,
  Campaign,
  Delete,
  Lock,
  Person,
  ReceiptLong,
  Security,
  SettingsApplications,
} from "@mui/icons-material"

const SettingsNav = ({ jumpTo }) => {
  const p = useTheme().palette

  return (
    <Paper
      sx={{
        position: "sticky",
        top: 105,
        bgcolor: p.bg2,
        borderRadius: "10px",
        p: "16px",
      }}
    >
      <Box>
        <List>
          <Stack spacing={1}>
            <ListItemButton
              onClick={() => jumpTo("profile")}
              sx={{ borderRadius: "5px" }}
            >
              <Person fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                Profile
              </Typography>
            </ListItemButton>

            <ListItemButton
              onClick={() => jumpTo("info")}
              sx={{ borderRadius: "5px" }}
            >
              <ReceiptLong fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                Basic Info
              </Typography>
            </ListItemButton>

            <ListItemButton
              onClick={() => jumpTo("password")}
              sx={{ borderRadius: "5px" }}
            >
              <Lock fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                Change Password
              </Typography>
            </ListItemButton>

            <ListItemButton
              onClick={() => jumpTo("twofa")}
              sx={{ borderRadius: "5px" }}
            >
              <Security fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                2FA
              </Typography>
            </ListItemButton>

            <ListItemButton
              onClick={() => jumpTo("accounts")}
              sx={{ borderRadius: "5px" }}
            >
              <Badge fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                Accounts
              </Typography>
            </ListItemButton>

            <ListItemButton
              onClick={() => jumpTo("notifications")}
              sx={{ borderRadius: "5px" }}
            >
              <Campaign fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                Notifications
              </Typography>
            </ListItemButton>

            <ListItemButton
              onClick={() => jumpTo("sessions")}
              sx={{ borderRadius: "5px" }}
            >
              <SettingsApplications fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                Sessions
              </Typography>
            </ListItemButton>

            <ListItemButton
              onClick={() => jumpTo("delete")}
              sx={{ borderRadius: "5px" }}
            >
              <Delete fontSize='small' sx={{color: p.text1}} />
              <Typography
                sx={{ color: p.text1, fontSize: "0.9rem", ml: "10px" }}
              >
                Delete Account
              </Typography>
            </ListItemButton>
          </Stack>
        </List>
      </Box>
    </Paper>
  )
}

export default SettingsNav
