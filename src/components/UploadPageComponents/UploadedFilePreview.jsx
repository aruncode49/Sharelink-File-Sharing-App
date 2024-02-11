import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import React from "react";
import FileImagePreview from "./FileImagePreview";
import FileShareForm from "./FileShareForm";

const UploadedFilePreview = ({ file }) => {
  return (
    <div className="flex flex-col  p-5 md:px-16 text-center mt-10">
      <Link className="flex items-center gap-2" href={"/upload"}>
        <ArrowLeftSquare />
        Go to Upload
      </Link>

      <div className="mt-10 md:mt-0 flex flex-col md:flex-row md:items-center md:gap-10">
        {/* file image preview */}
        <FileImagePreview file={file} />

        {/* file share form */}
        <FileShareForm file={file} />
      </div>
    </div>
  );
};

export default UploadedFilePreview;
