import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const FilePreview = ({ file, closeFile }) => {
  return (
    <div className="flex items-center  border border-blue-300 rounded-md mt-5 p-2 justify-between">
      <div className="flex gap-2 items-center">
        <Image src={"/file.png"} alt="file" width={40} height={40} />
        <div className="text-left">
          <h1 className="text-sm text-gray-600">{file?.name}</h1>
          <p className="text-xs text-gray-500 ">
            {file?.type} / {(file?.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>

      <div
        onClick={closeFile}
        className="text-red-500 cursor-pointer hover:bg-gray-100 p-1 rounded-full"
      >
        <X />
      </div>
    </div>
  );
};

export default FilePreview;
