import React, { PureComponent } from "react";
import { Parallax } from "react-spring";
import Step from "./Step";
import forestBackground from "./assets/forest.jpg";
import snowBackground from "./assets/snow.jpg";

class Guide extends PureComponent {
  scroll = to => this.refs.parallax.scrollTo(to);
  render() {
    return (
      <Parallax ref="parallax" pages={2} horizontal scrolling={false}>
        <Step
          offset={0}
          onClick={() => this.scroll(1)}
          background={forestBackground}
          title="Prototype"
        />
        <Step
          offset={1}
          onClick={() => this.scroll(0)}
          background={snowBackground}
          title="Storybook"
        />
      </Parallax>
    );
  }
}

export default Guide;
