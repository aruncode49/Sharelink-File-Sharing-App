import { CopyIcon } from "lucide-react";
import React from "react";

const FileShareForm = ({ file }) => {
  return (
    <div className="mt-10 flex flex-col w-full gap-6">
      {/* SHORT URL */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="short-url"
          className="text-left text-gray-500 font-medium text-lg"
        >
          Short Url
        </label>
        <div className="relative flex items-center">
          <input
            className=" border border-gray-300 p-3 w-full rounded-md text-lg"
            type="text"
            value={file?.shortUrl}
          />
          <span className="absolute right-0 pr-3 cursor-pointer text-gray-500 p-1">
            <CopyIcon />
          </span>
        </div>
      </div>

      {/* PASSWORD FIELD */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-lg">
          <input className="w-4 h-4" name="password" type="checkbox" />
          <label
            className="text-left text-gray-500 font-medium text-lg"
            htmlFor="password"
          >
            Enable Password?
          </label>
        </div>
        {/* password input */}
        <div className="flex gap-3 ">
          <input
            className=" border border-gray-300 p-3 w-full rounded-md text-lg"
            type="password"
          />
          <button className="bg-primary px-5 text-lg rounded-md text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileShareForm;
