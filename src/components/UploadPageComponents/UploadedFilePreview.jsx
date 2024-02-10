import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import React from "react";
import FileImagePreview from "./FileImagePreview";
import FileShareForm from "./FileShareForm";

const UploadedFilePreview = ({ file }) => {
  return (
    <div className="flex flex-col p-5 text-center">
      <Link className="flex items-center gap-2" href={"/upload"}>
        <ArrowLeftSquare />
        Go to Upload
      </Link>

      <div className="mt-10 flex flex-col md:flex-row">
        {/* file image preview */}
        <FileImagePreview file={file} />

        {/* file share form */}
        <FileShareForm file={file} />
      </div>
    </div>
  );
};

export default UploadedFilePreview;
