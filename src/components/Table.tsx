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

type TableProp = {
  typeOf: string;
}



export default function DataGridDemo(props: TableProp) {
  let columns: GridColDef[] = [];
    
  const [rows, setRows] = useState<any>(null);

// Skickar data till tabellen från "students"

if (props.typeOf === "students") {
    columns = studentTableConfig();
}

else if (props.typeOf === "staff") {
   columns = staffTableConfig();
}

else if (props.typeOf === "books") {
   columns= studentTableConfig();
}


    useEffect(() => {
      getData("http://192.168.198.194:3005/" + props.typeOf)
      .then((response) => {
        setRows(response);
      });
    }, [])

// Visar själva tabellen respektive dess innehåll 
    return  (
      <div className=" p-2 w-[100%] h-[100%] ">
        {rows && <DataGrid
          rows={rows}
          columns={columns}
          key={'ID'}
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


