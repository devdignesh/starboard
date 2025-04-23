import { IconName, iconsMap } from "../data";

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

export type DealDetail = {
  title: string;
  iconName: keyof typeof iconsMap; // ensures correct icon key
  value: string;
};

export type PropertyData = {
  property_name: string;
  address: string;
  upload_date: string;
  property_type: string;
  dealData: {
    seller: string;
    guidance_price: string;
    guidance_price_psf: string;
    cap_rate: string;
    property_size: string;
    rent_psf: string;
    land_area: string;
    zoning: string;
  };
};

export interface StaticDealDetail {
  title: string;
  iconName: IconName;
  value: string;
}


