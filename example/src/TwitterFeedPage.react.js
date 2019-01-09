// @flow

import * as React from "react";

import { Page, Card, Form, Button } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

function TwitterFeed() {
  return (
    <SiteWrapper>
      <Page.Card
        title="Dalit Advocacy Twitter Feed"
        RootComponent={Form}
        footer={
          <Card.Footer>
            <div className="d-flex">
              <Button link>Cancel</Button>
              <Button type="submit" color="primary" className="ml-auto">
                Send data
              </Button>
            </div>
          </Card.Footer>
        }
      />
    </SiteWrapper>
  );
}

export default TwitterFeed;
