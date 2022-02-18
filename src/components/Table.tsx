// <<<<<<< HEAD
// import React, { useEffect,  useState, } from "react";
// import {BsCheckLg} from 'react-icons/bs';
// import {TiTimes} from 'react-icons/ti';
// import getData from "./getData";
// import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
// import { studentTableConfig, staffTableConfig, bookTableConfig }  from "./TableConfigs";

// type Props = {
//     mainColor: string;
//     listColor: string;
//     typeOf: string;
//     request: string;
// }
// type ListStyle = {
//     theadStyle: string;
//     trStyle: string;
//     tdStyle: string;
//     imgStyle: string;
//     svgStyle: string;
// }

// type student = {
//     ID: number;
//     PID: string;
//     FirstName: string;
//     LastName: string;
//     Email: string;
//     PhoneNumber: string;
// }

// type TableProp = {
//   typeOf: string;
// }



// export default function DataGridDemo(props: TableProp) {
//   let columns: GridColDef[] = [];
    
//   const [rows, setRows] = useState<any>(null);

// // Skickar data till tabellen från "students"

// if (props.typeOf === "students") {
//     columns = studentTableConfig();
// }

// else if (props.typeOf === "staff") {
//    columns = staffTableConfig();
// }

// else if (props.typeOf === "books") {
//    columns= studentTableConfig();
// }


//     useEffect(() => {
//       getData("http://192.168.198.194:3005/" + props.typeOf)
//       .then((response) => {
//         setRows(response);
//       });
//     }, [])

// // Visar själva tabellen respektive dess innehåll 
//     return  (
//       <div className=" p-2 w-[100%] h-[100%] ">
//         {rows && <DataGrid
//           rows={rows}
//           columns={columns}
//           key={'ID'}
//           getRowId={(row) => row.ID}
        
//       // Funktion för att bläddra x antal sidor (nu fallet 5)
          
//           // pageSize={5}
//           // rowsPerPageOptions={[5]}

//           // Viktigt för admin

//           // checkboxSelection
//           // disableSelectionOnClick
//         />}
//       </div>
//     );
//   }


// =======
// import * as React from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//   { field: 'name', headerName: 'Name', width: 70 },
//   { field: 'email', headerName: 'Email', width: 130 },
//   { field: 'phone', headerName: 'Phone', width: 130 },
// ];

// const rows = [
//   { id: 1, name: 'Jon ', phone: '072398' },
//   { id: 2, name: 'Cersei', phone: '072398' },
//   { id: 3, name: 'Jaime', phone: '072398' },
//   { id: 4, name: 'Arya', phone: '072398' },
//   { id: 5, name: 'Daenerys', phone: '072398' },
//   { id: 6, name: 'null', phone: '072398' },
//   { id: 7, name: 'Ferrara', phone: '072398' },
//   { id: 8, name: 'Rossini', phone: '072398' },
//   { id: 9, name: 'Harvey', phone: '072398' },
// ];


// export default function DataTable() {
//     return (
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//         />
//       </div>
//     );
//   }
  
// >>>>>>> 55082df99925f31093481699e609138481c6e35f
