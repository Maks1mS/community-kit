import React from 'react';
import atomize from "@quarkly/atomize";

const SimpleTabsItem = props => <div {...props}>Say hello SimpleTabsItem</div>

export default atomize(SimpleTabsItem)({
  name: "SimpleTabsItem",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "SimpleTabsItem — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
