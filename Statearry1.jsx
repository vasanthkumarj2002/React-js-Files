import { useState } from "react"

const Statearry1=()=>{
  let[data,setData]=useState(["I","am","Vasanth",21,'a'])
  return(
      <div>
        {data.map((x)=>{
          return(
            <h1>{x}</h1>
          )
        })}
      </div>
  )
}
export default Statearry1