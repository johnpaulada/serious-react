import React, { PureComponent, Fragment } from "react";
import {
  PlainContainer,
  Card,
  BottomGradient,
  RouterLink
} from "../../components";
import { CardTitle } from "../../components/Card";

import toolsBackground from "./assets/card-tools.jpg";
import guideBackground from "./assets/card-guide.jpg";
import conceptsBackground from "./assets/card-concepts.jpg";

const menuItems = [
  {
    label: "TOOLS",
    image: toolsBackground,
    path: "/tools",
    top: "rgba(81,45,168,0.1)",
    bottom: "rgba(81,45,168,0.4)"
  },
  {
    label: "GUIDE",
    image: guideBackground,
    path: "/guide",
    top: "rgba(0,158,195,0)",
    bottom: "rgba(0,158,195,0.4)"
  },
  {
    label: "CONCEPTS",
    image: conceptsBackground,
    path: "/concepts",
    top: "rgba(123,31,162,0.1)",
    bottom: "rgba(123,31,162, 0.4)"
  }
];

class MainMenu extends PureComponent {
  render() {
    return (
      <PlainContainer>
        {menuItems.map(({ label, image, path, top, bottom }) => (
          <RouterLink to={path}>
            <Card width="250px" backgroundImage={image}>
              {() => (
                <Fragment>
                  <BottomGradient top={top} bottom={bottom} />
                  <CardTitle>{label}</CardTitle>
                </Fragment>
              )}
            </Card>
          </RouterLink>
        ))}
      </PlainContainer>
    );
  }
}

export default MainMenu;
