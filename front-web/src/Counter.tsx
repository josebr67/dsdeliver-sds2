/* eslint-disable no-const-assign */

import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(counter= ++counter);
  };
  const handleDecrease = () => {
    setCounter(--counter);
  };
  return (
    <div>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrease}>Decrementar</button>
      <h1>Valor do Contador: {counter}</h1>
    </div>
  );
}

export default Counter;
