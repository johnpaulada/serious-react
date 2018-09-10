import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  background-position: center;
  background-size: cover;
  background: ${props =>
    "background" in props ? `url(${props.background})` : "white"};
`;

export default Container;
