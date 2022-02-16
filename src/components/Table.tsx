import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
];

const rows = [
  { id: 1, name: 'Jon ', phone: '072398' },
  { id: 2, name: 'Cersei', phone: '072398' },
  { id: 3, name: 'Jaime', phone: '072398' },
  { id: 4, name: 'Arya', phone: '072398' },
  { id: 5, name: 'Daenerys', phone: '072398' },
  { id: 6, name: 'null', phone: '072398' },
  { id: 7, name: 'Ferrara', phone: '072398' },
  { id: 8, name: 'Rossini', phone: '072398' },
  { id: 9, name: 'Harvey', phone: '072398' },
];


export default function DataTable() {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  }
  