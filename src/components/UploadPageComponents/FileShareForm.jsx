"use client";

import { CopyIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const FileShareForm = ({ file }) => {
  const [passwordEnable, setPasswordEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const password = useRef();
  const email = useRef();

  const { user } = useUser();

  // update password in database
  async function savePasswordInDatabase() {
    try {
      if (password.current.value == "")
        return toast.error("Please add a password");
      setLoading(true);
      const docRef = doc(db, "uploadedFile", file?.id);
      await updateDoc(docRef, {
        password: password.current.value,
      });
      toast.success("Password Update Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
      password.current.value = "";
    }
  }

  // send email
  async function handleSendEmail(e) {
    e.preventDefault();
    if (email.current.value == "") return toast.error("Please add an email");
    try {
      setLoading(true);
      const data = {
        emailToSend: email?.current?.value,
        fileName: file?.fileName,
        fileSize: file?.fileSize,
        fileType: file?.fileType,
        userName: user?.fullName,
        shortUrl: file?.shortUrl,
      };
      const res = await axios.post("/api/send", data);
      console.log(res);
      if (res?.data) {
        toast.success("File send successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

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
              ref={password}
            />
            <button
              onClick={savePasswordInDatabase}
              className="bg-primary hover:bg-blue-700 px-5 text-lg rounded-md text-white"
            >
              {loading ? <>Saving...</> : <>Save</>}
            </button>
          </div>
        )}
      </div>

      {/* send file to email */}
      <form
        onSubmit={handleSendEmail}
        className="flex flex-col gap-1 text-left  border border-gray-300 p-3 rounded-lg"
      >
        <label className="text-gray-500 font-medium text-lg" htmlFor="email">
          Send File to Email
        </label>
        <input
          className=" border border-gray-300 p-3 w-full rounded-md text-lg"
          type="email"
          placeholder="example@gmail.com"
          ref={email}
        />
        <button className="bg-primary hover:bg-blue-700 p-3 mt-2 text-lg rounded-md text-white">
          {loading ? <>Sending...</> : <>Send Email</>}
        </button>
      </form>
    </div>
  );
};

export default FileShareForm;
