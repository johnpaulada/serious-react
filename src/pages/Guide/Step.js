import React, { Component, Fragment } from "react";
import { Parallax } from "react-spring";
import { PlainContainer, MainTitle } from "../../components";

class Step extends Component {
  render() {
    const { offset, onClick, background, title } = this.props;

    return (
      <Fragment>
        <Parallax.Layer offset={offset} speed={0.1} onClick={onClick}>
          <PlainContainer background={background} />
        </Parallax.Layer>
        <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
          <MainTitle>{title}</MainTitle>
        </Parallax.Layer>
      </Fragment>
    );
  }
}

export default Step;
