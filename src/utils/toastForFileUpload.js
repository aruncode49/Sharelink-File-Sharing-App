import toast from "react-hot-toast";

export async function toastForPromise(promise) {
  toast.promise(
    promise,
    {
      loading: "Password updating..",
      success: "Password saved successfully",
      error: "Failed to save password",
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
