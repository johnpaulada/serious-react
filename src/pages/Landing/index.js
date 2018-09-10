import React, { PureComponent, Fragment } from "react";
import { LandingHeader, MainMenu } from "../../components";

class Landing extends PureComponent {
  render() {
    return (
      <Fragment>
        <header>
          <LandingHeader />
        </header>
        <section>
          <MainMenu />
        </section>
      </Fragment>
    );
  }
}

export default Landing;
