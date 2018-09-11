import React, { Component } from "react";
import BigContainer from "../BigContainer";
import MainTitle from "../MainTitle";
import MainSubtitle from "../MainSubtitle";
import headerBackground from "./assets/landing-header-background.jpg";

class LandingHeader extends Component {
  render() {
    return (
      <BigContainer background={headerBackground}>
        <MainTitle>Serious React</MainTitle>
        <MainSubtitle>A GUIDE TO SERIOUS REACT DEVELOPMENT</MainSubtitle>
      </BigContainer>
    );
  }
}

export default LandingHeader;
