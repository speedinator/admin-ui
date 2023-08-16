import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

const Product = () => {

    //Fetch data and Single Component
  return (
    <div className="product">
        <Single {...singleProduct}></Single>
        
    </div>
  )
}

export default Product