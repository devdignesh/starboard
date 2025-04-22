"use client";

import {
  AlertCircleIcon,
  PaperclipIcon,
  UploadIcon,
  XIcon,
} from "lucide-react";

import { formatBytes, useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";

type FileUploaderProps = {
  setIsFileUploaded: React.Dispatch<React.SetStateAction<boolean>>; // Type for the setter function
};

export default function FileUploader({ setIsFileUploaded }: FileUploaderProps) {
  const maxSize = 10 * 1024 * 1024; // 10MB

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    maxSize, 
  });

  const file = files[0];

  const handleSubmit = async () => {
    const selectedFile = file?.file;

    if (!(selectedFile instanceof File)) {
      alert("Please select a valid file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); 

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      console.log("res", res)
      if (res.ok) {
        alert("File uploaded successfully!");
      } else {
        const error = await res.text();
        alert("Upload failed: " + error);
      }
      setIsFileUploaded(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong during upload.");
    }
  };

  return (
    <div className="flex flex-col gap-2 max-w-2xl mx-auto w-full ">
      {/* Drop area */}
      <div
        role="button"
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        className="border-input hover:bg-accent/50 cursor-pointer data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[input:focus]:ring-[3px]"
      >
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload file"
          disabled={Boolean(file)}
          accept="application/pdf"
        />

        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <UploadIcon className="size-4 opacity-60" />
          </div>
          <p className="mb-1.5 text-sm font-medium">Upload file</p>
          <p className="text-muted-foreground text-xs">
            Drag & drop or click to browse (max. {formatBytes(maxSize)})
          </p>
        </div>
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      {/* File list */}
      {file && (
        <div className="space-y-2">
          <div
            key={file.id}
            className="flex items-center justify-between gap-2 rounded-xl border px-4 py-2"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <PaperclipIcon
                className="size-4 shrink-0 opacity-60"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium">
                  {file.file.name}
                </p>
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent cursor-pointer"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove file"
            >
              <XIcon className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <Button
            size="default"
            className="cursor-pointer w-full"
            onClick={handleSubmit}
            aria-label="Remove file"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
