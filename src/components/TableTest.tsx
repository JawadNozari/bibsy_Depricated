import React, { useEffect, useState } from "react";
import getData from "./getData";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
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

type TableProp = {
  typeOf: string;
};

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
  console.log(props.typeOf);
  useEffect(() => {
    getData("http://jawads-macbook-pro.local:9823/" + props.typeOf).then(
      (response: any) => {
        setRows(response);
      }
    );
  }, []);

  if (props.typeOf === "books") {
    console.log(rows);
    // Visar själva tabellen respektive dess innehåll
    return (
      <div className=" h-[100%] w-[100%] p-2 ">
        {rows && (
          <DataGrid
            rows={rows}
            columns={columns}
            key={key}
            getRowId={(row) => row.NTI_s_ID}
            onResize={(event) => {
              console.log(rows);
            }}
            sx={{
              ".MuiDataGrid-row:nth-child(odd)": {
                backgroundColor: "#f1f1f1",
              },
              // ".MuiDataGrid-row:nth-child(even)": {
              //   backgroundColor: "#f2ff2f",
              // },
              ".MuiDataGrid-cell ": {
                // fontSize: "1rem",
                lineHeight: "unset !important",
                maxHeight: "none !important",
                whiteSpace: "normal",
              },
              ".MuiDataGrid-renderingZone": {
                maxHeight: "none !important",
              },
              "& .MuiDataGrid-row": {
                maxHeight: "none !important",
              },
            }}
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
            onResize={(col) => {
              console.log(col);
            }}
          />
        )}
      </div>
    );
  }
}
