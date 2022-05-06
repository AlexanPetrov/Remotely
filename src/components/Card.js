import styled from "styled-components";
import Tag from "./Tag";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 20px;
  margin: 10px;
  width: 376px;
  height: 337px;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  .button {
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    background: rgb(253, 121, 96);
    background: linear-gradient(
      90deg,
      rgba(253, 121, 96, 1) 0%,
      rgba(225, 90, 216, 1) 100%
    );
    padding-top: 14px;
    padding-bottom: 14px;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 17px;
  }
`;
const BottomDiv = styled.div`
  width: 100%;
`;
const Title = styled.h3`
  font-size: 20px;
`;
const SalaryRange = styled.div`
  font-size: 17px;
  color: #555555;
`;
const Description = styled.p`
  color: #555555;
`;
const Tags = styled.div`
  display: flex;
  padding-bottom: 5px;
`;
const Company = styled.div`
  float: right;
`;

const Card = ({ data }) => {
  console.log(data);
  return (
    <MainDiv>
      <Title>{data.title}</Title>
      <SalaryRange>
        ${data.minSalary}
        {data.maxSalary ? " - $" + data.maxSalary : ""}/yearly
      </SalaryRange>
      <Description>{data.description}</Description>
      <BottomDiv>
        <Tags>
          {/* location */}
          <Tag data={data.Location} />
          {/* job level */}
          <Tag data={data.jobLevel} />
          {/* job type  */}
          <Tag data={data.jobType} />
        </Tags>
        <button class="button">APPLY NOW</button>
        <Company>
          <p>{data.companyName}</p>
        </Company>
      </BottomDiv>
    </MainDiv>
  );
};

export default Card;
