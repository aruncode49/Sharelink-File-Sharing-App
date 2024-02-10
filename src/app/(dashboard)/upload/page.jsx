"use client";

import UploadForm from "@/components/UploadForm";
import React, { useState, useEffect } from "react";
import { app } from "@/firebase";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "@/utils/generateRandomString";
import { useRouter } from "next/navigation";

const UploadPage = () => {
  const [progress, setProgress] = useState(0);
  const [fileId, setFileId] = useState("");

  const { user } = useUser();
  const router = useRouter();
  const storage = getStorage(app);

  // upload file on firebase storage
  function uploadFile(file) {
    try {
      console.log(file);

      const storageRef = ref(storage, `files/${file?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file, file.type);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);

        progress == 100 &&
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            toast.success("File Uploaded Successfully");
            saveFileInfo(file, downloadURL);
          });
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // save file info in database
  async function saveFileInfo(file, fileUrl) {
    try {
      const id = generateRandomString().toString();
      await setDoc(doc(db, "uploadedFile", id), {
        id,
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
        password: "",
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + id,
      });
      setFileId(id);
    } catch (error) {
      console.log(error);
      toast.error("Error while saving info in database");
    }
  }

  useEffect(() => {
    progress == 100 &&
      setTimeout(() => {
        router.push(`/file-preview/${fileId}`);
      }, 2000);
  }, [progress == 100]);

  return (
    <div className="p-4 px-4 md:px-28">
      <div className="text-center text-xl m-5 ">
        Start <strong className="text-primary">Uploading</strong> File and
        <strong className="text-primary"> Share</strong> it
      </div>
      <UploadForm
        hanldeUploadFile={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
};

export default UploadPage;
