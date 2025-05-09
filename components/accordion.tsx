'use client'
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  status?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, status=false }) => {
  const [isOpen, setIsOpen] = useState(status);

  return (
    <div className="flex flex-col xl:max-w-4xl sm:py-6 py-4  border-b  border-zinc-400">
      <button
        className="flex items-center justify-between w-full cursor-pointer text-left text-lg font-semibold text-neutral-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-600 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-600 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-2 mx-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;