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
  height: 360px;
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
    margin-top: 7px;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 17px;
    cursor: pointer;
  }

  .description {
    max-height: 95px;
    overflow: scroll;
    text-overflow: ellipsis;
  }
`;
const BottomDiv = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  letter-spacing: 0.833703px;
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
`;
const SalaryRange = styled.div`
  font-size: 17px;
  color: #555555;
`;
const Description = styled.p`
  color: #555555;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-overflow: ellipsis;
`;
const Tags = styled.div`
  display: flex;
  padding-bottom: 5px;
`;
const Company = styled.div`
  float: right;
  justify-self: flex-end;
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const Card = ({ data }) => {
  return (
    <MainDiv>
      <Title>{data.title}</Title>
      <SalaryRange>
        $
        {data.min_salary.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
        {data.max_salary
          ? " - $" +
            data.max_salary.toLocaleString(undefined, { maximumFraction: 2 })
          : ""}
        /yearly
      </SalaryRange>
      <div className="description">
        <Description>{data.description}</Description>
      </div>

      <BottomDiv>
        <Tags>
          {/* location */}
          <Tag data={data.location} />
          {/* job level */}
          <Tag data={data.level} />
          {/* job type  */}
          <Tag data={data.type} />
        </Tags>
        <a href={data.url} target="_blank" rel="noreferrer">
          <button className="button">APPLY NOW</button>
        </a>

        <Company>
          <p>{data.company_name}</p>
        </Company>
      </BottomDiv>
    </MainDiv>
  );
};

export default Card;
