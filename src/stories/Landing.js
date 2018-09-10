import React from "react";
import Landing from "../pages/Landing";
import { LandingHeader, BigContainer } from "../components";

// Images
import landingBackground from "../components/LandingHeader/assets/landing-header-background.png";

export default storiesOf => {
  storiesOf("Landing Page").add("Full Landing Page", () => <Landing />);
  storiesOf("Landing Page/Header")
    .add("Full Header Page", () => <LandingHeader />)
    .add("Container With Background", () => (
      <BigContainer background={landingBackground} />
    ))
    .add("Container Without Background", () => <BigContainer />);

  return storiesOf;
};
