// @flow

import * as React from "react";

import { Page, Grid, Alert, StatsCard, Progress } from "tabler-react";

import {Card, CardTitle, CardHeader, CardBody} from "reactstrap";

import SiteWrapper from "./SiteWrapper.react";

type Props = {
  time: number,
};

class Home extends React.PureComponent<Props, void> {
  constructor(props) {
    super(props);

    this.crimeRatio = {
      murder: 0.1,
      rape: 0.2,
      sexualAssault: 0.2,
      assault: 0.2,
      kidnap: 0.2,
      homeBurnt: 0.1,
    };

    this.totalCrimeTime = 18 * 60;
  }

  render() {
    var secondsPassed = this.props.time / 10;
    var statsList = {
      murder: secondsPassed/(this.totalCrimeTime / this.crimeRatio.murder),
      rape: secondsPassed/(this.totalCrimeTime / this.crimeRatio.rape),
      sexualAssault: secondsPassed/(this.totalCrimeTime / this.crimeRatio.sexualAssault),
      assault: secondsPassed/(this.totalCrimeTime / this.crimeRatio.assault),
      kidnap: secondsPassed/(this.totalCrimeTime / this.crimeRatio.kidnap),
      homeBurnt: secondsPassed/(this.totalCrimeTime / this.crimeRatio.homeBurnt),
    };

    var statStyle = {
      "font-size": "28px",
      "min-height": "350px",
      "padding": "25px",
      "background-color": "darkred"
    };

    return (
      <SiteWrapper>
        <Page.Content>
          <Grid.Row cards={true}>

            <Grid.Col width={12}>
              <Card body inverse color="danger" style={
                {flex:1,justifyContent: "center",alignItems: "center",
                 "margin-bottom": "10px"}
              }>
                <CardTitle>It has been {Math.round(secondsPassed)} seconds.</CardTitle>
              </Card>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={4}>
              <Progress size="xs">
                <Progress.Bar color="red" width={statsList.murder % 1 * 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={250}
                total={Math.floor(statsList.murder)}
                label="Dalits were murdered"
              />
            </Grid.Col>

            <Grid.Col width={6} sm={4} lg={4}>
              <Progress size="xs">
                <Progress.Bar color="red" width={statsList.assault % 1 * 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={250}
                total={Math.floor(statsList.assault)}
                label="Dalits were assaulted"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={4}>
              <Progress size="xs">
                <Progress.Bar color="red" width={statsList.rape % 1 * 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={250}
                total={Math.floor(statsList.rape)}
                label="Dalits were raped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={4}>
              <Progress size="xs">
                <Progress.Bar color="red" width={statsList.kidnap % 1 * 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={300}
                total={Math.floor(statsList.kidnap)}
                label="Dalits were kidnapped"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={4}>
              <Progress size="xs">
                <Progress.Bar color="red" width={statsList.homeBurnt % 1 * 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={200}
                total={Math.floor(statsList.homeBurnt)}
                label="Dalit homes were burnt"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={4}>
              <Progress size="xs">
                <Progress.Bar color="red" width={statsList.sexualAssault % 1 * 100} />
              </Progress>

              <StatsCard
                layout={1}
                movement={100}
                total={Math.floor(statsList.sexualAssault)}
                label="Dalits were sexually assaulted"
              />
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default Home;
