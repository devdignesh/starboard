"use client";
import { dealData } from "@/utils/data";
import CardTitle from "@/components/card-title";
import DealDetailItem from "@/components/deal-detailItem";
import Section from "@/components/section";
import SaleComparables from "@/components/sale-comparables";
import Supplypipeline from "@/components/supply-pipeline";
import MarketBenchmarkChart from "@/components/market-benchmark-chart";
import Overview from "@/components/overview";
import PropertyMatrix from "@/components/property-matrix";
import Summary from "@/components/summary";
import Insights from "@/components/insights";

export default function Home() {
  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto px-2 mt-5">
        <Overview />

        <section className="sm:mt-8 mt-6 flex flex-wrap gap-x-14 md:gap-y-6 gap-y-4 text-zinc-700 xl:max-w-4xl">
          {dealData.map((item, index) => (
            <DealDetailItem key={index} item={item} index={index} />
          ))}
        </section>

        <Summary />
        <Insights />
        <PropertyMatrix />

        <Section>
          <CardTitle>Market Benchmark Comparisons</CardTitle>
          <MarketBenchmarkChart />
        </Section>

        <Section>
          <CardTitle>Location</CardTitle>
          <div className="w-full h-96 rounded-2xl overflow-hidden mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1649.9505975076986!2d-74.01462144221935!3d40.67346657308729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744639264001!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Section>

        <SaleComparables />
        <Supplypipeline />
      </div>
    </>
  );
}
