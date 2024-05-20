import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header
      className={cn(
        "h-12 bg-stone-700 text-white",
        "flex flex-row items-center px-4"
      )}
    >
      <Link href="/">
        <div id="logo" className="font-extrabold text-xl text-white mr-4">
          movies
        </div>
      </Link>
    </header>
  );
}
