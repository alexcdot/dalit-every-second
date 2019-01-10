// @flow

import * as React from "react";

import { Page, Grid, Alert, StatsCard, Progress } from "tabler-react";

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
                It has been {Math.round(this.props.time/10)} seconds.
              </Alert>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Progress size="xs">
                <Progress.Bar color="red" width={Math.round(this.props.time) % 100} />
              </Progress>
              <StatsCard
                layout={1}
                movement={300}
                total={Math.floor(this.props.time / 100)}
                label="Dalits were murdered"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Progress size="xs">
                <Progress.Bar color="red" width={Math.round(this.props.time * 2) % 100} />
              </Progress>
              <StatsCard
                layout={1}
                movement={350}
                total={Math.floor(this.props.time / 50)}
                label="Dalits were assaulted"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Progress size="xs">
                <Progress.Bar color="red" width={Math.round(this.props.time /3) % 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={250}
                total={Math.floor(this.props.time / 300)}
                label="Dalits were raped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Progress size="xs">
                <Progress.Bar color="red" width={Math.round(this.props.time * 10/9) % 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={300}
                total={Math.floor(this.props.time / 90)}
                label="Dalits were kidnapped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Progress size="xs">
                <Progress.Bar color="red" width={Math.round(this.props.time /4) % 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={200}
                total={Math.floor(this.props.time / 400)}
                label="Dalit homes were burnt"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Progress size="xs">
                <Progress.Bar color="red" width={Math.round(this.props.time /2) % 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={100}
                total={Math.floor(this.props.time / 200)}
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
