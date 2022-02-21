type TableStudent = {

}

export const studentTableConfig = () => {

    return [
        {
            field: 'ID',
            headerName: 'ID',
            width: 100,
            sortable: true,       
            'type': 'number',
        },
        {
            field: 'PID',
            headerName: 'PID',
            width: 100,
            sortable: true,
        },
        {
          field: 'FirstName',
          headerName: 'First Name',
          width: 150,
          editable: false,
        },
        {
          field: 'LastName',
          headerName: 'Last Name',
          width: 150,
          editable: false,
        },
        {
          field: 'Email',
          headerName: 'Email',
          width: 150,
          editable: false,
        },
      
        {
          field: 'PhoneNumber',
          headerName: 'Phone number',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'Class',
          headerName: 'Class',
          width: 110,
          editable: false,
        }
      ];
    }

    export const staffTableConfig = () => {
        return [
            {
                field: 'ID',
                headerName: 'ID',
                width: 100,
                sortable: true,
                'type': 'number',
            },
            {
                field: 'PID',
                headerName: 'PID',
                width: 100,
                sortable: true,
            },
            {
                field: 'FirstName',
                headerName: 'First Name',

                width: 150,
                editable: false,
            },
            {
                field: 'LastName',
                headerName: 'Last Name',
                width: 150,
                editable: false,
            },
            {
                field: 'Email',
                headerName: 'Email',
                width: 150,
                editable: false,
            },
            {
                field: 'PhoneNumber',
                headerName: 'Phone number',
                description: 'This column has a value getter and is not sortable.',

                sortable: false,
                width: 160,

            },
            {
                field: 'Class',
                headerName: 'Class',
                width: 110,
                editable: false,
            }
        ];
    }

    export const bookTableConfig = () => {
        return [
            {
                field: 'Cover',
                headerName: 'Cover',
                width: 150,
                height: 300,
                sortable: true,
                renderCell: (params: any) => <img src={params.value}/>,
            },
            {
                field: 'Title',
                headerName: 'Title',
                width: 100,
                sortable: true,
            },
            {
                field: 'ISBN',
                headerName: 'ISBN',
                width: 100,
                sortable: true,
                'type': 'number',
            },
            {
                field: 'Author',
                headerName: 'Author',
                sortable: true,
                width: 100,
                editable: false,
            },
            {
                field: 'Language',
                headerName: 'Language',
                width: 100,
                sortable: true,
                editable: false,
            },
            {
                field: 'Publish_Date',
                headerName: 'Publish_Date',
                width: 100,
                sortable: true,
                editable: false,
            },
        ];
    }

export default studentTableConfig;