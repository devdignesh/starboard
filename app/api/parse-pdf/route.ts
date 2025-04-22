import { NextRequest, NextResponse } from 'next/server';
import formidable, { File } from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import pdfParse from 'pdf-parse';

interface DealData {
  dealDetails: {
    tenant: string | null;
    rentPsf: number | null;
    location: string | null;
    lxd: string | null;
  };
  assetLevelData: {
    propertySize: number | null; 
  };
  missingFields: string[]; 
}

// handle POST requests for PDF uploads and parsing
export async function POST(req: NextRequest) {
  const form = new formidable.IncomingForm();
  const uploadDir = path.join(process.cwd(), 'uploads');
  form.uploadDir = uploadDir;
  form.keepExtensions = true;

  // ensure upload directory exists
  try {
    await fs.mkdir(uploadDir, { recursive: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create upload directory' }, { status: 500 });
  }

  // parse the incoming form data
  const formData = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  const uploadedFile = formData.files.pdf as File;
  if (!uploadedFile || !uploadedFile.filepath) {
    return NextResponse.json({ error: 'No PDF file uploaded' }, { status: 400 });
  }

  // read and parse the PDF
  try {
    const pdfBuffer = await fs.readFile(uploadedFile.filepath);
    const pdfData = await pdfParse(pdfBuffer);

    // clean up: Delete the uploaded file
    await fs.unlink(uploadedFile.filepath);

    // extract specific fields from the text
    const text = pdfData.text;
    const extractedData: DealData = {
      dealDetails: {
        tenant: null,
        rentPsf: null,
        location: null,
        lxd: null,
      },
      assetLevelData: {
        propertySize: null,
      },
      missingFields: [],
    };

    // Tenant 
    const tenantMatch = text.match(/100%\s*NET\s*LEASED\s*TO\s*([^\n]+)/i);
    if (tenantMatch) {
      extractedData.dealDetails.tenant = tenantMatch[1].trim().replace(/Human$/, '').replace(/amazon/i, 'Amazon');
    } else {
      extractedData.missingFields.push('tenant');
    }

    // Rent PSF 
    const rentPsfMatch = text.match(/Weighted\s*Average:\s*\$([\d.]+)/i);
    if (rentPsfMatch) {
      extractedData.dealDetails.rentPsf = parseFloat(rentPsfMatch[1]);
    } else {
      extractedData.missingFields.push('rentPsf');
    }
    
    // LXD 
    const lxdMatch = text.match(/LXD\s*([^\n]+)/i);
    if (lxdMatch) {
      extractedData.dealDetails.lxd = lxdMatch[1].trim();
    } else {
      extractedData.missingFields.push('lxd');
    }

    // Property Size 
    const propertySizeMatch = text.match(/Total:\s*([\d,]+)/i);
    if (propertySizeMatch) {
      extractedData.assetLevelData.propertySize = parseInt(propertySizeMatch[1].replace(/,/g, ''));
    } else {
      extractedData.missingFields.push('propertySize');
    }

    // return structured data
    return NextResponse.json({
      message: 'PDF parsed and fields extracted successfully',
      data: extractedData,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error parsing PDF' }, { status: 500 });
  }
}