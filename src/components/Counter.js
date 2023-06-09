import React, { useState } from "react";

let Counter = () => {
  const [counter, setCounter] = useState(0);
  

  console.log("counter", counter);

  function alert() {
    if (counter == 5) {
      return <div>Count exceed the limit</div>;
    }
  }

  return (
    <div>
      <div>
        <h2>Count: {counter}</h2>
        {/* <button onClick={()=>handleCounter("Increment")}>Increment</button> */}

        <button onClick={() => {
          if(counter >=5){
            setCounter(5)
          } else{
            setCounter(counter + 1)
          } 
        }}>Increment</button>

        <button onClick={() => {
          if(counter <= 0){
            setCounter(0)
          } else{
            setCounter(counter - 1)
          }
        }}>Decrement</button>

        <button onClick={() => setCounter(0)}>Reset</button>
      </div>

      <div>
        {/* <p>Count exceed the limit</p> */}
        <p>{alert()}</p>
      </div>
    </div>
  );
};

export default Counter;
