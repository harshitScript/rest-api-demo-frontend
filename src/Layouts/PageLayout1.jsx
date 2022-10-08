import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { memo } from "react";

const PageLayout1 = ({ children }) => {
  return (
    <>
      <Navbar />
      <AppBody>{children}</AppBody>
    </>
  );
};

const AppBody = styled.div`
  min-height: calc(100vh - 70px);
  overflow: auto;
`;

export default memo(PageLayout1);
