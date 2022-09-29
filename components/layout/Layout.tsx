import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto min-h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
