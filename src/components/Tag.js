import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  background: rgba(0, 71, 255, 0.19);
  border-radius: 6px;
  text-align: center;
  margin-right: 5px;
  height: 28px;
  p {
    color: #0047ff;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 10px;
  }
`;
const Tag = ({ data }) => {
  return (
    <Main>
      <p>{data}</p>
    </Main>
  );
};

export default Tag;
