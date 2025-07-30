import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import {
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale,
  topojson,
} from "chartjs-chart-geo";
import { Box, useTheme } from "@mui/material";

Chart.register(ChoroplethController, GeoFeature, ProjectionScale, ColorScale);

const ChartGeoMap = () => {
  const theme = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    const fetchAndDrawMap = async () => {
      try {
        const response = await fetch(
          "https://unpkg.com/world-atlas/countries-110m.json"
        );
        const world = await response.json();
        let countries = topojson.feature(
          world,
          world.objects.countries
        ).features;

        countries = countries.filter(
          (d) => d.properties.name !== "Antarctica" && d.id !== "010"
        );

        chartInstance = new Chart(canvasRef.current.getContext("2d"), {
          type: "choropleth",
          data: {
            labels: countries.map((d) => d.properties.name),
            datasets: [
              {
                label: "Countries",
                data: countries.map((d) => ({
                  feature: d,
                  value: 1,
                })),
                backgroundColor: theme.palette.divider,
                borderWidth: 0.5,
              },
            ],
          },
          options: {
            responsive: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              projection: {
                axis: "x",
                projection: "mercator",
              },
              color: {
                axis: "x",
                display: false,
              },
            },
            animation: false,
          },
        });
      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };

    fetchAndDrawMap();

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, [theme]);

  return (
    <Box
      sx={{
        maxWidth: 900,
        height: 350,
        mx: "auto",
      }}
    >
      <canvas ref={canvasRef} width={900} height={480} />
    </Box>
  );
};

export default ChartGeoMap;
