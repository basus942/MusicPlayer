import NavbarCustom from "../components/Navbar";

import React from "react";

const Layout = (props) => {
  return (
    <>
      <NavbarCustom />
      {props.children}
    </>
  );
};

export default Layout;
