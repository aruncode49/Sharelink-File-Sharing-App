"use client";

import UploadForm from "@/components/UploadForm";
import React, { useState } from "react";
import { app } from "@/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const UploadPage = () => {
  const storage = getStorage(app);

  const [progress, setProgress] = useState(0);

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
          });
      });
    } catch (error) {
      console.log(error);
    }
  }

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
