// @flow

import * as React from "react";

import { Page, Form } from "tabler-react";

import { TwitterTimelineEmbed } from "react-twitter-embed";

import SiteWrapper from "./SiteWrapper.react";

function TwitterFeed() {
  return (
    <SiteWrapper>
      <Page.Card title="Dalit Advocacy Twitter Feed" RootComponent={Form}>
        <div className="centerContent">
          <div className="selfCenter standardWidth">
            <TwitterTimelineEmbed
              sourceType="list"
              ownerScreenName="majesticfish1"
              slug="dalit-advocacy"
              options={{ height: 800 }}
            />
          </div>
        </div>
      </Page.Card>
    </SiteWrapper>
  );
}

export default TwitterFeed;
