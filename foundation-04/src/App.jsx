import { useState } from "react";

import "./App.css";

function App() {
  let [value, setValue] = useState(5);
  //   let value = 4;
  const increment = () => {
    setValue(value + 1); // not so good
  };
  const decrement = () => {
    setValue(value - 1); // not so good
  };
  return (
    <>
      <div>
        <h1>Value :{value}</h1>
        <button onClick={increment}> ✅ </button>
        <button onClick={decrement}> ❌ </button>
      </div>
    </>
  );
}

export default App;
