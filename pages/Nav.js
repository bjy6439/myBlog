import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NabBar>
      <NavBtn>
        <a href="/Main">Blog</a>
      </NavBtn>
      <NavBtn>
        <a href="/Main">Admin</a>
      </NavBtn>
    </NabBar>
  );
};

export default Nav;

const NabBar = styled.div`
  width: 100vw;
  height: 50px;
  background-color: black;
  color: white;
  line-height: 50px;
`;

const NavBtn = styled.button`
  margin-left: 20px;
  font-style: none;
  border: none;
  background-color: black;
  a {
    color: white;
    text-decoration: none;
  }
`;
