import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import App from "../App";
import Landing from "../pages/Landing";
import { LandingHeader } from "../components";

storiesOf("App", module).add("Full App", () => <App />);

// Landing Page
storiesOf("Landing Page").add("Full Landing Page", () => <Landing />);
storiesOf("Landing Page/Header").add("Full Header Page", () => (
  <LandingHeader />
));
