import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";

import {
  ArrowUpward,
  BookOnline,
  ChevronRight,
  EmojiEmotions,
  ImageOutlined,
  NotificationAdd,
  Notifications,
  OpenInNew,
  PlayArrow,
  PriorityHighRounded,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import musicBg from "../../img/widgets-bg.jpg";

const WidgetsRow4 = () => {
  const p = useTheme().palette;

  return (
    <Grid container spacing={3}>
      <Grid item size={{ xs: 12, sm: 5 }}>
        <Box
          component={Paper}
          sx={{ background: p.bg2, borderRadius: "10px", p: "16px" }}
        >
          <Typography
            sx={{ color: p.text1, fontSize: "0.9rem", fontWeight: "bold" }}
          >
            Calendar
          </Typography>

          <Typography
            sx={{ color: p.text4, fontSize: "0.8rem", fontWeight: "bold" }}
          >
            Monday, 2021
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        size={{
          xs: 12,
          sm: 3,
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Box
          component={Paper}
          sx={{
            background: p.bg2,
            borderRadius: "10px",
            p: "16px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: p.text.primary,
              fontSize: "0.9rem",
              fontWeight: "bold",
              mb: "24px",
            }}
          >
            Categories
          </Typography>

          <Stack spacing={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "35px",
                  height: "35px",
                  background:
                    "linear-gradient(190deg, rgb(50, 55, 75), rgb(16, 26, 46) )",
                  borderRadius: "10px",
                }}
              >
                <OpenInNew sx={{ color: "#fff", fontSize: "1rem" }} />
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    color: p.text1,
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  Devices
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.7rem" }}
                >
                  250 in stock,{" "}
                  <Typography
                    component={"span"}
                    sx={{
                      color: "inherit",
                      fontSize: "inherit",
                      fontWeight: "bold",
                    }}
                  >
                    346+ sold
                  </Typography>
                </Typography>
              </Box>

              <IconButton
                disableRipple
                disableFocusRipple
                sx={{
                  color: p.text.primary,
                  ml: "auto",
                  transition: "0.2s linear",
                  "&:hover": { transform: "translateX(10px)" },
                }}
              >
                <ChevronRight sx={{ fontSize: "1rem" }} />
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "35px",
                  height: "35px",
                  background:
                    "linear-gradient(190deg, rgb(50, 55, 75), rgb(16, 26, 46) )",
                  borderRadius: "10px",
                }}
              >
                <BookOnline sx={{ color: "#fff", fontSize: "1rem" }} />
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    color: p.text1,
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  Tickets
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.7rem" }}
                >
                  123 closed,{" "}
                  <Typography
                    component={"span"}
                    sx={{
                      color: "inherit",
                      fontSize: "inherit",
                      fontWeight: "bold",
                    }}
                  >
                    15 open
                  </Typography>
                </Typography>
              </Box>

              <IconButton
                disableRipple
                disableFocusRipple
                sx={{
                  color: p.text.primary,
                  ml: "auto",
                  transition: "0.2s linear",
                  "&:hover": { transform: "translateX(10px)" },
                }}
              >
                <ChevronRight sx={{ fontSize: "1rem" }} />
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "35px",
                  height: "35px",
                  background:
                    "linear-gradient(190deg, rgb(50, 55, 75), rgb(16, 26, 46) )",
                  borderRadius: "10px",
                }}
              >
                <PriorityHighRounded sx={{ color: "#fff", fontSize: "1rem" }} />
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    color: p.text.primary,
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  Error logs
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.7rem" }}
                >
                  1 is active,{" "}
                  <Typography
                    component={"span"}
                    sx={{
                      color: "inherit",
                      fontSize: "inherit",
                      fontWeight: "bold",
                    }}
                  >
                    15 closed
                  </Typography>
                </Typography>
              </Box>

              <IconButton
                disableRipple
                disableFocusRipple
                sx={{
                  color: p.text.primary,
                  ml: "auto",
                  transition: "0.2s linear",
                  "&:hover": { transform: "translateX(10px)" },
                }}
              >
                <ChevronRight sx={{ fontSize: "1rem" }} />
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: "35px",
                  height: "35px",
                  background:
                    "linear-gradient(190deg, rgb(50, 55, 75), rgb(16, 26, 46) )",
                  borderRadius: "10px",
                }}
              >
                <EmojiEmotions sx={{ color: "#fff", fontSize: "1rem" }} />
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    color: p.text.primary,
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  Happy users
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.7rem" }}
                >
                  <Typography
                    component={"span"}
                    sx={{
                      color: "inherit",
                      fontSize: "inherit",
                      fontWeight: "bold",
                    }}
                  >
                    +430
                  </Typography>
                </Typography>
              </Box>

              <IconButton
                disableRipple
                disableFocusRipple
                sx={{
                  ml: "auto",
                  color: p.text.primary,
                  transition: "0.2s linear",
                  "&:hover": { transform: "translateX(10px)" },
                }}
              >
                <ChevronRight sx={{ fontSize: "1rem" }} />
              </IconButton>
            </Box>
          </Stack>
        </Box>

        <Paper
          sx={{
            backgroundImage: `url(${musicBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
            p: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            gap: "24px",
            width: "100%",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              background: "linear-gradient(190deg, #292727bb, #2c2c2cbb)",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              variant={"h6"}
              component={"p"}
              sx={{
                color: "white",
                fontWeight: "bold",
                position: "relative",
                fontSize: "1.1rem",
              }}
            >
              Some Kind Of Blues
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: "0.9rem", position: "relative" }}
            >
              Deftones
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <IconButton
              sx={{ bgcolor: "#ffffff22", border: "1px solid white" }}
            >
              <SkipPrevious sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              sx={{ bgcolor: "#ffffff22", border: "1px solid white" }}
            >
              <PlayArrow sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              sx={{ bgcolor: "#ffffff22", border: "1px solid white" }}
            >
              <SkipNext sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Paper>
      </Grid>

      <Grid item size={{ xs: 12, sm: 4 }}>
        <Box
          component={Paper}
          sx={{
            background: p.bg2,
            borderRadius: "10px",
            p: "16px",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              color: p.text.primary,
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            Orders overview
          </Typography>
          <Typography
            sx={{
              color: p.text.secondary,
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            <ArrowUpward sx={{ fontSize: "0.9rem", color: p.success.main }} />{" "}
            24% this month
          </Typography>

          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                    bgcolor: p.success.main,
                  }}
                >
                  <Notifications sx={{ fontSize: "1rem", color: "#fff" }} />
                </Avatar>
                <TimelineConnector sx={{ bgcolor: p.text3, width: 2 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 0 }}>
                <Typography
                  sx={{
                    color: p.text.primary,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  $2400, Design changes
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.75rem" }}
                >
                  22 DEC 7:20 PM
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                    bgcolor: p.error.main,
                  }}
                >
                  <Notifications sx={{ fontSize: "1rem", color: "#fff" }} />
                </Avatar>
                <TimelineConnector sx={{ bgcolor: p.text3, width: 2 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 0 }}>
                <Typography
                  sx={{
                    color: p.text.primary,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  New order #1832412
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.75rem" }}
                >
                  21 DEC 11 PM
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                    bgcolor: p.info.main,
                  }}
                >
                  <Notifications sx={{ fontSize: "1rem", color: "#fff" }} />
                </Avatar>
                <TimelineConnector sx={{ bgcolor: p.text3, width: 2 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 0 }}>
                <Typography
                  sx={{
                    color: p.text.primary,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  Server payments for April
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.75rem" }}
                >
                  21 DEC 9:34 PM
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                    bgcolor: p.warning.main,
                  }}
                >
                  <Notifications sx={{ fontSize: "1rem", color: "#fff" }} />
                </Avatar>
                <TimelineConnector sx={{ bgcolor: p.text3, width: 2 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 0 }}>
                <Typography
                  sx={{
                    color: p.text.primary,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  New card added for order #4395133
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.75rem" }}
                >
                  20 DEC 2:20 AM
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <Avatar
                  sx={{
                    width: "30px",
                    height: "30px",
                    bgcolor: p.primary.main,
                  }}
                >
                  <Notifications sx={{ fontSize: "1rem", color: "#fff" }} />
                </Avatar>
              </TimelineSeparator>
              <TimelineContent sx={{ pt: 0 }}>
                <Typography
                  sx={{
                    color: p.text.primary,
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  New card added for order #4395133
                </Typography>
                <Typography
                  sx={{ color: p.text.secondary, fontSize: "0.75rem" }}
                >
                  18 DEC 4:54 AM
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          {/* </Box> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default WidgetsRow4;
