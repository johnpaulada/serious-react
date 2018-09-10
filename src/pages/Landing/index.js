import React, { PureComponent, Fragment } from "react";
import {
  LandingHeader,
  PlainContainer,
  Card,
  BottomGradient,
  RouterLink
} from "../../components";
import { CardTitle } from "../../components/Card";

import guideBackground from "../../components/LandingHeader/assets/card-guide.jpg";
import toolsBackground from "../../components/LandingHeader/assets/card-tools.jpg";
import conceptsBackground from "../../components/LandingHeader/assets/card-concepts.jpg";

class Landing extends PureComponent {
  render() {
    return (
      <Fragment>
        <header>
          <LandingHeader />
        </header>
        <section>
          <PlainContainer>
            <RouterLink to="/tools">
              <Card width="250px" backgroundImage={toolsBackground}>
                {() => (
                  <Fragment>
                    <BottomGradient
                      top={"rgba(230,74,25,0)"}
                      bottom={"rgba(230,74,25,0.4)"}
                    />
                    <CardTitle>TOOLS</CardTitle>
                  </Fragment>
                )}
              </Card>
            </RouterLink>
            <RouterLink to="/guide">
              <Card width="250px" backgroundImage={guideBackground}>
                {() => (
                  <Fragment>
                    <BottomGradient
                      top={"rgba(0,158,195,0)"}
                      bottom={"rgba(0,158,195,0.4)"}
                    />
                    <CardTitle>GUIDE</CardTitle>
                  </Fragment>
                )}
              </Card>
            </RouterLink>
            <RouterLink to="/concepts">
              <Card width="250px" backgroundImage={conceptsBackground}>
                {() => (
                  <Fragment>
                    <BottomGradient
                      top={"rgba(191,54,12,0.1)"}
                      bottom={"rgba(191,54,12,0.5)"}
                    />
                    <CardTitle>CONCEPTS</CardTitle>
                  </Fragment>
                )}
              </Card>
            </RouterLink>
          </PlainContainer>
        </section>
      </Fragment>
    );
  }
}

export default Landing;
