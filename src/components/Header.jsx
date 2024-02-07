"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import SignOutButton from "./SignOutButton";

const Header = ({ setIsSideBarOpen }) => {
  const { isSignedIn } = useAuth();

  return (
    <header className="bg-white w-full">
      <div className=" flex h-16  items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 border-b">
        {isSignedIn && (
          <div
            onClick={() => setIsSideBarOpen((prev) => !prev)}
            className="md:hidden cursor-pointer p-1 pl-0"
          >
            <AlignJustify />
          </div>
        )}

        <Link className="block" href="/">
          <Image src={"/logo.svg"} width={150} height={100} alt="logo image" />
        </Link>

        <nav aria-label="Global" className="hidden md:block mr-24">
          <ul className="flex items-center gap-6 text-sm ">
            <li>
              <Link
                className="text-gray-600 transition hover:text-gray-500/75"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-600 transition hover:text-gray-500/75"
                href="/"
              >
                Upload
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-600 transition hover:text-gray-500/75"
                href="/"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-600 transition hover:text-gray-500/75"
                href="/"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {!isSignedIn && (
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-primary hover:bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition"
                href="/files"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}

        {isSignedIn && (
          <div>
            <SignOutButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
