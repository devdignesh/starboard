import * as React from "react";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const dealRentPSF = [23.92, 23.92, 24.4, 24.8, 25.2, 25.6, 26.0];
const marketAvgRentPSF = [22.5, 22.8, 23.1, 23.5, 24.0, 24.5, 25.0];
const years = ["2021", "2022", "2023", "2024", "2025", "2026", "2027"];

export default function MarketBenchmarkChart() {
  return (
    <div className="overflow-auto mt-3">
      <LineChart
        width={800}
        height={300}
        series={[
          { data: dealRentPSF, label: "Deal Rent PSF", id: "dealId" },
          {
            data: marketAvgRentPSF,
            label: "Market Avg Rent PSF",
            id: "marketId",
          },
        ]}
        xAxis={[{ scaleType: "point", data: years }]}
        sx={{
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 1,
          },
          ".MuiLineElement-series-dealId": {
            strokeDasharray: "5 5",
          },
          ".MuiLineElement-series-marketId": {
            strokeDasharray: "3 4 5 2",
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
            {
              fill: "#fff",
            },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: "none",
          },
        }}
        tooltip={{ trigger: "item" }}
        margin={{ top: 20, right: 80, bottom: 40, left: 60 }}
      />
    </div>
  );
}
