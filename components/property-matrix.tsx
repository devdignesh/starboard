import React from "react";
import {
    assetLevelData,
    keyAssumptionsData,
    leaseAnalysisData,
    marketAnalysisData,
    projectedFinancialMetricsData,
  } from "@/utils/data";
  
import Accordion from "@/components/accordion";
import Section from "./section"; 
import StaticDealDetailItem from "./static-deal-detail-item";

const PropertyMatrix = () => {
  return (
    <>
      <Section>
        <Accordion title="Asset-Level Data">
          <div className="mt-5 flex flex-wrap gap-x-14 md:gap-y-6 gap-y-4 text-zinc-700 xl:max-w-4xl">
            {assetLevelData.map((item, index) => (
              <StaticDealDetailItem key={index} item={item} index={index} />
            ))}
          </div>
        </Accordion>
        <Accordion title="Projected Financial Metrics">
          <div className="mt-5 flex flex-wrap gap-x-14 md:gap-y-6 gap-y-4 text-zinc-700 xl:max-w-4xl">
            {projectedFinancialMetricsData.map((item, index) => (
              <StaticDealDetailItem key={index} item={item} index={index} />
            ))}
          </div>
        </Accordion>
        <Accordion title="Key Assumptions">
          <div className="mt-5 flex flex-wrap gap-x-14 md:gap-y-6 gap-y-4 text-zinc-700 xl:max-w-4xl">
            {keyAssumptionsData.map((item, index) => (
              <StaticDealDetailItem key={index} item={item} index={index} />
            ))}
          </div>
        </Accordion>
        <Accordion title="Market Analysis">
          <div className="mt-5 flex flex-wrap gap-x-14 md:gap-y-6 gap-y-4 text-zinc-700 xl:max-w-4xl">
            {marketAnalysisData.map((item, index) => (
              <StaticDealDetailItem key={index} item={item} index={index} />
            ))}
          </div>
        </Accordion>
        <Accordion title="Lease Analysis">
          <div className="mt-5 flex flex-wrap gap-x-14 md:gap-y-6 gap-y-4 text-zinc-700 xl:max-w-4xl">
            {leaseAnalysisData.map((item, index) => (
              <StaticDealDetailItem key={index} item={item} index={index} />
            ))}
          </div>
        </Accordion>
      </Section>
    </>
  );
};

export default PropertyMatrix;
