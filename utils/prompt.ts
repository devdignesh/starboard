export const promptTemplate = (text: string) => `
  You are a real estate data extraction assistant. Given the following Offering Memorandum (OM) PDF content, extract only the most relevant property details into a **single JSON object**:
  Do NOT return multiple JSONs. Do NOT repeat info. Do NOT explain anything. Always return complete valid JSON ending with a } character.

  JSON fields:
  - property_name
  - address
  - upload_date
  - property_type
  - dealData (object with key-value pairs for each field):
    - seller
    - guidance_price
    - guidance_price_psf
    - cap_rate
    - property_size
    - rent_psf  
    - land_area
    - zoning

  Extract the data in a structured format, even if some fields are missing, use "N/A" for missing fields.

  ### Input: 
  ${text}

  ### Output:
  \`\`\`json
  {
    "property_name": "",
    "address": "",
    "upload_date":"",
    "property_type": "",
    "dealData": {
      "seller": "",
      "guidance_price": "",
      "guidance_price_psf": "",
      "cap_rate": "",
      "property_size": "",
      "rent_psf": "",
      "land_area": "",
      "zoning": ""
    }
  }
  \`\`\`
`;
