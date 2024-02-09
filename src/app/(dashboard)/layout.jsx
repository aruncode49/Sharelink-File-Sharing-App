"use client";

import SideNav from "@/components/SideNav";
import React, { useState } from "react";
import Header from "@/components/Header";

const layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div>
      <Header setIsSideBarOpen={setIsSideBarOpen} />
      <div className="flex">
        <SideNav isSideBarOpen={isSideBarOpen} />
        <div className="md:ml-64 w-full">{children}</div>
      </div>
    </div>
  );
};

export default layout;
