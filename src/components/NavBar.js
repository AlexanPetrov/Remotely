import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../styles/logo.jpg";

const MainDiv = styled.div`
  font-family: "Nunito", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 42px 10px;

  .link {
    text-decoration: none;
    color: black;
  }
  .mid_btn {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  .logo {
    height: 40px;
  }
`;
const CompanyName = styled.h1`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  text-decoration: none;
`;
const MiddleBtnDiv = styled.div`
  .mid_btn {
    padding: 10px;
  }
`;

const PostBtnDiv = styled.div`
  overflow: visible;

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    width: 170px;
    height: 55px;
    font-size: 18px;
    background: #fff;
    border: 2px solid;
    border-radius: 20px;
    color: #ff5a5f;
    font-family: "Nunito", sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 17.1951px;
    outline: none;
    cursor: pointer;
    transition: all 0.4s;
  }

  .btn:hover {
    box-shadow: inset 0 0 0 4px #ef476f, inset 0 0 0 8px #ffd166,
      inset 0 0 0 12px #06d6a0, inset 0 0 0 16px #118ab2;
    background: #073b4c;
    color: #fff;
  }
`;

const NavBar = () => {
  return (
    <MainDiv>
      <Link to="/" className="link">
        <LogoDiv>
          <div>
            <img src={Logo} alt="logo"></img>
          </div>
          <CompanyName>Remotely</CompanyName>
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
        <Link className="link" to="/post">
          <div className="containermain">
            <button className="btn">Post Job</button>
          </div>
        </Link>
      </PostBtnDiv>
    </MainDiv>
  );
};

export default NavBar;
