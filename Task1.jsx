import { useState } from "react"

const Task1=()=>{
  let[count, setCount]=useState(0)
  let incre=()=>{
    setCount(count+1)
  }

  let decre=()=>{
    setCount(count-1)
  }

  let reset=()=>{
    setCount(0)
  }
return(
  <div>
    {count}
    <button onClick={incre}>INCREMENT</button>
    <button onClick={decre}>DECREMENT</button>
    <button onClick={reset}>RESET</button>
  </div>
)
}
export default Task1