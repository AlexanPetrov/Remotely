import Form from "../components/Form";
import styled from "styled-components";
import Womanandchild from "../styles/womanandchild.png";


const MainDiv = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-evenly;
  padding: 43.4236px;

  h1 {
    font-weight: 900;
    font-size: 50px;
    width: 60%;
  }
`;

const PicDiv = styled.div``;


const Post = () => {
  return (
    <MainDiv>
      <Form />
      <PicDiv>
        <img src={Womanandchild} alt="woman and child"></img>
      </PicDiv>
    </MainDiv>
  )
}

export default Post