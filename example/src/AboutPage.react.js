// @flow

import * as React from "react";

import { Page, Grid, Form } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

function About() {
  return (
    <SiteWrapper>
      <Page.Card title="About" RootComponent={Form}>
        <Grid.Row>
          <Grid.Col width={8}>
            <div>
                <h1> About Us </h1>
            We are a pair of undergradaute computer science and mathematics students at the California Institute of technology (Caltech).
            We were inspired to make this website on our recent trip to Gujarat, India through the <a href="http://sites.iitgn.ac.in/india-ki-khoj/?q=india-ki-khoj/"> India Ki Khoj </a> program.
            One of the hottest discussion topics was the place that caste had in indian society and we wanted to create something to bring attention to the issue.
            The purpose of this site is to create a visualization of the crimes that occuring against peoples of SC/ST descent. In the home page we attempted to be as objective as possible, only relying on statistics from official government sites.
            </div>
          </Grid.Col>
          <Grid.Col width={4}>
            <img src="demo/photos/us.jpg" alt="Us"/>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col width={4}>
            <img src="demo/photos/kikhoj.png" alt="Ki Khoj"/>
          </Grid.Col>
          <Grid.Col width={8} class="float-right">
            <h1> About India Ki Khoj </h1>
            India Ki Khoj is a week-long programe held at IIT, Gandhinagar.
            It attempts to bring together students from IIT and abroad to learn about cultural, economic, and political topics.
          </Grid.Col>
        </Grid.Row>
      </Page.Card>
    </SiteWrapper>
  );
}

export default About;
