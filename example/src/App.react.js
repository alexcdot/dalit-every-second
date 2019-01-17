import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage.react";
import HomePage from "./HomePage.react";
import TwitterFeedPage from "./TwitterFeedPage.react";

import "tabler-react/dist/Tabler.css";

type Props = {||};

type State = {
  time: number,
};

class App extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.tick = this.tick.bind(this);
    this.timerHandler = setInterval(this.tick, 100);
  }

  tick() {
    // Increase time by 1
    this.setState({ time: this.state.time + 1 });
  }

  render() {
    return (
      <React.StrictMode>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <HomePage {...props} tick={this.tick} time={this.state.time} />
              )}
            />
            <Route exact path="/twitter-feed" component={TwitterFeedPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
