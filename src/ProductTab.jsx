import Product from "./Product";

function ProductTab(){
let styles = {
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
}
    return (
        <div style={styles}>
          
      <Product title = "Logitech MX Master" idx={0} />
      <Product title = "Apple Pencil (3rd Gen)" idx={1} />
      <Product title = "Zebronics Zeb-transformer" idx={2} />
      <Product title = "Petronics Toad 23 " idx={3} />
  
        </div>
    )

}

export default ProductTab;










// let featuresOptions = ["hi-tech", "durable", "fast", "long-lasting"];
// let featuresOptions2 = { a: "hi-tech", b: "durable", c: "fast", d: "long-lasting" };





        {/* using string */}
      {/* <Product title = "mobile" price = "12000" />
      <Product title = "desktop" price = "45000"/>
      <Product title = "watch" price = "2200"/> */}

      {/* using number  */}
      {/* <Product title = "mobile" price = {12000} />
      <Product title = "desktop" price = {45000}/>
      <Product title = "watch" price = {2200}/> */}