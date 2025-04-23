import {
  UserRound,
  CircleDollarSign,
  Percent,
  Ruler,
  Map,
  Building,
  DollarSign,
  BarChart,
  TrendingUp,
  MapPin,
  Users,
  Briefcase,
  ArrowUpCircle,
  Columns,
  Warehouse,
  Car,
  Calendar,
  DoorOpen,
  LucideIcon,
} from "lucide-react";
import {  DealDetail, Insight, SaleComparable, StaticDealDetail } from "./types"; 

export const iconMap = {
  UserRound,
  CircleDollarSign,
  Percent,
  Ruler,
  Map,
  Building,
  ArrowUpCircle,
  Columns,
  Warehouse,
  Car,
  Calendar,
  DoorOpen, 
  DollarSign,
  BarChart,
  TrendingUp, 
  MapPin,
  Users, 
  Briefcase,
};
export type IconName = keyof typeof iconMap;

export const NavItems = [
  { label: "Deal Overview", href: "/" },
  { label: "Workshop", href: "/" },
  { label: "Pipeline", href: "/" },
  { label: "Settings", href: "/" },
];

export const iconsMap: Record<string, LucideIcon> = {
  seller: UserRound,
  guidance_price: CircleDollarSign,
  guidance_price_psf: CircleDollarSign,
  cap_rate: Percent,
  property_size: Ruler,
  rent_psf: Ruler,
  land_area: Map,
  zoning: Building,
  clear_heights:ArrowUpCircle,
};


export const dealData: DealDetail[] = [
  {
    title: "Seller",
    iconName: "UserRound",
    value: "Thor Equities",
  },
  {
    title: "Guidance Price",
    iconName: "CircleDollarSign",
    value: "$143,000,000",
  },
  {
    title: "Guidance Price PSF",
    iconName: "CircleDollarSign",
    value: "$23.92",
  },
  {
    title: "Cap Rate",
    iconName: "Percent",
    value: "5.0%",
  },
  {
    title: "Property Size",
    iconName: "Ruler",
    value: "312,000 sqft",
  },
  {
    title: "Land Area",
    iconName: "Map",
    value: "16 acres",
  },
  {
    title: "Zoning",
    iconName: "Building",
    value: "M-2",
  },
];

export const insightsData: Insight[] = [
  {
    text: "Jake Klein viewed this deal in 2019, but decided not to proceed due to lack of potential upside.",
    link: {
      url: "",
      label: "lack of potential upside",
    },
  },
  {
    text: "On 10/19/2021, your firm bid on 55 Bay St, Brooklyn, NY 11231, a larger site also occupied by Amazon 0.5 miles away. Brookfield won the deal for $45M, cap rates in the area have compressed 45bps since then.",
    link: {
      url: "",
      label: "55 Bay St, Brooklyn, NY 11231",
    },
  },
  {
    text: "On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion pricing has driven renewed demand for infill industrial in Brooklyn.",
    link: {
      url: "",
      label: "renewed demand for infill industrial in Brooklyn.",
    },
  },
];

export const saleComparablesData: SaleComparable[] = [
  {
    image: "/images/property/four.png",
    address: "123 Bay St, Brooklyn, NY",
    sf: "132,930",
    pp: "$41,903,580",
    owner: "Bay Realty",
    tenant: "Amazon",
  },
  {
    image: "/images/property/five.png",
    address: "456 Shore Rd, Brooklyn, NY",
    sf: "98,500",
    pp: "$32,150,000",
    owner: "Coastline LLC",
    tenant: "Walmart",
  },
  {
    image: "/images/property/six.png",
    address: "789 Harbor Ln, Brooklyn, NY",
    sf: "150,000",
    pp: "$50,000,000",
    owner: "Harbor Group",
    tenant: "Target",
  },
  {
    image: "/images/property/seven.png",
    address: "123 Bay St, Brooklyn, NY",
    sf: "132,930",
    pp: "$41,903,580",
    owner: "Bay Realty",
    tenant: "Amazon",
  },
];

export const supplypipelineData: SaleComparable[] = [
  {
    image: "/images/property/eight.png",
    address: "123 Bay St, Brooklyn, NY",
    sf: "132,930",
    pp: "$41,903,580",
    owner: "Bay Realty",
    tenant: "Amazon",
  },
  {
    image: "/images/property/nine.png",
    address: "456 Shore Rd, Brooklyn, NY",
    sf: "98,500",
    pp: "$32,150,000",
    owner: "Coastline LLC",
    tenant: "Walmart",
  }, 
  
];
 
 
export const assetLevelData: StaticDealDetail[] = [
  {
    iconName: "ArrowUpCircle",
    title: "Clear Heights",
    value: "36'",
  },
  {
    iconName: "UserRound",
    title: "Tenant",
    value: "Amazon",
  },
  {
    iconName: "Columns",
    title: "Column Spacing",
    value: "63’ x 54’",
  },
  {
    iconName: "Warehouse",
    title: "Seaward Area",
    value: "357,151 sqft",
  },
  {
    iconName: "Car",
    title: "Parking Spaces",
    value: "393",
  },
  {
    iconName: "Calendar",
    title: "Year Built",
    value: "2021",
  },
  {
    iconName: "DoorOpen",
    title: "# of Dock Doors",
    value: "28",
  },
  {
    iconName: "Percent",
    title: "Occupancy Rate",
    value: "100%",
  },
];

export const projectedFinancialMetricsData: StaticDealDetail[] = [
  {
    iconName: "Percent",
    title: "IRR",
    value: "13.9%",
  },
  {
    iconName: "DollarSign",
    title: "Equity Multiple",
    value: "2.3x",
  },
  {
    iconName: "BarChart",
    title: "Return on Equity",
    value: "18.5%",
  },
  {
    iconName: "TrendingUp",
    title: "Return on Cost",
    value: "19.2%",
  },
] 

export const keyAssumptionsData: StaticDealDetail[] = [
  {
    iconName: "DollarSign",
    title: "Exit Price",
    value: "$195,000,000",
  },
  {
    iconName: "Percent",
    title: "Exit Cap Rate",
    value: "5.0%",
  },
  {
    iconName: "TrendingUp",
    title: "Rental Growth",
    value: "3.5%",
  },
  {
    iconName: "Calendar",
    title: "Hold Period",
    value: "16 years",
  },
];

export const marketAnalysisData: StaticDealDetail[] = [
  {
    iconName: "MapPin",
    title: "Nearest Urban Center",
    value: "Brooklyn, NY",
  },
  {
    iconName: "Users",
    title: "Population Growth Rate",
    value: "1.2%",
  },
  {
    iconName: "DollarSign",
    title: "Median Household Income",
    value: "$76,912",
  },
  {
    iconName: "Briefcase",
    title: "Unemployment Rate",
    value: "7.4%",
  },
];
export const leaseAnalysisData: StaticDealDetail[] = [
  {
    iconName: "DollarSign",
    title: "Rent PSF",
    value: "$24.40",
  },
  {
    iconName: "Calendar",
    title: "WALT",
    value: "13 Yrs (Sep 37)",
  },
  {
    iconName: "TrendingUp",
    title: "Rent Escalations",
    value: "3%",
  },
  {
    iconName: "Percent",
    title: "Mark-to-Market Opportunity",
    value: "30%+",
  },
];
