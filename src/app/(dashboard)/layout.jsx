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
        {children}
      </div>
    </div>
  );
};

export default layout;
