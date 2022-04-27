import BioCard from "../components/BioCard";
import FarhanAvatar from "../styles/farhan.jpg";
import AlexAvatar from "../styles/alex.jpg";
import SumaiyaAvatar from "../styles/sumaiya.jpg";
const About = () => {
  return (
    <div>
      <BioCard
        avatar={SumaiyaAvatar}
        name="Sumaiya Tabassum"
        role="Professor AKA CEO"
        description="I'm doing my best to teach these guys, but sometimes I think it's a lost cause."
      />
      <BioCard
        avatar={FarhanAvatar}
        name="Farhan Haider"
        role="Full Stack"
        description="Hello, my name is Farhan, and I enjoy building stuff. I was engaged in every stage of this project, from UI design to front and back-end development. Oh, and I hate git."
      />
      <BioCard
        avatar={AlexAvatar}
        name="Alexander Petrovski"
        role="Full Stack"
        description="Graduating this semester. I hate git too, but VC is important. Need a high paying job ASAP."
      />
    </div>
  );
};

export default About;
