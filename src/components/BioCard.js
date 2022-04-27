import styled from "styled-components";

const Main = styled.div`
  background-color: #f3f5f6;
  max-width: 402px;
  border-radius: 20px;
  img {
    height: 130px;
  }
`;
const Name = styled.h3``;
const Role = styled.h2``;
const Description = styled.p``;

const BioCard = ({ avatar, name, role, description }) => {
  return (
    <Main>
      <img src={avatar} alt="memoji" />
      <Name>{name}</Name>
      <Role>{role}</Role>
      <Description>{description}</Description>
    </Main>
  );
};

export default BioCard;
