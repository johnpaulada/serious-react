import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props =>
    "backgroundColor" in props && props.backgroundColor
      ? props.backgroundColor
      : "white"};
  ${props =>
    "background" in props && props.background
      ? `background: url(${props.background});`
      : ""};
  background-position: center;
  background-size: cover;
`;

export default Container;
