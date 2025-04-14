import React from "react";

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="md:text-xl  text-lg font-semibold flex text-neutral-800">
      {children}
    </span>
  );
};

export default CardTitle;
