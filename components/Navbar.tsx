import * as React from "react";
import Link from "next/link";

const Navbar: React.FunctionComponent = () => (
  <header>
    <nav className="py-4">
      <Link href="/">
        <a className="text-2xl font-semibold">maximesalomon.com</a>
      </Link>
    </nav>
  </header>
);

export default Navbar;
