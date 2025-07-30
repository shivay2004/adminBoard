import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SalesStats from "../components/SalesStats";
import SalesChart from "../components/SalesChart";
import SalesByAgeChart from "../components/SalesByAgeChart";

import SalesByCountryCompact from "../components/SalesByCountryCompact";
import TopSellingProducts from "../components/TopSellingProducts";

export default function Sales() {
  const [cards, setCards] = useState([]);
  const [channels, setChannels] = useState(null);
  const [revenueData, setRevenueData] = useState(null);
  const [salesByAge, setSalesByAge] = useState(null);
  const [topCountries, setTopCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [topSelling, setTopSelling] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));

        const [salesRes, chartsRes] = await Promise.all([
          fetch("http://localhost:3000/salesData"),
          fetch("http://localhost:3000/charts"),
        ]);

        const salesData = await salesRes.json();
        const chartsData = await chartsRes.json();

        const cardData = salesData.dashboardCards;
        const formattedCards = [
          { title: "Sales", ...cardData.sales },
          { title: "Customers", ...cardData.customers },
          { title: "Avg Revenue", ...cardData.avgRevenue },
        ];
        const formattedSalesByAge = {
          labels: Object.keys(salesData.salesByAge),
          data: Object.values(salesData.salesByAge),
        };
        setTopSelling(salesData.topSellingProducts);
        setCards(formattedCards);
        setChannels(salesData.channels);
        setRevenueData(salesData.revenueChart);
        setSalesByAge(formattedSalesByAge);
        setTopCountries(chartsData.salesByCountry);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching sales data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Top Stat Cards */}
      <Box
        sx={{
          mt: 2,
          mr: 2.4,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 2,
        }}
      >
        {(loading ? Array.from({ length: 3 }) : cards).map((card, i) => (
          <SalesStats key={i} {...card} loading={loading} />
        ))}
      </Box>

      {/* Channels Pie + Revenue Line */}
      <SalesChart
        channels={channels}
        revenueData={revenueData}
        loading={loading}
      />

      {/* Age + Country Charts */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
          mr: 2.4,
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        <Box sx={{ flex: "1 1 64%", minWidth: 320 }}>
          <SalesByAgeChart data={salesByAge} loading={loading} />
        </Box>
        <Box sx={{ flex: "1 1 34%", minWidth: 300 }}>
          <SalesByCountryCompact
            data={topCountries}
            loading={loading}
            numCountries={5}
          />
        </Box>
      </Box>
      <TopSellingProducts data={topSelling} loading={loading} />
    </>
  );
}
