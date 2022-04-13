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
`;
const Title = styled.h3``;
const SalaryRange = styled.div``;
const Description = styled.p``;
const Tags = styled.div`
  display: flex;
`;
const Company = styled.div``;

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
      <Tags>
        {/* location */}
        <Tag data={data.Location} />
        {/* job level */}
        <Tag data={data.jobLevel} />
        {/* job type  */}
        <Tag data={data.jobType} />
      </Tags>

      <button>APPLY NOW</button>
      <Company>
        <p>{data.companyName}</p>
      </Company>
    </MainDiv>
  );
};

export default Card;
