import BioCard from "../components/BioCard";
import FarhanAvatar from "../styles/farhan.png";
import AlexAvatar from "../styles/alex.png";
import ProfAvatar from "../styles/prof.png";
import styled from "styled-components";
import Helmet from "react-helmet";

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const About = () => {
  return (
    <Main>
      <Helmet>
        <title>Remotely: About Us</title>
      </Helmet>
      <BioCard
        avatar={ProfAvatar}
        name="Sumaiya Tabassum"
        role="Professor AKA CEO"
        description="I'm doing my best to teach these guys, but sometimes I think it's a lost cause."
      />
      <BioCard
        avatar={FarhanAvatar}
        name="Farhan Haider"
        role="Full Stack"
        description="I enjoy building stuff. I was engaged in every stage of this project, from UI design 🧑‍💻 to front and back-end development. Oh, and I hate git."
      />
      <BioCard
        avatar={AlexAvatar}
        name="Alexander Petrovski"
        role="Full Stack"
        description="Graduating this semester. I hate git too, but VC is important. Need a high paying job ASAP."
      />
    </Main>
  );
};

export default About;
