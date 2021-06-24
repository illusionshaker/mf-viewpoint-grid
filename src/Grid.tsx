import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import "./Grid.scss";

const Grid = () => {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);
  
  return (
    <div className="mf-viewpoint-grid ag-theme-balham-dark">
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="make" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="model" sortable={ true } filter={ true }></AgGridColumn>
        <AgGridColumn field="price" sortable={ true } filter={ true }></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Grid;
