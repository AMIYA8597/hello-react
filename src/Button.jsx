function helloPrint() {
    console.log("Hello Friend!");
    console.log("how r u!");
};

function namePlease() {
    console.log("tell me your name");
}

export default function Button() {
    return (
      <div>
      <button onClick={helloPrint}>CLICK HERE</button>
      <p onClick={namePlease}>
        this is the demo os event in React
      </p>
      </div>  
    );
}