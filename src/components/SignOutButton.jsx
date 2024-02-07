"use client";

import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-1 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full"
      onClick={() => signOut(() => router.push("/"))}
    >
      <LogOut size={18} />
    </button>
  );
};

export default SignOutButton;
