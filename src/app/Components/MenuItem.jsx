import React from "react";
import Link from "next/link"; // Use Next.js Link component

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
      {Icon && <Icon className="text-2xl sm:hidden mx-4" />}
      <p className="hidden sm:inline my-2 text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
