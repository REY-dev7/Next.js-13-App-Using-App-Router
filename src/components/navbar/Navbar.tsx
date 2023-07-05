import Link from "next/link";
import React from "react";
import { links } from "./navLink";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">As-Liz site</Link>
      <div className="">
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="mx-2">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
