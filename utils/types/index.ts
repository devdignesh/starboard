import { iconMap } from "../data";

export interface SaleComparable {
  image: string;
  address: string;
  sf: string;
  pp: string;
  owner: string;
  tenant: string;
}

export interface Insight {
  text: string;
}

export interface Insight {
  text: string;
  link?: {
    url: string;
    label: string;
  };
}

export interface DealDetail {
  title: string;
  value: string;
  iconName: keyof typeof iconMap;
}


