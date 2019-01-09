import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage.react";
import TwitterFeedPage from "./TwitterFeedPage.react";

import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/twitter-feed" component={TwitterFeedPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
