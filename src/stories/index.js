import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import App from "../App";
import Landing from "../pages/Landing";
import {
  LandingHeader,
  BigContainer,
  MainTitle,
  MainSubtitle,
  Card
} from "../components";

// Images
import landingBackground from "../components/LandingHeader/assets/landing-header-background.png";

storiesOf("App", module).add("Full App", () => <App />);

// Landing Page
storiesOf("Landing Page").add("Full Landing Page", () => <Landing />);
storiesOf("Landing Page/Header")
  .add("Full Header Page", () => <LandingHeader />)
  .add("Container With Background", () => (
    <BigContainer background={landingBackground} />
  ))
  .add("Container Without Background", () => <BigContainer />);

storiesOf("Header Type/Main Header")
  .add("Default Header", () => (
    <div style={{ backgroundColor: "#333" }}>
      <MainTitle>Main Title</MainTitle>
    </div>
  ))
  .add("Header With Color", () => (
    <MainTitle color="#333">Main Title</MainTitle>
  ));

storiesOf("Header Type/Sub Header")
  .add("Default Sub Header", () => (
    <div style={{ backgroundColor: "#333" }}>
      <MainSubtitle>Main Title</MainSubtitle>
    </div>
  ))
  .add("Sub Header With Color", () => (
    <MainSubtitle color="#333">Main Title</MainSubtitle>
  ));

storiesOf("Cards").add("Default Card", () => {
  return <Card />;
});
