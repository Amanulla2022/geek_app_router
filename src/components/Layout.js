import React from "react";
import Header from "../../src/components/Header_Footer/Header";
import Footer from "../../src/components/Header_Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
