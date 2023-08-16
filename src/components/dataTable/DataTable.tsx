import {
  DataGrid,
  GridColDef,
  GridToolbar,
 
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
// import "../../../public/noavatar.png"
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn:(id:number)=>{
      return fetch(`http://localhost:8800/api/${props.slug}/${id}`,{
        method: "delete",
      })
    },

    onSuccess: ()=> {
      queryClient.invalidateQueries([`all${props.slug}`])
    }
  })

  const handleDelete = (id:number) => {
    mutation.mutate(id)
    console.log(id + "item has been deleted")

  }

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 60,
    renderCell: (params) => (
      <div className="action">
        <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg" alt="" />
        </Link>
        <div className="delete" onClick={() => handleDelete(params.row.id)}>
          {<img src="/delete.svg"/>}
        </div>
      </div>
    ),
  };
  // props.columns.push(actionColumn) 

  return (
    <div className="dataTable">
      {/* <GridToolbarQuickFilter /> */}
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
        // disableColumnFilter
        // disableDensitySelector
        // disableColumnMenu
      />
    </div>
  );
};

export default DataTable;
