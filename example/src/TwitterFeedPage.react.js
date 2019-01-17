// @flow

import * as React from "react";

import { Page, Form } from "tabler-react";

import { TwitterTimelineEmbed } from "react-twitter-embed";

import SiteWrapper from "./SiteWrapper.react";

function TwitterFeed() {
  return (
    <SiteWrapper>
      <Page.Card title="Dalit Advocacy Twitter Feed" RootComponent={Form}>
        <div
          className="centerContent"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="selfCenter" style={{ width: 400 }}>
            <TwitterTimelineEmbed
              sourceType="list"
              ownerScreenName="majesticfish1"
              slug="dalit-advocacy"
              options={{ width: 400, center: true }}
            />
          </div>
        </div>
      </Page.Card>
    </SiteWrapper>
  );
}

export default TwitterFeed;
