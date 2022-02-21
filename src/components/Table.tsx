import React, { useEffect,  useState, } from "react";
import {BsCheckLg} from 'react-icons/bs';
import {TiTimes} from 'react-icons/ti';
import getData from "./getData";
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { studentTableConfig, staffTableConfig, bookTableConfig }  from "./TableConfigs";

type Props = {
    mainColor: string;
    listColor: string;
    typeOf: string;
    request: string;
}
type ListStyle = {
    theadStyle: string;
    trStyle: string;
    tdStyle: string;
    imgStyle: string;
    svgStyle: string;
}

type student = {
    ID: number;
    PID: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
}
  type staff = {
    ID: number;
    PID: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
  }
  type book = {
    NTI_s_ID: number;
    Title: string;
    Author: number;
    Language: string;
    Publisher: string;
  }

type TableProp = {
  typeOf: string;
}



export default function DataGridDemo(props: TableProp) {
  let columns: GridColDef[] = [];

  let key = "";
    
  const [rows, setRows] = useState<any>(null);

// Skickar data till tabellen från "students"

if (props.typeOf === "students") {
    columns = studentTableConfig();
    key = "ID";
}

else if (props.typeOf === "staff") {
   columns = staffTableConfig();
   key = "ID";
}
else if (props.typeOf === "books") {
   columns= bookTableConfig();
   key = "NTI_s_ID";
}
    useEffect(() => {
      
      getData("http://192.168.198.194:3005/" + props.typeOf)
      .then((response: any) => {
        setRows(response);
       }); 
    }, [])

if(props.typeOf=="books"){
  // Visar själva tabellen respektive dess innehåll 
  return  (
    <div className=" p-2 w-[100%] h-[100%] ">
      {rows && <DataGrid
        rows={rows}
        columns={columns}
        key={key}
        getRowId={(row) => row.NTI_s_ID}
      
    // Funktion för att bläddra x antal sidor (nu fallet 5)
        
        // pageSize={5}
        // rowsPerPageOptions={[5]}

        // Viktigt för admin

        // checkboxSelection
        // disableSelectionOnClick
      />}
    </div>
  );
}else{
  // Visar själva tabellen respektive dess innehåll 
  return  (
    <div className=" p-2 w-[100%] h-[100%] ">
      {rows && <DataGrid
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
      />}
    </div>
  );
}
  }