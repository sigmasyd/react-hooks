import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
  const [counter, setcounter] = useState({
    counter1: 10,
    counter2: 20,
  });
  const { counter1, counter2 } = counter;
  console.log(counter);

  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          //setcounter(counter + 1);

          setcounter({
            counter1: counter1 + 1,
            counter2,
          });
        }}
      >
        +1
      </button>
    </>
  );
};
