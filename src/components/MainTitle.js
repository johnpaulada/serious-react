import styled from "styled-components";

const MainTitle = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: ${props => ("color" in props ? props.color : "#FAFAFA")};
  font-family: "IBM Plex Mono", sans-serif;
  font-weight: 900;
  font-size: 5.063em;
`;

export default MainTitle;
