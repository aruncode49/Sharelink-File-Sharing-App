import { AlertCircle } from "lucide-react";
import React from "react";

const Error = ({ msg }) => {
  return (
    <div className="mt-5 p-3 flex gap-2 items-center bg-red-500 text-white rounded-md md:w-[500px] mx-auto text-sm">
      <AlertCircle size={16} />
      {msg}
    </div>
  );
};

export default Error;
