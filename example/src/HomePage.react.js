// @flow

import * as React from "react";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";

type State = {
  time: number,
};

class Home extends React.PureComponent<void, State> {
  state = {
    time: 0,
  };

  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Grid.Row cards={true}>
            <Grid.Col md={12}>
              <Alert type="primary">It has been XX seconds.</Alert>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={6}
                total="43"
                label="New Tickets"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={-3}
                total="17"
                label="Closed Today"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={9}
                total="7"
                label="New Replies"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={3}
                total="27.3k"
                label="Followers"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={-2}
                total="$95"
                label="Daily earnings"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                layout={1}
                movement={-1}
                total="621"
                label="Products"
              />
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default Home;
