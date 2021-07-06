import React, { useState, useEffect, FunctionComponent } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import "./Grid.scss";
export interface IGridProps {
  locale: string,
  broadcastPayload: any,
}

const Grid: FunctionComponent<IGridProps> = (
  props: IGridProps
) => {
  const { locale, broadcastPayload } = props;
  const [rowData, setRowData] = useState([]);
  const [ currentBroadcastPayload, setCurrentBroadcastPayload] = useState(broadcastPayload)

  const localise = (localizationKey: string): string => {
    return global?.IressTraderPlus?.UICore?.CultureInfo?.localize ? global.IressTraderPlus.UICore.CultureInfo.localize(localizationKey): localizationKey;
  };

  const handleBroadcastPaylodChange = (event: React.SyntheticEvent): void => {
    setCurrentBroadcastPayload(JSON.parse(event.target.value));
  }

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    console.log("we need to do something here...", currentBroadcastPayload);
  }

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);
  
  return (
    <>
      <p>Broadcast payload: {JSON.stringify(broadcastPayload)}</p>
      <p>Locale in micro frontend: <strong>{locale}</strong></p>
      <p>
        Translate in micro frontend "common.control.ok": <strong>{localise("common.control.ok")}</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label>Broadcast Payload:</label>
        <br />
        <textarea 
          value={JSON.stringify(currentBroadcastPayload)} 
          onChange={handleBroadcastPaylodChange} 
          style={
            {
              width: "100%",
              height: "10%"
            }
          } 
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div className="mf-viewpoint-grid ag-theme-balham-dark">
        <AgGridReact rowData={rowData}>
          <AgGridColumn field="make" sortable={ true } filter={ true }></AgGridColumn>
          <AgGridColumn field="model" sortable={ true } filter={ true }></AgGridColumn>
          <AgGridColumn field="price" sortable={ true } filter={ true }></AgGridColumn>
        </AgGridReact>
      </div>
    </>
  );
};

export default Grid;
