import React, { PureComponent } from "react";
import { CardContainer, CardTitle } from "./Styles";
import PropTypes from "prop-types";

class Card extends PureComponent {
  render() {
    return (
      <CardContainer {...this.props}>{this.props.children()}</CardContainer>
    );
  }
}

Card.propTypes = {
  children: PropTypes.func.isRequired
};

export { CardTitle };

export default Card;
