import React from "react";
import Section from "./section";
import CardTitle from "./card-title";

const Summary = () => {
  return (
    <Section>
      <CardTitle>Summary</CardTitle>
      <span className="text-sm mt-2">
        280 Richards, fully leased to Amazon, aligns with HUSPP’s strategy of
        acquiring prime logistics assets in Brooklyn’s high-demand Red Hook
        submarket. With 13 years remaining on the lease and 3% annual rent
        escalations, it offers stable, long-term cash flow. While single-tenant
        exposure is a risk, Amazon’s investment-grade rating and renewal options
        enhance its resilience, making it a strong addition to HUSPP’s
        portfolio.
      </span>
    </Section>
  );
};

export default Summary;
