import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: #f3f5f6;
  max-width: 300px;
  margin: 20px;
  padding: 15px 20px;
  border-radius: 20px;
  /* typo */
  font-family: "nunito";

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
const AvatarDiv = styled.div`
  height: 110px;
  width: 110px;
`;
const Name = styled.h3`
  font-weight: 700;
  font-size: 90;
`;
const Role = styled.h2`
  font-weight: 500;
  font-size: 18px;
`;
const Description = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const BioCard = ({ avatar, name, role, description }) => {
  return (
    <Main>
      <AvatarDiv>
        <img src={avatar} alt="memoji" />
      </AvatarDiv>

      <Name>{name}</Name>
      <Role>{role}</Role>
      <Description>{description}</Description>
    </Main>
  );
};

export default BioCard;
