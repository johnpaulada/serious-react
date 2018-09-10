import React from "react";
import { Router, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimateTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={100}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

export default AnimateTransitionRouter;
