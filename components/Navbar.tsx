import * as React from "react";
import Link from "next/link";

// NAVBAR
const Navbar: React.FunctionComponent = () => (
  <header className="border-b w-full py-2">
    <nav className="flex justify-between px-4">
      <div>
        <Link href="/">
          <a className="text-2xl font-semibold">Maxime Salomon</a>
        </Link>
      </div>
      <div>
        <Link href="/blog">
          <a className="">Blog</a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
