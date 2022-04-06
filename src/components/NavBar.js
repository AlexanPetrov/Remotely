import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../styles/logo.jpg";

const MainDiv = styled.div`
  font-family: "Nunito", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 42px;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  .logo {
    height: 40px;
  }
`;
const MiddleBtnDiv = styled.div`
  .mid_btn {
    padding: 10px;
  }
`;
const PostBtnDiv = styled.div``;

const NavBar = () => {
  return (
    <MainDiv>
      <Link to="/">
        <LogoDiv>
          <div>
            <img src={Logo} alt="logo"></img>
          </div>
          <div>Remotely</div>
        </LogoDiv>
      </Link>
      <MiddleBtnDiv>
        <Link className="mid_btn" to="/about">
          About Us
        </Link>
        <Link className="mid_btn" to="/contact">
          Contact Us
        </Link>
      </MiddleBtnDiv>
      <PostBtnDiv>
        <Link to="/post">Post Job</Link>
      </PostBtnDiv>
    </MainDiv>
  );
};

export default NavBar;
