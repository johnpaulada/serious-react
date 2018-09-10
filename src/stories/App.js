import React from "react";
import App from "../App";

export default storiesOf => {
  storiesOf("App", module).add("Full App", () => <App />);
  return storiesOf;
};
