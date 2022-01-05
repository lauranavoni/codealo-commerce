import styled from "styled-components";
import React from 'react';

const Container = styled.div`
  height: 30px;
  background-color: purple;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container> Codealo Camp </Container>;
};

export default Announcement;