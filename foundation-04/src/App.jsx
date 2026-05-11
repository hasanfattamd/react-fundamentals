import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(5);
  const [obj,setObj]=useState({});

  const obj1 = () =>{
    setObj({
      name:"Mohammed",
      age:20,
    })
  }
  let value = 4;
  const increment = () => {
    setCount(value + 1); // not so good
  };
  const decrement = () => {
    setCount(value - 1); // not so good
  };
  let elem = []
    for (let [key,value] of Object.entries(obj))

      elem.push(<p key={key}>{key}:{value}</p>)
  return (
    <>
      <div>
        <h1>Value :{count}</h1>
        <button onClick={obj1}>Click me</button>
        <div>
          {elem}
        </div>
        <br></br>
        <button onClick={increment}> ✅ </button>
        <button onClick={decrement}> ❌ </button>
      </div>
    </>
  );
}

export default App;
