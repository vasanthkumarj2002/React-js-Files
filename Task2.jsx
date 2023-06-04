import { useState } from "react"

const Task2=()=>{
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
    <i class="fa-sharp fa-solid fa-thumbs-up" onClick={incre}></i><sup>{count}</sup>
  </div>
)
}
export default Task2