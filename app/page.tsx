"use client";
 
import DealOverivew from "@/components/deal-overview";
import FileUploader from "@/components/file-uploader";
import { useState } from "react";

export default function Home() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto px-2 mt-5  h-screen items-center justify-center">
        {!isFileUploaded ? (
          <div className="flex  items-center h-full w-full">
            <FileUploader setIsFileUploaded={setIsFileUploaded} />
          </div>
        ) : (
          <DealOverivew />
        )}
      </div>
    </>
  );
}
