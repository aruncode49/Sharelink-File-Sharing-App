import Image from "next/image";
import React from "react";

const FileImagePreview = ({ file }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-blue-400 shadow-md w-full">
        <Image src={file.fileUrl} alt="file-image" width={150} height={100} />
        <h1 className="text-lg font-medium">{file.fileName}</h1>
        <p className="text-gray-500">
          {file.fileType} / {(file.fileSize / 1024 / 1024).toFixed(2)}MB
        </p>
      </div>
    </div>
  );
};

export default FileImagePreview;
