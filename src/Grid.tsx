import React, { useState, useEffect, FunctionComponent } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import "./Grid.scss";

export interface IGridProps {
  locale: string
}

const Grid: FunctionComponent<IGridProps> = (
  props: IGridProps
) => {
  const { locale } = props;
  const [rowData, setRowData] = useState([]);

  const localise = (localizationKey: string): string => {
    return global?.IressTraderPlus?.UICore?.CultureInfo?.localize ? global.IressTraderPlus.UICore.CultureInfo.localize(localizationKey): localizationKey;
  };

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);
  
  return (
    <>
      <p>Locale in micro frontend: {locale}</p>
      <p>
        Translate in micro frontend "common.control.ok": {localise("common.control.ok")}
      </p>
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
