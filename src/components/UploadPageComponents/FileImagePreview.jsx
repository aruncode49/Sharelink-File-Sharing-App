import Image from "next/image";
import React from "react";

const FileImagePreview = ({ file }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 md:p-20 md:px-24  rounded-xl border border-blue-300 shadow-md w-full md:mt-10">
        <Image
          src={file.fileUrl}
          alt="file-image"
          width={180}
          height={100}
          className="rounded-lg bg-gray-300 md:w-[500px]"
        />
        <h1 className="text-lg font-medium mt-3">{file.fileName}</h1>
        <p className="text-gray-500">
          {file.fileType} / {(file.fileSize / 1024 / 1024).toFixed(2)}MB
        </p>
      </div>
    </div>
  );
};

export default FileImagePreview;
