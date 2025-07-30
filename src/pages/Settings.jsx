import { Box, Grid } from "@mui/material";
import BasicInfo from "../components/settings/BasicInfo";
import ChangePass from "../components/settings/ChangePass";
import TwoFA from "../components/settings/TwoFA";
import Accounts from "../components/settings/Accounts";
import Notifications from "../components/settings/Notifications";
import Sessions from "../components/settings/Sessions";
import DeleteAcc from "../components/settings/DeleteAcc";
import UserCard from "../components/settings/UserCard";
import SettingsNav from "../components/settings/SettingsNav";
import { useRef, useState } from "react";
import BarNav from "../components/settings/BarNav";

const Settings = () => {
  const settingsRefs = {
    profile: useRef(null),
    info: useRef(null),
    password: useRef(null),
    twofa: useRef(null),
    accounts: useRef(null),
    notifications: useRef(null),
    sessions: useRef(null),
    delete: useRef(null),
  };
  const jumpTo = (refKey) => {
    window.scrollTo({
      top: settingsRefs[refKey].current.offsetTop - 105,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item size={{ xs: 12 }}>
          <BarNav />
        </Grid>

        <Grid item size={{ xs: 12, lg: 3 }}>
          <SettingsNav jumpTo={jumpTo} />
        </Grid>
        <Grid
          item
          size={{ xs: 12, lg: 9 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <UserCard settingsRefs={settingsRefs} />
          <BasicInfo settingsRefs={settingsRefs} />
          <ChangePass settingsRefs={settingsRefs} />
          <TwoFA settingsRefs={settingsRefs} />
          <Accounts settingsRefs={settingsRefs} />
          <Notifications settingsRefs={settingsRefs} />
          <Sessions settingsRefs={settingsRefs} />
          <DeleteAcc settingsRefs={settingsRefs} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
