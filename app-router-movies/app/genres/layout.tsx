import SideBar from "@/components/SideBar";
import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row debug">
      <SideBar className="debug" options={["a", "b", "c"]} />
      <div>{children}</div>
    </div>
  );
}

