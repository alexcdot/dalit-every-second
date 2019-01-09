// @flow

import * as React from "react";

import { Page, Grid, Alert, StatsCard } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

type State = {
  time: number,
};

class Home extends React.PureComponent<void, State> {
  constructor() {
    super();
    this.state = {
      time: 0,
    };

    this.tick = this.tick.bind(this);
    // Start running the tick function every 1000 ms
    this.timerHandle = setInterval(this.tick, 1000);
  }

  tick() {
    // Increase time by 1
    this.setState({ time: this.state.time + 1 });
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Grid.Row cards={true}>
            <Grid.Col md={12}>
              <Alert type="primary">
                It has been {this.state.time} seconds.
              </Alert>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={6}
                total={Math.round(this.state.time / 10)}
                label="Dalits were murdered"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={-3}
                total={Math.round(this.state.time / 2)}
                label="Dalits were assaulted"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={9}
                total={Math.round(this.state.time / 3)}
                label="Dalits were raped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={3}
                total={Math.round(this.state.time / 9)}
                label="Dalits were kidnapped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={-2}
                total={Math.round(this.state.time / 4)}
                label="Dalit homes were burnt"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={-1}
                total={Math.round(this.state.time / 20)}
                label="Dalits were denied healthcare"
              />
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default Home;
