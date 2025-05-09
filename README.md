
## Project Description

The goal is to extract structured data points such as property name, address, tenant details, lease terms, financial metrics, and more. This solution simplifies the data extraction process by converting unstructured textual data from PDFs into a structured JSON format.

---

#### [Demo URL](https://www.loom.com/share/1e7ab872a91047bb8ce143bcbaf1df46?sid=5a9ad6b0-41f7-4a4c-8df0-a424e46cfc53) 🔗

## Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/devdignesh/starboard
   cd starboard
   ```
2. **Setup `.env` file**
   ```bash
    OPENAI_API_KEY=""
    ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run development server**
   ```bash
   npm run dev
   ```

## Approach

### Input -> Output Process

#### 1. Read PDF
I've created Fileupload component that accepts PDF file. After successfully uploaded file and extract raw text from the uploaded PDF using `pdf-parse`. 

#### 2. Prepare AI Prompt
   - Created clear and structured prompt that tells the OpenAI model to extract: including but not limited to:
     - Property Name
     - Address
     - Tenant Name
     - Rent Per Square Foot (PSF)
     - Lease Term
     - Property Size
     - Assumable Financing
     - Seller Details, etc.
   - The output is structured as a JSON object that organizes this data into fields like:
     - `property_name`
     - `address`
     - `tenant`
     - `rent_psf`
     - `lease_term`
     - `guidance_price`, etc.

 #### 3. Call OpenAI API
- Use gpt-4.
- Send extracted text + prompt to OpenAI.
- Receive structured JSON data.

#### 4. Clean & Validate
- Parse OpenAI output.
- Handle missing fields, fallback logic, or default values.

#### 5. Connect to Frontend
- Pass JSON data to frontend via context API.
- Feed structured data into existing card layout.


