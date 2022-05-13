import { Link } from "react-router-dom";
import styled from "styled-components";
import Guy from "../styles/guy.jpg";
import Media from "../styles/media.jpg";

const MainDiv = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-evenly;
  padding: 43.4236px 20px;

  max-height: 79vh;

  h1 {
    font-weight: 900;
    font-size: 50px;
    width: 100%;
  }
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 70px;

  color: #555555;
  span {
    /* color: #ff5a5f; */

    background: linear-gradient(
      90deg,
      rgba(131, 85, 233, 1) 0%,
      rgba(255, 90, 95, 1) 62%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-size: 25px;
  }

  /* SEE JOBS BUTTON */
  .button-56 {
    align-items: center;
    background-color: #ff5a5f;
    /* background-color: #fee6e3; */
    border: 2px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: White;
    /* color: #111; */
    cursor: pointer;
    display: flex;
    font-family: Nunito, sans-serif;
    font-size: 16px;
    height: 48px;
    justify-content: center;
    line-height: 24px;
    max-width: 100%;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-56:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  .button-56:hover:after {
    transform: translate(0, 0);
  }

  .button-56:active {
    background-color: #ffdeda;
    outline: 0;
  }

  .button-56:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }

  .link {
    text-decoration: none;
  }
`;
const TrustedDiv = styled.div``;
const RightDiv = styled.div`
  max-height: 90vh;
  img {
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Home = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <h1>
          Find Your Dream <br />
          <span>Remote Job</span> In One Place
        </h1>
        <p>
          Looking for a job? Remotely is the best open source platform to find
          remote jobs for FREE!
        </p>
        <Link className="link" to="/search">
          <button className="button-56">SEE JOBS!</button>
        </Link>

        <TrustedDiv>
          <p>Trusted by:</p>
          <img src={Media} alt="guy"></img>
        </TrustedDiv>
      </LeftDiv>
      <RightDiv>
        <img src={Guy} alt="guy"></img>
      </RightDiv>
    </MainDiv>
  );
};

export default Home;
