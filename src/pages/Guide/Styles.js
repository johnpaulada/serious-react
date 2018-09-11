import styled from "styled-components";
import { Parallax } from "react-spring";

export const StyledParallax = styled(Parallax)`
  & > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
