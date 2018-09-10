import React, { Fragment } from "react";
import { PlainContainer, BottomGradient, Card } from "../components";
import { CardTitle } from "../components/Card";
import RouterLink from "../components/RouterLink";

// Images
import guideBackground from "../components/LandingHeader/assets/card-guide.jpg";
import toolsBackground from "../components/LandingHeader/assets/card-tools.jpg";
import conceptsBackground from "../components/LandingHeader/assets/card-concepts.jpg";

export default storiesOf => {
  storiesOf("Cards")
    .add("Default Card", () => {
      return (
        <RouterLink to="/">
          <Card width="250px" backgroundImage={guideBackground}>
            {() => (
              <Fragment>
                <BottomGradient
                  borderRadius="5px"
                  top={"rgba(0,158,195,0)"}
                  bottom={"rgba(0,158,195,0.4)"}
                />
                <CardTitle>GUIDE</CardTitle>
              </Fragment>
            )}
          </Card>
        </RouterLink>
      );
    })
    .add("Card List", () => {
      return (
        <PlainContainer>
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
        </PlainContainer>
      );
    });

  return storiesOf;
};
