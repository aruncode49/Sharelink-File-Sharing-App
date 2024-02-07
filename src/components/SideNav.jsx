"use client";

import { Files, Shield, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuList = [
  {
    id: 1,
    name: "Upload",
    icon: Upload,
    path: "/upload",
  },
  {
    id: 2,
    name: "Files",
    icon: Files,
    path: "/files",
  },
  {
    id: 3,
    name: "Upgrade",
    icon: Shield,
    path: "/upgrade",
  },
];

const SideNav = ({ isSideBarOpen }) => {
  const [activeIdx, setActiveIdx] = useState();

  return (
    <div
      className={`${
        !isSideBarOpen && "hidden"
      } bg-white h-[calc(100vh-64px)] w-64 md:flex flex-col fixed border-r`}
    >
      {/* menu list */}
      <div className="flex flex-col w-full">
        {menuList.map((item, index) => (
          <Link
            href={"#"}
            key={item.id}
            className={`flex gap-2 items-center p-4 px-6 hover:bg-gray-100 text-gray-600 
            ${activeIdx === index ? "text-primary bg-blue-50" : null} `}
            onClick={() => setActiveIdx(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
