import { Stack } from "@mui/material";
import WidgetsRow1 from "../components/widgets/WidgetsRow1.jsx";
import WidgetsRow2 from "../components/widgets/WidgetsRow2.jsx";
import WidgetsRow3 from "../components/widgets/WidgetsRow3.jsx";
import WidgetsRow4 from "../components/widgets/WidgetsRow4.jsx";
const Widgets = () => {
  return (
    <Stack spacing={3} sx={{ mr: "16px" }}>
      <WidgetsRow1 />
      <WidgetsRow2 />
      <WidgetsRow3 />
      <WidgetsRow4 />
    </Stack>
  );
};

export default Widgets;
