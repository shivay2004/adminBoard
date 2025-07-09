import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import * as Icons from "@mui/icons-material";

import StatCard from "../components/StatCard";
import SalesByCountryCard from "../components/SalesByCountryCard";
import ChartCard from "../components/ChartCard";
import PropertyCard from "../components/PropertyCard";

import x from "../img/product-1.jpg";

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({ stats: [] });
  const [chartsData, setChartsData] = useState({
    salesByCountry: [],
    websiteViews: [],
    dailySales: [],
    completedTasks: [],
  });
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        await new Promise((res) => setTimeout(res, 3000));

        const [dashboardRes, chartsRes, propertiesRes] = await Promise.all([
          fetch("http://localhost:3000/dashboard"),
          fetch("http://localhost:3000/charts"),
          fetch("http://localhost:3000/properties"),
        ]);

        const [dashboard, charts, props] = await Promise.all([
          dashboardRes.json(),
          chartsRes.json(),
          propertiesRes.json(),
        ]);

        setDashboardData(dashboard);
        setChartsData(charts);
        setProperties(props);
      } catch (error) {
        console.error("Failed to load analytics data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const { websiteViews, dailySales, completedTasks, salesByCountry } =
    chartsData;

  return (
    <>
      {/* Sales by Country */}
      <SalesByCountryCard
        data={salesByCountry}
        loading={loading}
        numCountries={4}
      />

      {/* Chart Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          mt: 10,
          mr: 2.4,
        }}
      >
        <ChartCard
          title="Website Views"
          subtitle="Last Campaign Performance"
          footer="campaign sent 2 days ago"
          data={websiteViews}
          dataKey="views"
          xKey="day"
          type="bar"
          color="#1e88e5"
          loading={loading}
        />
        <ChartCard
          title="Daily Sales"
          subtitle="(+15%) increase in today sales."
          footer="updated 4 min ago"
          data={dailySales}
          dataKey="sales"
          xKey="month"
          type="line"
          color="#43a047"
          loading={loading}
        />
        <ChartCard
          title="Completed Tasks"
          subtitle="Last Campaign Performance"
          footer="just updated"
          data={completedTasks}
          dataKey="tasks"
          xKey="month"
          type="line"
          color="#2f2f2f"
          loading={loading}
        />
      </Box>

      {/* Stat Cards */}
      <Box sx={{ mt: 5, mr: 2.4 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 2,
          }}
        >
          {(loading ? Array.from({ length: 4 }) : dashboardData.stats).map(
            (stat, idx) => (
              <StatCard
                key={stat?.id || idx}
                icon={React.createElement(Icons[stat?.icon] || Icons.Info)}
                title={stat?.title}
                value={stat?.value}
                change={stat?.change}
                period={stat?.period}
                color={stat?.color}
                loading={loading}
              />
            )
          )}
        </Box>
      </Box>

      {/* Property Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          mr: 2.4,
          mt: 5,
        }}
      >
        {(loading ? Array.from({ length: 3 }) : properties).map(
          (property, idx) => (
            <PropertyCard
              key={property?.id || idx}
              title={property?.title}
              location={property?.location}
              price={property?.price}
              image={x}
              description={
                property?.location
                  ? `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in ${
                      property.location.split(",")[0]
                    }.`
                  : ""
              }
              loading={loading}
            />
          )
        )}
      </Box>
    </>
  );
}
