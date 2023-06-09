import React,{ useState } from "react";

const Test = ()=> {
    const [count, setCount] = useState(0)
    
    console.log(count)
     
    function increment(){
         if(count>=5){
          setCount(5)
         }
         else{
            setCount(count+1)
         }
    }
    
    return(
        <div>
            <h2>count:{count}</h2>
           <button onClick={()=>increment()}>Incre</button>
           <button>Decre</button>
        </div>
    )
}

export default Test