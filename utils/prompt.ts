export const promptTemplate = (text: string) => `
  You are a real estate data extraction assistant. Given the following Offering Memorandum (OM) PDF content, extract and structure the relevant real estate data. Focus on the following details:

  ### Property Information
  - Property Name
  - Property Address
  - Tenant Name
  - Rent Per Square Foot (PSF)
  - Lease Term (e.g., 5 years)
  - Property Size (in square feet)
  - Assumable Financing (if mentioned)

  ### Seller and Price Information
  - Seller
  - Guidance Price
  - Guidance Price PSF
  - Cap Rate
  - Property Size
  - Land Area
  - Zoning

  ### Comparable Sales Data
  - Sale Comparables (List of comparable properties with details like address, size, price, owner, and tenant)

  ### Asset-Level Data
  - Clear Heights
  - Tenant
  - Column Spacing
  - Seaward Area
  - Parking Spaces
  - Year Built
  - Number of Dock Doors
  - Occupancy Rate

  ### Projected Financial Metrics
  - IRR
  - Equity Multiple
  - Return on Equity
  - Return on Cost

  ### Key Assumptions
  - Exit Price
  - Exit Cap Rate
  - Rental Growth
  - Hold Period

  ### Market Analysis
  - Nearest Urban Center
  - Population Growth Rate
  - Median Household Income
  - Unemployment Rate

  ### Lease Analysis
  - Rent PSF
  - WALT (Weighted Average Lease Term)
  - Rent Escalations
  - Mark-to-Market Opportunity

  Extract the data in a structured format, even if some fields are missing, use "N/A" for missing fields.

  ### Input: 
  ${text}

  ### Output:
  {
    "property_name": "",
    "address": "",
    "tenant": "",
    "rent_psf": "",
    "lease_term": "",
    "size": "",
    "assumable_financing": "",
    "seller": "",
    "guidance_price": "",
    "guidance_price_psf": "",
    "cap_rate": "",
    "land_area": "",
    "zoning": "",
    "sale_comparables": [
      {
        "address": "",
        "sf": "",
        "pp": "",
        "owner": "",
        "tenant": ""
      }
    ],
    "asset_level_data": [
      {
        "title": "Clear Heights",
        "value": ""
      },
      {
        "title": "Tenant",
        "value": ""
      },
      {
        "title": "Column Spacing",
        "value": ""
      },
      {
        "title": "Seaward Area",
        "value": ""
      },
      {
        "title": "Parking Spaces",
        "value": ""
      },
      {
        "title": "Year Built",
        "value": ""
      },
      {
        "title": "# of Dock Doors",
        "value": ""
      },
      {
        "title": "Occupancy Rate",
        "value": ""
      }
    ],
    "projected_financial_metrics": [
      {
        "title": "IRR",
        "value": ""
      },
      {
        "title": "Equity Multiple",
        "value": ""
      },
      {
        "title": "Return on Equity",
        "value": ""
      },
      {
        "title": "Return on Cost",
        "value": ""
      }
    ],
    "key_assumptions": [
      {
        "title": "Exit Price",
        "value": ""
      },
      {
        "title": "Exit Cap Rate",
        "value": ""
      },
      {
        "title": "Rental Growth",
        "value": ""
      },
      {
        "title": "Hold Period",
        "value": ""
      }
    ],
    "market_analysis": [
      {
        "title": "Nearest Urban Center",
        "value": ""
      },
      {
        "title": "Population Growth Rate",
        "value": ""
      },
      {
        "title": "Median Household Income",
        "value": ""
      },
      {
        "title": "Unemployment Rate",
        "value": ""
      }
    ],
    "lease_analysis": [
      {
        "title": "Rent PSF",
        "value": ""
      },
      {
        "title": "WALT",
        "value": ""
      },
      {
        "title": "Rent Escalations",
        "value": ""
      },
      {
        "title": "Mark-to-Market Opportunity",
        "value": ""
      }
    ]
  }
`;
