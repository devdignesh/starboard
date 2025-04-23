import React from "react";
import { Download, Share2 } from "lucide-react";

const ExportOptions: React.FC = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  const handleShareLink = async() => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="gap-y-2 gap-x-2 flex min-lg:flex-col">
      <button
        onClick={handleDownloadPDF}
        className="bg-zinc-300 flex items-center justify-center gap-x-2 cursor-pointer w-full py-3 rounded-lg hover:bg-zinc-400/70 duration-100"
      >
        <Download size={20} />
        Download PDF
      </button>
      <button
        onClick={handleShareLink}
        className="bg-black text-white flex items-center justify-center  gap-x-2 cursor-pointer w-full py-3 rounded-lg hover:bg-zinc-700 duration-100"
      >
        <Share2 size={20} />
        Share Link
      </button>
    </div>
  );
};

export default ExportOptions;