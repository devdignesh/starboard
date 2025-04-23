'use client'
import React, { useRef } from "react";
import Image from "next/image";
import CardTitle from "./card-title";
import { saleComparablesData } from "@/utils/data";
import Section from "./section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SaleComparable } from "@/utils/types";

const SaleComparables: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 316;  
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section>
      <CardTitle>Sale Comparables</CardTitle>
      <div className="relative mt-4">
        {saleComparablesData.length > 3 && (
          <>
            <button
              className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
        <div
          ref={scrollRef}
          className="flex gap-4 pb-4 overflow-x-hidden scroll-smooth  "
        >
          {saleComparablesData.map((item: SaleComparable, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl min-w-[300px] shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.address}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-y-1 text-zinc-700">
                <strong className="text-xl">{item.pp}</strong>
                <h3 className="text-base truncate">{item.address}</h3>
                <div className="flex justify-between">
                  <span className="text-sm">
                    <strong>{item.sf}</strong> sqft
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm flex items-center gap-x-1">
                    <strong>Owner:</strong> {item.owner}
                  </span>
                  <span className="text-sm">
                    <strong>Tenant:</strong> {item.tenant}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SaleComparables;