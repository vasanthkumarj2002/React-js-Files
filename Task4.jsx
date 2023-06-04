import { useState } from "react"

const Task4=()=>{
  let[number1,setNumber1]=useState("")
  let[number2,setNumber2]=useState("")
  let[result, setResult]=useState("")
  


  let num1=(e)=>{
    setNumber1(e.target.value)
  }
  let num2=(e)=>{
    setNumber2(e.target.value)
  }

  let add=()=>{
    let a=Number(number1)
    let b=Number(number2)
    setResult(a+b)
  }
  let sub=()=>{
    let a=Number(number1)
    let b=Number(number2)
    setResult(a-b)
  }

  let multi=()=>{
    let a=Number(number1)
    let b=Number(number2)
    setResult(a*b)
  }

  let div=()=>{
    let a=Number(number1)
    let b=Number(number2)
    setResult(a/b)
  }

  return(
    <div>
       <label htmlFor="">Enter the number 1</label>
       <input type="number" value={number1} onChange={num1}/><br /><br />
       <label htmlFor=""> Enter the number 2</label>
       <input type="number" value={number2} onChange={num2} /><br /><br />
       <button onClick={add}>+</button>
       <button onClick={sub}>-</button>
       <button onClick={multi}>*</button>
       <button onClick={div}>/</button>
       <h1>{result}</h1>
    </div>
  )
}
export default Task4