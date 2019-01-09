// @flow

import * as React from "react";

import { Page, Grid, Alert, StatsCard } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

type Props = {
  time: number,
};

class Home extends React.PureComponent<Props, void> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Grid.Row cards={true}>
            <Grid.Col md={12}>
              <Alert type="primary">
                It has been {this.props.time} seconds.
              </Alert>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={300}
                total={Math.round(this.props.time / 10)}
                label="Dalits were murdered"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={350}
                total={Math.round(this.props.time / 2)}
                label="Dalits were assaulted"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={250}
                total={Math.round(this.props.time / 3)}
                label="Dalits were raped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={300}
                total={Math.round(this.props.time / 9)}
                label="Dalits were kidnapped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={200}
                total={Math.round(this.props.time / 4)}
                label="Dalit homes were burnt"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={100}
                total={Math.round(this.props.time / 20)}
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
