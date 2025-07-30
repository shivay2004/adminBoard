import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

const Notifications = ({ settingsRefs }) => {
  const p = useTheme().palette;

  const switchSx = {
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
  };

  return (
    <Paper
      ref={settingsRefs.notifications}
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
          Notifications
        </Typography>
        <Typography sx={{ color: p.text.secondary, fontSize: "0.9rem" }}>
          Choose how you receive notifications. These notification settings
          apply to the things you're watching.
        </Typography>
      </Box>

      <TableContainer>
        <Table
          sx={{
            "& .MuiTableCell-root": {
              border: `1px solid ${p.text2}`,
            },
            "& .MuiTableRow-root:last-child .MuiTableCell-root": {
              border: "none",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ color: p.text.secondary }}>
                  Activity
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ color: p.text.secondary }}>Email</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ color: p.text.secondary }}>Push</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ color: p.text.secondary }}>SMS</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Typography sx={{ color: p.text.primary }}>Mentions</Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.8rem" }}
                >
                  Notify when another user mentions you in a comment
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch color="secondary" sx={switchSx} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography sx={{ color: p.text.primary }}>Comments</Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.8rem" }}
                >
                  Notify when another user comments your item
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch color="secondary" sx={switchSx} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography sx={{ color: p.text.primary }}>Follows</Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.8rem" }}
                >
                  Notify when another user follows you
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Switch color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch color="secondary" sx={switchSx} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography sx={{ color: p.text.secondary }}>
                  Log in from a new device
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked color="secondary" sx={switchSx} />
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked color="secondary" sx={switchSx} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Notifications;
