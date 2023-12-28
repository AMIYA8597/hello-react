function handleClick() {
  console.log("Hello Friend!");
  console.log("how r u!");
}

function handleMouseOver(event) {
  console.log("tell me your name");
  console.log(event);
}
function handleDoubleClicker() {
  console.log("you double clicked");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>CLICK HERE</button>
      {/* <p onClick={namePlease}>
        this is the demo os event in React
      </p> */}

      <p onMouseOver={handleMouseOver}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
        delectus. Assumenda unde sequi nemo doloremque ullam, suscipit nulla
        nobis inventore ratione autem et quae minus natus totam dolorum facere
        laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quaerat, sit. Quia similique voluptate cum excepturi reprehenderit,
        numquam sequi dolorem magni consequatur laudantium ipsa odit omnis
        minima at quidem, voluptas quam.
      </p>
      <button onDoubleClick={handleDoubleClicker}> you double click me </button>
    </div>
  );
}
