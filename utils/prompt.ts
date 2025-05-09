export const promptTemplate = (text: string) => `
  You are a real estate data extraction assistant. Given the following Offering Memorandum (OM) PDF content, extract only the most relevant property details into a **single JSON object**:
  Do NOT return multiple JSONs. Do NOT repeat info. Do NOT explain anything. Always return complete valid JSON ending with a } character.


Extract specific fields from the provided OM PDF and return them in a JSON object with the structure below. For each field, provide only one accurate value, without titles or extra text (e.g., for Guidance Price, return "$143,000,000" not "Lot 34: $525,000"). If a field has multiple values (e.g., multiple lots), select the most relevant or first value. Do not include any additional text or explanations.
 Example output:
  {
    "property_name": "abc",
    "address": "xyz",
    "upload_date":"01/01/2020",
    "property_type": "Warehouse",
    "dealData": {
      "seller": "Thor Equities",
      "guidance_price": "$143,000,000",
      "guidance_price_psf": "$23.92",
      "cap_rate": "5.0%",
      "property_size": "312,000 sqft",
      "rent_psf": "$24.40",
      "land_area": "16 acres",
      "zoning": "M-2"
    }
  }

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
