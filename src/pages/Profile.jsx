import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import profileBgImg from "../img/profile-bg.jpg";
import profileImg from "../img/profile.jpg";
import { Edit, Facebook, Instagram, Twitter } from "@mui/icons-material";

import { useEffect, useState } from "react";
import ProfileTabs from "../components/ProfileTabs";

const PROFILE_URL = "http://localhost:3000/profile_data";

export default function Profile() {
  const theme = useTheme();
  const [profileData, setProfileData] = useState();
  const [tabValue, setTabValue] = useState(0);
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
          mr: "19px",
          ml: "-1px",
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: theme.palette.background.paper,
          p: "16px",
          mr: "48px",
          ml: "30px",
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
            justifyContent: "space-between", // distribute left and right
            flexWrap: "wrap",
            gap: "16px",
            mb: "40px",
          }}
        >
          {/* Left: Profile Picture + Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Box
              component={"img"}
              src={profileImg}
              sx={{ width: "80px", borderRadius: "50%" }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
              >
                Richard Davis
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: "0.9rem" }}
              >
                a CEO / Co-Founder
              </Typography>
            </Box>
          </Box>

          {/* Right: Profile Tabs */}
          <ProfileTabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
          />
        </Box>

        {/* Main Sections: Platform Settings, Profile Information, Conversations */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 0,
            px: 2,
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0, px: { lg: 2 } }}>
            {/* Platform Settings */}
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
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
                  color: theme.palette.text.secondary,
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                account
              </Typography>

              {[
                "Email me when someone follows me",
                "Email me when someone answers on my post",
                "Email me when someone mentions me",
              ].map((label, idx) => (
                <FormControlLabel
                  key={label}
                  label={
                    <Typography
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.9rem",
                      }}
                    >
                      {label}
                    </Typography>
                  }
                  control={
                    <Switch
                      color="info"
                      defaultChecked={idx === 0 || idx === 2}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#fff",
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                          {
                            backgroundColor: "#3B3B47",
                            opacity: 1,
                            border: "1.5px solid #3B3B47",
                          },
                        "& .MuiSwitch-track": {
                          backgroundColor: theme.palette.grey[300],
                          opacity: 1,
                        },
                        "& .MuiSwitch-thumb": {
                          boxShadow: "0 2px 6px 0 rgba(0,0,0,0.15)",
                        },
                      }}
                    />
                  }
                  sx={{ fontSize: "0.8rem" }}
                />
              ))}

              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: theme.palette.text.secondary,
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  mt: "20px",
                }}
              >
                application
              </Typography>

              {[
                "New launches and projects",
                "Monthly product updates",
                "Subscribe to newsletter",
              ].map((label, idx) => (
                <FormControlLabel
                  key={label}
                  label={
                    <Typography
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.9rem",
                      }}
                    >
                      {label}
                    </Typography>
                  }
                  control={
                    <Switch
                      color="info"
                      defaultChecked={idx === 1}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#fff",
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                          {
                            backgroundColor: "#3B3B47",
                            opacity: 1,
                            border: "1.5px solid #3B3B47",
                          },
                        "& .MuiSwitch-track": {
                          backgroundColor: theme.palette.grey[300],
                          opacity: 1,
                        },
                        "& .MuiSwitch-thumb": {
                          boxShadow: "0 2px 6px 0 rgba(0,0,0,0.15)",
                        },
                      }}
                    />
                  }
                  sx={{ fontSize: "0.8rem" }}
                />
              ))}
            </Box>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", lg: "block" },
              mx: 0,
              borderColor: theme.palette.divider,
            }}
          />

          <Box sx={{ flex: 1, minWidth: 0, px: { lg: 2 } }}>
            {/* Profile Information */}
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
                  color: theme.palette.text.primary,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Profile Information
              </Typography>

              <IconButton>
                <Edit
                  sx={{
                    fontSize: "0.9rem",
                    color: theme.palette.text.secondary,
                  }}
                />
              </IconButton>
            </Box>

            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "0.9rem",
                mb: "20px",
              }}
            >
              Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer
              is no...
            </Typography>

            <Box>
              {[
                ["Full Name", "Alec M. Thompson"],
                ["Mobile", "(44) 123 12 34 123"],
                ["Email", "alecthompson@mail.com"],
                ["Location", "USA"],
              ].map(([label, value]) => (
                <Typography
                  key={label}
                  component="div"
                  sx={{
                    fontSize: "0.9rem",
                    mb: "16px",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {label}:{" "}
                  </Typography>
                  {value}
                </Typography>
              ))}

              <Typography
                sx={{
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  mb: "16px",
                }}
                component="div"
              >
                <Typography
                  component="span"
                  sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
                >
                  Social:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    ml: 1,
                  }}
                >
                  <Facebook sx={{ color: "#3B5998", fontSize: 20, mr: 0.5 }} />
                  <Twitter
                    sx={{
                      color: "#55ACEE",
                      fontSize: 20,
                      mr: 0.5,
                    }}
                  />
                  <Instagram sx={{ color: "#125688", fontSize: 20 }} />
                </Box>
              </Typography>
            </Box>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", lg: "block" },
              mx: 0,
              borderColor: theme.palette.divider,
            }}
          />

          <Box sx={{ flex: 1, minWidth: 0, px: { lg: 2 } }}>
            {/* Conversations */}
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
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
                  key={msg.name}
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
                          color: theme.palette.text.primary,
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                        }}
                      >
                        {msg.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: theme.palette.text.secondary,
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
                      color: "#1A73E8",
                      textTransform: "uppercase",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    reply
                  </Button>
                </Box>
              ))}
          </Box>
        </Box>

        <Box sx={{ p: "16px" }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Projects
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
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
                  key={proj.project}
                  item
                  size={{ xs: 12, sm: 6, lg: 3 }}
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Box
                    component={"img"}
                    src={proj.image}
                    sx={{ width: "100%", borderRadius: "10px" }}
                  />
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "0.9rem",
                    }}
                  >
                    Project #{proj.project}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {proj.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "0.9rem",
                    }}
                  >
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
                      color="primary"
                      sx={{
                        textTransform: "uppercase",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        borderWidth: "1px",
                        borderColor: "#1A71E4",
                        color: "#1A71E4",
                        "&:hover": {
                          borderColor: "#1A71E4",
                          backgroundColor: "rgba(26, 113, 228, 0.08)",
                          color: "#1A71E4",
                        },
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
                      <Avatar src="/src/img/msg1.jpg" />
                      <Avatar src="/src/img/msg2.jpg" />
                      <Avatar src="/src/img/msg3.jpg" />
                      <Avatar src="/src/img/msg4.jpg" />
                    </AvatarGroup>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
