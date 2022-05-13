import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

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
  const [numberOfJob, setNumberOfJob] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5001/api/jobs")
      .then((res) => res.json()) // convert to json
      .then(({ data }) => {
        /* Setting the state of jobs to the data that is returned from the API. */
        setJobs(data);
        /* Setting the state of numberOfJob to the length of the data that is returned from the API. */
        setNumberOfJob(data.length);
      }); // set data to state
  }, []);

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
};

export default Search;
