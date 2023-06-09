import React, { useState } from "react";

let Task2 = () => {
  const [counter, setCounter] = useState(0);
  

  console.log("counter", counter);

  function alert() {
    if (counter == 5) {
      return <div>Count exceed the limit</div>;
    }
  }

  // function handleCounter(){
  //     if (counter >=5) {
  //         setCounter(5)
  //         document.getElementById("btn").disabled=true
  //     }
  //     else {
  //           setCounter(counter + 1)

  //     }

  // }

  let button = document.getElementById("btn")

  function handleCounter(operation) {
    if (operation == "Increment") {
      if (counter >= 5) {
        setCounter(5);
        button.disabled = true;
      } else  if(counter>=0 || counter < 5){
        setCounter(counter + 1);
                
      }
    } else if (operation == "Decrement") {
      if (counter <= 0) {
        setCounter(0);
      } else {
        setCounter(counter - 1);
        button.disabled = false;
      }
    } else if (operation == "Reset") {
      setCounter(0);
    }
  }

  return (
    <div>
      <div>
        <h2>Count: {counter}</h2>
        <button id="btn" onClick={() => handleCounter("Increment")}>
          Increment
        </button>
        <button id="" onClick={() => handleCounter("Decrement")}>
          Decrement
        </button>
        <button onClick={() => handleCounter("Reset")}>Reset</button>

        {/* <button id="btn" onClick={() => {
          if(counter >=5){
            setCounter(5)
            document.getElementById("btn").disabled = true
           
          } else {
            setCounter(counter + 1)
          } 
                   
        }}>Increment</button>
        

        <button onClick={() => {
          if(counter <= 0){
            setCounter(0)
          } else{
            setCounter(counter - 1)
          }
        }}>Decrement</button> */}

        {/* <button onClick={() => setCounter(0)}>Reset</button> */}
      </div>

      <div>
        {/* <p>Count exceed the limit</p> */}
        <p>{alert()}</p>
      </div>
    </div>
  );
};

export default Task2;
