import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Index/Main";
import Footer from "../components/Footer/Index/Main";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
