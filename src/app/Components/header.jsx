import React from "react";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa"; // Correct icon import
import { FaCircleInfo } from "react-icons/fa6"; // FaCircleInfo is part of "react-icons/fa"

import Link from "next/link"; // Ensure you're using "next/link" for navigation in Next.js

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={FaHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FaCircleInfo} />
      </div>
      <div className="text-center mt-4">
        <Link href="/">
          <h2>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
            <span className="text-xl hidden sm:inline "> Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
