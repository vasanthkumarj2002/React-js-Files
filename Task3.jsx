import { useRef, useState } from "react"

const Task3=()=>{
  let num1= useRef()
  let num2= useRef()
  let [result ,setResult]=useState(0)
 
  let add=()=>{
    let a=Number(num1.current.value)
    let b=Number(num2.current.value)
    setResult(a+b)
  }

  let sub=()=>{
    let a=Number(num1.current.value)
    let b=Number(num2.current.value)
    setResult(a-b)
  }

  let multi=()=>{
    let a=Number(num1.current.value)
    let b=Number(num2.current.value)
    setResult(a*b)
  }

  let div=()=>{
    let a=Number(num1.current.value)
    let b=Number(num2.current.value)
    setResult(a%b)
  }

  return(
    <div>
         <label htmlFor="">Enter number 1</label><br />
         <input type="number" ref={num1}/><br />
         <label htmlFor="">Enter number 2</label><br />
         <input type="number" ref={num2}/><br />
         <button onClick={add}>+</button>
         <button onClick={sub}>-</button>
         <button onClick={multi}>*</button>
         <button onClick={div}>/</button>
         <h1>{result}</h1>
    </div>
  )
}
export default Task3