import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./add.scss"
// import { GridColDef } from "@mui/x-data-grid"

const Add = (props:any) => {

    const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn:()=>{
      return fetch(`http://localhost:8800/api/${props.slug}s`,{
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 4,
            img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
            lastName: "Williamson",
            firstName: "Mildred",
            email: "tinhavabe@gmail.com",
            phone: "123 456 789",
            createdAt: "01.02.2023",
            verified: true,
        })
      })
    },

    onSuccess: ()=> {
      queryClient.invalidateQueries([`all${props.slug}s`])
    }
  })

    const handleSubmit = (e:any) => {

        e.preventDefault()
        console.log("submit")

        //add new item
        // axios.post(`/api/${slug}s`)

        mutation.mutate()
    }

    // console.log(props.columns.filter(item => item.field !== "id" ))
  return (
    <div className="add">
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns.filter((item: any) => item.field !== "id" && item.field !== "img").map((col: any) => (
                    <div className="item">
                        <label>{col.headerName}</label>
                        <input type={col.type} placeholder={col.field}/>
                    </div>
                ))}
            <button onClick={() => props.setOpen(false)}>Send</button>
            </form>
        </div>
   
    </div>

  )
}

export default Add