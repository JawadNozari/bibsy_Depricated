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
    // Visar själva tabellen respektive dess innehåll BOOKS
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
                backgroundColor: 'rgba(214, 178, 53, 0.2)',
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
  } else if (props.typeOf === "staff") {
    // Visar själva tabellen respektive dess innehåll STAFF
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
            sx={{
              ".MuiDataGrid-row:nth-child(odd)": {
                backgroundColor: 'rgba(145, 20, 159, 0.2)',
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
  } else if (props.typeOf === "students") {
    // Visar själva tabellen respektive dess innehåll STUDENTS
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
            sx={{
              ".MuiDataGrid-row:nth-child(odd)": {
                backgroundColor: 'rgba(213, 27, 151, 0.2)',
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
  } else if (props.typeOf === "borrowed") {
    // Visar själva tabellen respektive dess innehåll BORROWED
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
            sx={{
              ".MuiDataGrid-row:nth-child(odd)": {
                backgroundColor: 'rgba(38, 153, 219, 0.2)',
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
  } else if (props.typeOf === "missing") {
    // Visar själva tabellen respektive dess innehåll MISSING
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
            sx={{
              ".MuiDataGrid-row:nth-child(odd)": {
                backgroundColor: 'rgba(219, 38, 38, 0.2)',
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
            sx={{
              ".MuiDataGrid-row:nth-child(odd)": {
                backgroundColor: "#D6B235",
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
    
  }
}
