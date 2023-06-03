import React from "react";
import NavBar from "./nav-bar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
