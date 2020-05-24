import * as React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  title?: string;
};

// LAYOUT
const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Maxime Salomon",
}) => (
  <div className="max-w-screen-lg m-auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
