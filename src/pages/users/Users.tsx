import "./users.scss";
import Box from "@mui/material/Box";
import {

  GridColDef,

  GridValueGetterParams,
} from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
// import {
//   useQuery,
// } from "@tanstack/react-query";


let users = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "hubbard@gmail.com",
    phone: "423 452 729",
    createdAt: "05.07.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "manning@gmail.com",
    phone: "422 426 715",
    createdAt: "03.07.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "greer@hottmail.com",
    phone: "563 632 325",
    createdAt: "02.07.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "williamson@gmail.com",
    phone: "534 522 125",
    createdAt: "12.06.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "462 252 624",
    createdAt: "10.06.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "735 523 563",
    createdAt: "11.05.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "235 734 574",
    createdAt: "04.05.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "377 346 834",
    createdAt: "08.04.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "parsons@gmail.com",
    phone: "745 677 345",
    createdAt: "04.04.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "elnora@gmail.com",
    phone: "763 345 346",
    createdAt: "01.04.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gertrude@gmail.com",
    phone: "124 456 789",
    createdAt: "05.04.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "williams@hotmail.com",
    phone: "626 235 345",
    createdAt: "01.03.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "charlotte@gmail.com",
    phone: "673 547 343",
    createdAt: "03.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "harper@hotmail.com",
    phone: "734 234 234",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "griffin@gmail.com",
    phone: "763 234 235",
    createdAt: "01.01.2023",
  },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    editable: true,
    renderCell: (params) => <img src={params.row.img || "noavatar.png"} />,
  },
  // {
  //   field: "actions",
  //   headerName: "Actions",
  //   width: 100,
  //   editable: true,
  //   renderCell: (params) => (
  //     <div className="action">
  //       <div className="view">View</div>
  //       <div className="view">Delete</div>
  //     </div>
  //   ),
  // },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

// const rows = [
//   {
//     id: 1,
//     lastName: "Snow",
//     firstName: "JonJonJonJonJonJon",
//     age: 35,
//     status: true,
//   },
//   {
//     id: 2,
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     status: true,
//   },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150, status: true },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export function DataGridDemo() {
  return (
    <div>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataTable slug="users" rows={userRows} columns={columns} />
      </Box>
    </div>
  );
}

const Users = () => {
  // const { isLoading, data } = useQuery({
  //   queryKey: ["allUsers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then((res) =>
  //       res.json()
  //     ),
  // });

  const [open, setOpen] = useState(false);

  const handleclick = (e:any) => {
    e.preventDefault();
    setOpen(true);
    console.log("test");
  };



  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={(e) => handleclick(e)}>Add New User</button>
      </div>
      <div className="container">
        <div className="grid">
          {/* <Box sx={{ height: "100%", width: "100%" }}> */}

          {
          // isLoading ? (
          //   "Loading..."
          // ) : (

            <DataTable slug="users" rows={users} columns={columns} />
          // )
          }
          {/* </Box> */}
        </div>
        <div className="test">
          {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Users;
