import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const layoutDasboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <Menu />
      </div>
      <div className="flex-3">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layoutDasboard;
