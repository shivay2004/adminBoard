import {
  Box,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const BasicInfo = ({ settingsRefs }) => {
  const p = useTheme().palette;
  const [gender, setGender] = useState("male");
  const [month, setMonth] = useState(0);
  const [date, setDate] = useState(0);
  const [year, setYear] = useState(2000);
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <Paper
      ref={settingsRefs.info}
      sx={{ bgcolor: p.bg2, borderRadius: "10px", p: "16px" }}
    >
      <Typography
        component={"h6"}
        sx={{
          color: p.text.primary,
          fontSize: "1.2rem",
          fontWeight: "bold",
          mb: "24px",
        }}
      >
        Basic Info
      </Typography>

      <Grid container spacing={3}>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            sx={{
              width: "100%",
              "& input::placeholder": { fontSize: "0.9rem" },
            }}
            variant="standard"
            color="info"
            placeholder="Richard"
            label="First Name"
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            sx={{
              width: "100%",
              "& input::placeholder": {
                fontSize: "0.9rem",
                opacity: 1,
                color: p.text.secondary,
              },
            }}
            variant="standard"
            color="info"
            placeholder="Davis"
            label="Last Name"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
          <TextField
            variant="standard"
            color="info"
            label="Gender"
            select
            fullWidth
            value={gender}
            onChange={handleGender}
            slotProps={{
              select: {
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: p.bg2,
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
          <TextField
            variant="standard"
            color="info"
            label="Birth Date"
            select
            fullWidth
            value={month}
            onChange={handleMonth}
            slotProps={{
              select: {
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: p.bg2,
                    },
                  },
                },
              },
            }}
          >
            {monthList.map((month, index) => (
              <MenuItem key={month} value={index}>
                {month}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
          <TextField
            variant="standard"
            color="info"
            label=" "
            select
            fullWidth
            value={date}
            onChange={handleDate}
            slotProps={{
              select: {
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: p.bg2,
                    },
                  },
                },
              },
            }}
          >
            {Array.from(Array(31).keys()).map((date) => (
              <MenuItem key={date} value={date}>
                {date + 1}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
          <TextField
            variant="standard"
            color="info"
            label=" "
            select
            fullWidth
            value={year}
            onChange={handleYear}
            slotProps={{
              select: {
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: p.bg2,
                    },
                  },
                },
              },
            }}
          >
            {Array.from(Array(126).keys()).map((year) => (
              <MenuItem key={year} value={year + 1900}>
                {year + 1900}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            sx={{
              width: "100%",
              "& input::placeholder": { fontSize: "0.9rem" },
            }}
            variant="standard"
            color="info"
            placeholder="example@email.com"
            label="Email"
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            sx={{
              width: "100%",
              "& input::placeholder": { fontSize: "0.9rem" },
            }}
            variant="standard"
            color="info"
            placeholder="example@email.com"
            label="Confirm Email"
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            sx={{
              width: "100%",
              "& input::placeholder": { fontSize: "0.9rem" },
            }}
            variant="standard"
            color="info"
            placeholder="Sydney, AUS"
            label="Your Location"
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            type="number"
            InputLabelProps={{ shrink: true }}
            sx={{
              width: "100%",
              "& input::placeholder": { fontSize: "0.9rem" },
            }}
            variant="standard"
            color="info"
            placeholder="+40 735 631 620"
            label="Phone Number"
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            InputLabelProps={{ shrink: true }}
            sx={{
              width: "100%",
              "& input::placeholder": { fontSize: "0.9rem" },
            }}
            variant="standard"
            color="info"
            placeholder="English"
            label="Language"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BasicInfo;
