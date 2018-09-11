import React, { PureComponent } from "react";
import { StyledParallax } from "./Styles";
import Step from "./Step";

import forestBackground from "./assets/forest.jpg";
import snowBackground from "./assets/snow.jpg";

const steps = [
  {
    background: forestBackground,
    title: "Prototype",
    content: "Awesome content"
  },
  {
    background: snowBackground,
    title: "Storybook",
    content: "Awesome content"
  },
  {
    background: snowBackground,
    title: "Automate Code Formatting",
    content: "Awesome content"
  }
];

const STEP_COUNT = steps.length;

class Guide extends PureComponent {
  setParallaxRef = element => {
    this.parallax = element;
  };
  scroll = to => this.parallax.scrollTo(to);
  render() {
    return (
      <StyledParallax
        innerRef={this.setParallaxRef}
        pages={STEP_COUNT}
        horizontal
        scrolling={false}
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            offset={index}
            onClick={() => this.scroll((index + 1) % STEP_COUNT)}
            background={step.background}
            title={step.title}
          />
        ))}
      </StyledParallax>
    );
  }
}

export default Guide;
