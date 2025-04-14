import React from "react";
import Section from "./section";
import CardTitle from "./card-title";
import { Insight } from "@/utils/types";
import { insightsData } from "@/utils/data";

const Insights = () => {
  const renderTextWithLink = (insight: Insight) => {
    if (!insight.link) return insight.text;
    const { text, link } = insight;
    const parts = text.split(link.label);
    return (
      <>
        {parts[0]}
        <a
          href={link.url}
          className="text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <Section>
      <CardTitle>Personalized Insights</CardTitle>
      <ul className="list-disc pl-5 mt-2">
        {insightsData.map((insight, index) => (
          <li key={index} className="leading-none">
            <span className=" text-sm">{renderTextWithLink(insight)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Insights;
