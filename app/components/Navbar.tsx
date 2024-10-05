import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between py-5 max-w-2xl mx-auto px-4">
      <a href="/" className="font-bold text-3xl">
        Adeola&nbsp;<span className="text-primary">Blog</span>
      </a>

      <ModeToggle />
    </nav>
  );
}
