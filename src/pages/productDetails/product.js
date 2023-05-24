import { useParams } from "react-router-dom"
import { Navbar } from "../../components/navbar/navbar";

export const ProductPage = () => {

    const {productId} = useParams();

    console.log(productId)

    return (
        <div>
            <Navbar></Navbar>
            <div className="product-details">

            </div>
        </div>
    )
}