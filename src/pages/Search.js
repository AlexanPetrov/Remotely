import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Spinner = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 40px;
    font-size: 30px;
    font-weight: bold;
    text-transform: capitalize;
    background: linear-gradient(
      90.67deg,
      #8355e9 2.02%,
      #c149b4 21.4%,
      #ff3e80 48.52%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  // style for the spinner
  .spinner {
    width: 44px;
    height: 44px;
    animation: spinner-y0fdc1 2s infinite ease;
    transform-style: preserve-3d;
  }

  .spinner > div {
    background-color: rgba(250, 172, 199, 0.2);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid #ff3e80;
  }

  .spinner div:nth-of-type(1) {
    transform: translateZ(-22px) rotateY(180deg);
  }

  .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner div:nth-of-type(6) {
    transform: translateZ(22px);
  }

  @keyframes spinner-y0fdc1 {
    0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }

    50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }

    100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
  }
`;
const MainDiv = styled.div`
  background: #f5f7fd;
  padding-top: 10px;
`;
const Heading = styled.h1`
  margin-left: 10px;
  font-family: "Nunito";
  font-style: normal;
`;
const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding-bottom: 50px;

  font-family: "Nunito";
  font-style: normal;
`;

const Search = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfJob, setNumberOfJob] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/api/jobs`)
      .then((res) => res.json()) // convert to json
      .then(({ data }) => {
        /* Setting the state of jobs to the data that is returned from the API. */
        setJobs(data);
        /* Setting the state of numberOfJob to the length of the data that is returned from the API. */
        setNumberOfJob(data.length);
        setLoading(false);
      }); // set data to state
  }, []);
  if (loading) {
    return (
      <Spinner>
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Loading...</p>
      </Spinner>
    );
  } else {
    return (
      <MainDiv>
        <Heading>Showing {numberOfJob} jobs</Heading>
        <CardsDiv>
          {jobs.map((d, index) => (
            <Card key={index} data={d} />
          ))}
        </CardsDiv>
      </MainDiv>
    );
  }
};

export default Search;
