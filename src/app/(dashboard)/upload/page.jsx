import UploadForm from "@/components/UploadForm";
import React from "react";

const UploadPage = () => {
  return (
    <div className="p-4 px-4 md:px-28">
      <div className="text-center text-xl m-5 ">
        Start <strong className="text-primary">Uploading</strong> File and
        <strong className="text-primary"> Share</strong> it
      </div>
      <UploadForm />
    </div>
  );
};

export default UploadPage;
