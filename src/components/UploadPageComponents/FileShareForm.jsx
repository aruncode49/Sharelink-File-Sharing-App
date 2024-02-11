"use client";

import { CopyIcon } from "lucide-react";
import React, { useState } from "react";

const FileShareForm = ({ file }) => {
  const [passwordEnable, setPasswordEnable] = useState(false);

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
            className=" border border-gray-300 text-gray-500 p-3 w-full rounded-md text-lg"
            type="text"
            value={file?.shortUrl}
            readOnly={true}
          />
          <span className="absolute right-0 p-2 cursor-pointer text-gray-500 bg-white mr-1">
            <CopyIcon />
          </span>
        </div>
      </div>

      {/* PASSWORD FIELD */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-lg">
          <input
            className="w-4 h-4 cursor-pointer text-lg"
            name="password"
            type="checkbox"
            onChange={(e) => setPasswordEnable(e.target.checked)}
          />
          <label
            className="text-left text-gray-500 font-medium text-lg"
            htmlFor="password"
          >
            Enable Password?
          </label>
        </div>
        {/* password input */}
        {passwordEnable && (
          <div className="flex gap-3 ">
            <input
              className=" border border-gray-300 p-3 w-full rounded-md text-lg"
              type="password"
              placeholder="Password"
            />
            <button className="bg-primary hover:bg-blue-700 px-5 text-lg rounded-md text-white">
              Save
            </button>
          </div>
        )}
      </div>

      {/* send file to email */}
      <div className="flex flex-col gap-1 text-left  border border-gray-300 p-3 rounded-lg">
        <label className="text-gray-500 font-medium text-lg" htmlFor="email">
          Send File to Email
        </label>
        <input
          className=" border border-gray-300 p-3 w-full rounded-md text-lg"
          type="email"
          placeholder="example@gmail.com"
        />
        <button className="bg-primary hover:bg-blue-700 p-3 mt-2 text-lg rounded-md text-white">
          Send Email
        </button>
      </div>
    </div>
  );
};

export default FileShareForm;
