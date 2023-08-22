import React from "react";
import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children} 
      </main>
    </div>
  );
};

export default Layout;

