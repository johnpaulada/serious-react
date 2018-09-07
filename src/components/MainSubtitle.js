import styled from "styled-components";

const MainSubtitle = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: ${props => ("color" in props ? props.color : "#FAFAFA")};
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 200;
  font-size: 1.5em;
  letter-spacing: 2px;
  opacity: 0.8;
`;

export default MainSubtitle;
