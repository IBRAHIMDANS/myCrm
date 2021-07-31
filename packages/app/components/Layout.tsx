import React from "react";
import { Footer, Header } from "./index";
import styled from "styled-components";
const Root= styled.main``

const Layout = ({ children }: any) => {

  const Layout = children.type.layout ;

  if (Layout === null) {
    return <main>{children}</main>;
  }
  return (
    <>
      <Header/>
      <Root>{children}</Root>
      <Footer/>
    </>
  );
};

export default Layout;
