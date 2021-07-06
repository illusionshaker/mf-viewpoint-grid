import React from "react";
import Grid from "./Grid";
import "./index.scss";

const broadcastPayload: any = {
  "securities": ["NAB.ASX"],
  "watchlist": null,
  "selectionSpec": [],
  "broadcastType": [0],
  "_securityUtil": {
    "_securityTypeRanges": [
      [0,[100,106]],
      [1,[107,108]],
      [2,[109,302]],
      [3,[303,499]],
      [4,[500,599]],
      [5,[600,699]],
      [6,[700,799]],
      [7,[800,899]],
      [8,[900,900]],
      [9,[901,1003]],
      [10,[1004,1199]],
      [12,[1200,10000]]
    ]
  },
  "customData": [],
  "exchanges": [],
  "fromWidgetId": "widget872_603",
  "fromWidgetNamespace":"Widgets.Depth"
};
const locale = "en-au";

const App = () => (
  <div>
    <p>Grid Micro Frontend</p>
    <Grid locale={locale} broadcastPayload={broadcastPayload}/>
  </div>
);

export default App;
