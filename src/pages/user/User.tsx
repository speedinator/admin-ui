import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"

const User = () => {

        //Fetch data and Single Component
  return (
    <div className='user'>
        <Single {...singleUser}></Single>
    </div>
  )
}

export default User