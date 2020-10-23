import * as React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/navbar";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="_main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
