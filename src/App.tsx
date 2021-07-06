import React from "react";
import Grid from "./Grid";
import "./index.scss";

const broadcastPayload: any = {
  "hello": "world"
};
const locale = "en-au";

const App = () => (
  <div>
    <p>Grid Micro Frontend</p>
    <Grid locale={locale} broadcastPayload={broadcastPayload}/>
  </div>
);

export default App;
