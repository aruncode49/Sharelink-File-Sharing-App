"use client";

import { useState } from "react";
import Error from "./Error";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ hanldeUploadFile, progress }) => {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const onFileSelect = (file) => {
    if (file && file.size > 2000000) {
      setErrorMsg("Maximum file upload size is 2 MB");
      setFile(null);
      return;
    }
    setErrorMsg("");
    setFile(file);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full mt-6">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 duration-200 border-dashed rounded-lg cursor-pointer "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-primary "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-xl ">
              <span className="font-semibold text-gray-600">
                Click to upload
              </span>{" "}
              or <strong className="text-primary">drag</strong> and{" "}
              <strong className="text-primary">drop</strong>
            </p>
            <p className="text-xs text-gray-500 ">
              SVG, PNG, JPG or GIF (Max Size : 2MB)
            </p>
          </div>
          <input
            onChange={(e) => onFileSelect(e.target.files[0])}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>

      {/* Error message */}
      {errorMsg ? <Error msg={errorMsg} /> : null}

      {/* file preview */}
      {file && <FilePreview file={file} closeFile={() => setFile(null)} />}

      {/* upload button */}
      <button
        onClick={() => hanldeUploadFile(file)}
        disabled={!file}
        className="w-[120px] md:w-[150px] p-2 rounded-full bg-primary hover:bg-blue-700 text-white mt-5 disabled:bg-gray-400 disabled:cursor-not-allowed "
      >
        Upload
      </button>

      {/* progress bar */}
      {progress > 0 && <ProgressBar progress={progress} />}
    </div>
  );
};

export default UploadForm;
