import styled from "styled-components";

export const CardContainer = styled.div`
  align-items: center;
  background-color: ${props =>
    "backgroundColor" in props && props.backgroundColor
      ? props.backgroundColor
      : "white"}
  ${props =>
    "backgroundImage" in props && props.backgroundImage
      ? `background: url(${props.backgroundImage});`
      : ""}
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  margin: ${props =>
    "margin" in props && props.margin ? props.margin : "10px"}
  position: relative;
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
  width: ${props => ("width" in props && props.width ? props.width : "250px")};

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const CardTitle = styled.div`
  margin: 0;
  padding: 0;
  color: #fafafa;
  font-family: "IBM Plex Mono", sans-serif;
  font-weight: 900;
  font-size: 1.5em;
  letter-spacing: 1px;
  z-index: 1;
`;
