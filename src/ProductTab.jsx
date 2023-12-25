import Product from "./Product";

function ProductTab(){

    return (
        <>
      {/* <Product title = "mobile" price = "12000" />
      <Product title = "desktop" price = "45000"/>
      <Product title = "watch" price = "2200"/> */}
      <Product title = "mobile" price = {12000} />
      <Product title = "desktop" price = {45000}/>
      <Product title = "watch" />
  
        </>
    )

}

export default ProductTab;