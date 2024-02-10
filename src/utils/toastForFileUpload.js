import toast from "react-hot-toast";

export function toastForFileUpload(progress, promise) {
  if (progress == 0) {
    toast.promise(
      promise,
      {
        loading: "Uploading file...",
        success: "File uploaded successfully",
        error: "Failed to upload file",
      },
      {
        success: {
          duration: 2000, // Duration of success toast message
        },
        error: {
          duration: 2000, // Duration of error toast message
        },
      }
    );
  }
}
