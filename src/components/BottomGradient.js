import styled from "styled-components";
import PropTypes from "prop-types";

const BottomGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -moz-linear-gradient(
    top,
    ${props => props.top} 0%,
    ${props => props.bottom} 100%
  );
  background: -webkit-linear-gradient(
    top,
    ${props => props.top} 0%,
    ${props => props.bottom} 100%
  );
  background: linear-gradient(
    to bottom,
    ${props => props.top} 0%,
    ${props => props.bottom} 100%
  );
  border-radius: ${props =>
    "borderRadius" in props && props.borderRadius ? props.borderRadius : "0"};
`;

BottomGradient.propTypes = {
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  borderRadius: PropTypes.string
};

export default BottomGradient;
