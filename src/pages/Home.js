import { Link } from "react-router-dom";
import styled from "styled-components";
import Guy from "../styles/guy.jpg";
import Media from "../styles/media.jpg";

const MainDiv = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-evenly;
  padding: 43.4236px;

  h1 {
    font-weight: 900;
    font-size: 50px;
    width: 60%;
  }
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0px;
  span {
    color: #ff5a5f;
  }
`;
const TrustedDiv = styled.div``;
const RightDiv = styled.div``;

const Home = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <h1>
          Find Your Dream Remote <span>Job</span> In One Place
        </h1>
        <p>
          Looking for a job? Remotely is the best open source platform to find
          remote jobs for FREE!
        </p>
        <Link to="/search">SEE JOBS</Link>
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
