"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const FilePreview = ({ params }) => {
  const [file, setFile] = useState(null);

  async function getFileData(id) {
    const fileRef = doc(db, "uploadedFile", id);
    const file = await getDoc(fileRef);

    if (file.exists()) {
      setFile(file.data());
      console.log(file.data());
    } else {
      console.log(`File not found`);
    }
  }

  useEffect(() => {
    const fileId = params?.fileId;
    getFileData(fileId);
    console.log(fileId);
  }, []);

  return file ? <div>File Preview</div> : <div>Loading.....</div>;
};

export default FilePreview;
