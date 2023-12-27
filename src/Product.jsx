import "./Product.css"
import Price from "./Price";

function Product ({title , idx }) {
    // console.log("features", features);
    let oldPrices = ["12,999", "11,999", "1999","699"];
    let newPrices = ["10,999", "9,999", "1299","499"];
    let description =[["8,000 DPI" , "5 programable buttons"], ["intuitive surface", "designed for ipad pro"], ["designed for ipad pro", "intuitive surface"], ["wireless", "optical Orientation"]]
    return (
        <div className="Product">
            <h4>{   title  }</h4>
            <p>{description [idx] [0]}</p>
            <p>{description [idx] [1]}</p>
            <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]} />
            
        </div>
    )
}
export default Product;