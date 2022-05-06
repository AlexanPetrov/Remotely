import { useState } from "react";
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
  const data = [
    {
      companyName: "apple",
      title: "designer",
      description:
        "We need developers who move fast, are capable of breaking down and solving complex problems, and have a strong will to get things done.",
      minSalary: 90000,
      maxSalary: null,
      jobType: "contract",
      Location: "usa",
      jobLevel: "senior",
    },
    {
      companyName: "google",
      title: "software engineer",
      description:
        "We need developers who move fast, are capable of breaking down and solving complex problems, and have a strong will to get things done.",
      minSalary: 20000,
      maxSalary: 40000,
      jobType: "full time",
      Location: "anywhere",
      jobLevel: "junior",
    },
    {
      companyName: "microsoft",
      title: "data engineer",
      description: "We are looking for a team member to support a pipeline",
      minSalary: 80000,
      maxSalary: 90000,
      jobType: "full time",
      Location: "USA",
      jobLevel: "senior",
    },
    {
      companyName: "tesla",
      title: "operations specialist",
      description: "Looking for a specialist to support a conversion plant",
      minSalary: 70000,
      maxSalary: 95000,
      jobType: "full time",
      Location: "USA",
      jobLevel: "senior",
    },

    {
      companyName: "netflix",
      title: "ceo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam ipsum in lorem massa eu tincidunt consequat, massa dolor sodales nibh, eget convallis est ante a leo.",
      minSalary: 600000,
      maxSalary: null,
      jobType: "lvl 1",
      Location: "anywhere",
      jobLevel: "mid-level",
    },
    {
      companyName: "meta",
      title: "devops specialist",
      description:
        "We need developers who move fast, are capable of breaking down and solving complex problems, and have a strong will to get things done.",
      minSalary: 90000,
      maxSalary: null,
      jobType: "contract",
      Location: "usa",
      jobLevel: "senior",
    },
  ];

  const [numberOfJob, setNumberOfJob] = useState(102);
  const [jobs, setJobs] = useState(data);

  return (
    <MainDiv>
      <Heading>Showing {numberOfJob} jobs</Heading>
      <CardsDiv>
        {jobs.map((j) => (
          <Card data={j} />
        ))}
      </CardsDiv>
    </MainDiv>
  );
};

export default Search;
