// @flow

import * as React from "react";

import { Page, Form } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

function About() {
  return (
    <SiteWrapper>
      <Page.Card title="About" RootComponent={Form}>
      </Page.Card>
    </SiteWrapper>
  );
}

export default About;
