import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-6 w-[70%] mx-auto h-[18px] bg-gray-300 rounded-full flex items-center relative">
      <div
        className="absolute p-1 h-[14px] bg-primary rounded-full text-xs text-white flex items-center justify-center"
        style={{ width: `${progress}%` }}
      >
        {progress.toFixed(0)}%
      </div>
    </div>
  );
};

export default ProgressBar;
