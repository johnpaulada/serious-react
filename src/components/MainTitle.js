import styled from "styled-components";

const MainTitle = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: ${props => ("color" in props ? props.color : "#FAFAFA")};
  font-family: "IBM Plex Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 5.063em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default MainTitle;
