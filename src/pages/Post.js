import Form from "../components/Form";
import styled from "styled-components";
import Womanandchild from "../styles/womanandchild.png";

const MainDiv = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin-left: -6px;
  /* height: 90vh; */
  height: calc(100vh - 66.63px);
  overflow: hidden;
  background: #f5f7fd;
  h1 {
    font-weight: 900;
    font-size: 50px;
    width: 60%;
  }
`;

const FormDiv = styled.div`
  /* margin-left: 100px; */
  display: flex;
  padding: 0px 30px;
  justify-content: center;

  overflow: scroll;
  flex-grow: 1;
`;
const PicDiv = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Post = () => {
  return (
    <MainDiv>
      <FormDiv>
        <Form />
      </FormDiv>

      <PicDiv>
        <img src={Womanandchild} alt="woman and child"></img>
      </PicDiv>
    </MainDiv>
  );
};

export default Post;
