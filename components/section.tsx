import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col xl:max-w-4xl sm:mt-8 mt-6">
      {children}
    </section>
  );
};

export default Section;
