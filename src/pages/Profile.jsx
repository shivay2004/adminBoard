import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import profileBgImg from "../img/profile.jpg";
import profileImg from "../img/profile.jpg";
import { Edit, Facebook, Instagram, Twitter } from "@mui/icons-material";

import { useEffect, useState } from "react";

const PROFILE_URL = "http://localhost:3000/profile_data";

const Profile = () => {
  const p = useTheme().palette;
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(PROFILE_URL);
      const data = await res.json();
      setProfileData(data);
    };
    fetchProfile();
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          mx: "24px",
          "&::before": {
            content: '""',
            bgcolor: "rgba(73, 163, 241, 0.4)",
            borderRadius: "10px",
            position: "absolute",
            top: 0,
            left: 0,
            height: "300px",
            width: "100%",
            zIndex: 100,
          },
        }}
      >
        <Box
          component={"img"}
          src={profileBgImg}
          sx={{
            width: "100%",
            objectFit: "cover",
            height: "300px",
            borderRadius: "10px",
            zIndex: 99,
          }}
        />
      </Box>

      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: p.bg2,
          p: "16px",
          mx: "48px",
          borderRadius: "10px",
          position: "relative",
          top: -70,
          zIndex: 101,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            mb: "40px",
          }}
        >
          <Box
            component={"img"}
            src={profileImg}
            sx={{ width: "80px", borderRadius: "50%" }}
          />

          <Box>
            <Typography
              variant="h6"
              sx={{ color: p.text1, fontWeight: "bold" }}
            >
              Richard Davis
            </Typography>
            <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
              CEO / Co-Founder
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ p: "16px" }}>
          <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: p.text1,
                fontSize: "1rem",
                fontWeight: "bold",
                mb: "20px",
              }}
            >
              Platform Settings
            </Typography>
            <Box>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: p.text4,
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                account
              </Typography>

              <FormControlLabel
                label={
                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    Email me when someone follows me
                  </Typography>
                }
                control={<Switch color="info" />}
                sx={{ fontSize: "0.8rem" }}
              />
              <FormControlLabel
                label={
                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    Email me when someone answers on my post
                  </Typography>
                }
                control={<Switch color="info" />}
                sx={{ fontSize: "0.8rem" }}
              />
              <FormControlLabel
                label={
                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    Email me when someone mentions me
                  </Typography>
                }
                control={<Switch color="info" />}
                sx={{ fontSize: "0.8rem" }}
              />

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: p.text4,
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  mt: "20px",
                }}
              >
                application
              </Typography>

              <FormControlLabel
                label={
                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    New launches and projects
                  </Typography>
                }
                control={<Switch color="info" />}
                sx={{ fontSize: "0.8rem" }}
              />
              <FormControlLabel
                label={
                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    Monthly product updates
                  </Typography>
                }
                control={<Switch color="info" />}
                sx={{ fontSize: "0.8rem" }}
              />
              <FormControlLabel
                label={
                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    Subscribe to newsletter
                  </Typography>
                }
                control={<Switch color="info" />}
                sx={{ fontSize: "0.8rem" }}
              />
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: p.text1,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Profile Information
              </Typography>

              <IconButton>
                <Edit sx={{ fontSize: "0.9rem", color: p.text3 }} />
              </IconButton>
            </Box>

            <Typography sx={{ color: p.text2, fontSize: "0.9rem", mb: "20px" }}>
              Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </Typography>

            <Box>
              <Typography sx={{ fontSize: "0.9rem", mb: "16px" }}>
                <Typography
                  component="span"
                  sx={{
                    color: p.text1,
                    fontSize: "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Full Name:{" "}
                </Typography>
                Alec M. Thompson
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", mb: "16px" }}>
                <Typography
                  component="span"
                  sx={{
                    color: p.text1,
                    fontSize: "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Mobile:{" "}
                </Typography>
                (44) 123 12 34 123
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", mb: "16px" }}>
                <Typography
                  component="span"
                  sx={{
                    color: p.text1,
                    fontSize: "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Email:{" "}
                </Typography>
                alecthompson@mail.com
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", mb: "16px" }}>
                <Typography
                  component="span"
                  sx={{
                    color: p.text1,
                    fontSize: "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Location:{" "}
                </Typography>
                USA
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: p.text1,
                    fontSize: "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Socials:{" "}
                </Typography>
                <Box
                  sx={{
                    display: "inline-block",
                    "*": { color: p.info.main, fontSize: "1.1rem" },
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  <Facebook /> <Twitter /> <Instagram />
                </Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, lg: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: p.text1,
                fontSize: "1rem",
                fontWeight: "bold",
                mb: "20px",
              }}
            >
              Conversations
            </Typography>

            {profileData &&
              profileData.messages.map((msg) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <Box
                      component={"img"}
                      src={msg.img}
                      sx={{ width: "50px", borderRadius: "50%" }}
                    />

                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          color: p.text1,
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                        }}
                      >
                        {msg.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: p.text2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        {msg.message}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="text"
                    sx={{
                      color: p.info.main,
                      textTransform: "uppercase",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    reply
                  </Button>
                </Box>
              ))}
          </Grid>
        </Grid>

        <Box sx={{ p: "16px" }}>
          <Typography
            variant="h6"
            sx={{
              color: p.text1,
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Projects
          </Typography>
          <Typography
            sx={{
              color: p.text4,
              fontSize: "0.9rem",
              mb: "20px",
            }}
          >
            Architects design houses
          </Typography>

          <Grid container spacing={6}>
            {profileData &&
              profileData.projects.map((proj) => (
                <Grid
                  item
                  size={{ xs: 12, sm: 6, lg: 3 }}
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Box
                    component={"img"}
                    src={proj.image}
                    sx={{ width: "100%", borderRadius: "10px" }}
                  />

                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    Project #{proj.project}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: p.text1,
                      fontWeight: "bold",
                    }}
                  >
                    {proj.name}
                  </Typography>

                  <Typography sx={{ color: p.text4, fontSize: "0.9rem" }}>
                    {proj.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="info"
                      sx={{
                        textTransform: "uppercase",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        borderWidth: "1px",
                      }}
                    >
                      view project
                    </Button>

                    <AvatarGroup
                      sx={{
                        "& .MuiAvatar-root": {
                          width: "20px",
                          height: "20px",
                          borderColor: "#fff",
                        },
                      }}
                    >
                      <Avatar src="/assets/msg1.jpg" />
                      <Avatar src="/assets/msg2.jpg" />
                      <Avatar src="/assets/msg3.jpg" />
                      <Avatar src="/assets/msg4.jpg" />
                    </AvatarGroup>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
