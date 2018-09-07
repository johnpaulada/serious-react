import styled from "styled-components";

const BigContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background: ${props =>
    "background" in props ? `url(${props.background})` : "red"};
`;

export default BigContainer;
