// src/pages/ChartsPage.jsx
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import LineChartCard from "../components/LineChartCard";
import GradientLineChartCard from "../components/GradientLineChartCard";
import BarChartCard from "../components/BarChartCard";
import HorizontalBarChartCard from "../components/HorizontalBarChartCard";
import MixedChartCard from "../components/MixedChartCard";
import BubbleChartCard from "../components/BubbleChartCard";
import DoughnutChartCard from "../components/DoughnutChartCard";
import PieChartCard from "../components/PieChartCard";
import RadarChartCard from "../components/RadarChartCard";
import PolarAreaChartCard from "../components/PolarAreaChartCard";

export default function Charts() {
  const [loading, setLoading] = useState(true);
  const [otisCharts, setOtisCharts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/charts")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response", data);
        setOtisCharts(data?.otisCharts || []);
      })
      .catch((err) => console.error("error:", err))
      .finally(() => setLoading(false));
  }, []);

  const get = (title) => otisCharts.find((c) => c.title === title);

  return (
    <>
      {/* Line Charts */}
      <Box sx={{ p: "20px", pl: 0 }} display="flex" flexWrap="wrap" gap={3}>
        <Box flex={1} minWidth={300}>
          <LineChartCard data={get("Product Insights")} loading={loading} />
        </Box>
        <Box flex={1} minWidth={300}>
          <GradientLineChartCard
            data={get("Visits from Devices")}
            loading={loading}
          />
        </Box>
      </Box>

      {/* Bar Charts */}
      <Box sx={{ p: "20px", pl: 0 }} display="flex" flexWrap="wrap" gap={3}>
        <Box flex={1} minWidth={300}>
          <BarChartCard
            data={get("Sales Related to Age Average")}
            loading={loading}
          />
        </Box>
        <Box flex={1} minWidth={300}>
          <HorizontalBarChartCard
            data={get("Sales Related to Age Average")}
            loading={loading}
          />
        </Box>
      </Box>
      {/* Mixed + Bubble */}
      <Box sx={{ p: "20px", pl: 0 }} display="flex" flexWrap="wrap" gap={3}>
        <Box flex={1} minWidth={300}>
          <MixedChartCard data={get("Analytics Insights")} loading={loading} />
        </Box>
        <Box flex={1} minWidth={300}>
          <BubbleChartCard
            data={get("Users Divided by Regions")}
            loading={loading}
          />
        </Box>
      </Box>
      {/* Doughnut + Pie */}
      <Box sx={{ p: "20px", pl: 0 }} display="flex" flexWrap="wrap" gap={3}>
        <Box flex={1} minWidth={300}>
          <DoughnutChartCard
            data={get("Market Share Distribution")}
            loading={loading}
          />
        </Box>
        <Box flex={1} minWidth={300}>
          <PieChartCard
            data={get("Product Category Share")}
            loading={loading}
          />
        </Box>
      </Box>
      {/* Radar + Polar */}
      <Box sx={{ p: "20px", pl: 0 }} display="flex" flexWrap="wrap" gap={3}>
        <Box flex={1} minWidth={300}>
          <RadarChartCard data={get("Sciences Score")} loading={loading} />
        </Box>
        <Box flex={1} minWidth={300}>
          <PolarAreaChartCard
            data={get("Analytics Insights (Polar)")}
            loading={loading}
          />
        </Box>
      </Box>
    </>
  );
}
