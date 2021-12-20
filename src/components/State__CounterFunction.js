import React, { useState } from "react";

const CounterFunction = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(++count)}>+</button>
      <button onClick={() => setCount(--count)}>-</button>
    </div>
  );
};

export default CounterFunction;
