import "./Product.css"

function Product ({title , price = 1}) {
    return (
        <div className="Product">
            
            <h3> title: {title}</h3>
            <h3>price : {price * 2}</h3>
            
        </div>
    )
}
export default Product;