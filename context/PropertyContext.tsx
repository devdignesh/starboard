'use client'
import { PropertyData } from "@/utils/types";
import React, { createContext, useContext, useState, ReactNode } from "react";


type PropertyContextType = {
  data: PropertyData | null;
  setData: (data: PropertyData) => void;
};

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PropertyData | null>(null);

  return (
    <PropertyContext.Provider value={{ data, setData }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("useProperty must be used within a PropertyProvider");
  }
  return context;
};
