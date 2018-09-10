import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import { MainTitle, MainSubtitle } from "../components";

import App from "./App";
import Landing from "./Landing";
import Cards from "./Cards";

[storiesOf]
  .map(App)
  .map(Landing)
  .map(Cards);

// Landing Page

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
