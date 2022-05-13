import Helmet from "react-helmet";
import styled from "styled-components";
import animationData from "../styles/contact2.json";
// import Lottie from "react-lottie";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-family: "Nunito";
  font-style: normal;
`;
const LeftDiv = styled.div`
  width: 60%;
  padding-left: 40px;
`;
const Heading = styled.h1`
  font-size: 80px;
  background: linear-gradient(89.91deg, #ff3f81 30.04%, #8456e9 42.19%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
const SubHeading = styled.p`
  font-size: 25px;
`;
const EmailLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 5.90866px 8.24465px;
  color: white;
  background: linear-gradient(89.98deg, #ff4082 46.76%, #8456e9 99.98%);
  border-radius: 5.1529px;
  text-decoration: none;
`;

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };
  return (
    <Main>
      <Helmet>
        <title>Don't contact me</title>
      </Helmet>
      <LeftDiv>
        <Heading>Still have questions?</Heading>
        <SubHeading>
          Any questions or remarks? Just write us an email!
        </SubHeading>
        <div>
          <EmailLink href="mailto: fakeemail@gmail.com">Send Email</EmailLink>
        </div>
      </LeftDiv>
      {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
    </Main>
  );
};

export default Contact;
