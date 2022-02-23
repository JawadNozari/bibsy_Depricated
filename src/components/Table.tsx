/*
  Import of components for use within this file.
*/
//Import for reacg components.
import React, { useEffect, useState } from "react";
//Import for getData custom components
import getData from "./getData";
//Import for components from @mui for table manipulation.
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
/*
  Import of table configs for the table within this file.
  (What columns the table should include.)
*/
import {
  studentTableConfig,
  staffTableConfig,
  bookTableConfig,
} from "./TableConfigs";

// type Props = {
//   mainColor: string;
//   listColor: string;
//   typeOf: string;
//   request: string;
// };
// type ListStyle = {
//   theadStyle: string;
//   trStyle: string;
//   tdStyle: string;
//   imgStyle: string;
//   svgStyle: string;
// };

// type student = {
//   ID: number;
//   PID: string;
//   FirstName: string;
//   LastName: string;
//   Email: string;
//   PhoneNumber: string;
// };
// type staff = {
//   ID: number;
//   PID: string;
//   FirstName: string;
//   LastName: string;
//   Email: string;
//   PhoneNumber: string;
// };
// type book = {
//   NTI_s_ID: number;
//   Title: string;
//   Author: number;
//   Language: string;
//   Publisher: string;
// };

//Declaration of type for the table.
type TableProp = {
  typeOf: string;
};

//What should be exported as a component by default.
export default function DataGridDemo(props: TableProp) {
  let columns: GridColDef[] = [];
  let key = "";

  const [rows, setRows] = useState<any>(null);

  // Skickar data till tabellen från "students"

  if (props.typeOf === "students") {
    columns = studentTableConfig();
    key = "ID";
  } else if (props.typeOf === "staff") {
    columns = staffTableConfig();
    key = "ID";
  } else if (props.typeOf === "books") {
    columns = bookTableConfig();
    key = "NTI_s_ID";
  }
  useEffect(() => {
    getData("http://admin-Macbook-pro.local:9823"+props.typeOf).then((response: any) => {
      setRows(response);
    });
  }, []);
  console.log(rows);
  if (props.typeOf === "books") {
    // Visar själva tabellen respektive dess innehåll
    return (
      <div className=" h-[100%] w-[100%] p-2 ">
        {rows && (
          <DataGrid
            style={{ height: 5 }}
            rows={rows}
            columns={columns}
            key={key}
            getRowId={(row) => row.NTI_s_ID}
          />
        )}
      </div>
    );
  } else {
    // Visar själva tabellen respektive dess innehåll
    return (
      <div className=" h-[100%] w-[100%] p-2 ">
        {rows && (
          <DataGrid
            rows={rows}
            columns={columns}
            key={key}
            getRowId={(row) => row.ID}

            // Funktion för att bläddra x antal sidor (nu fallet 5)

            // pageSize={5}
            // rowsPerPageOptions={[5]}

            // Viktigt för admin

            // checkboxSelection
            // disableSelectionOnClick
          />
        )}
      </div>
    );
  }
}
