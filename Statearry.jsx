import { useState } from "react"

const Statearry=()=>{
  let[data,setData]=useState(["hi","hello","bye",33,'a'])
  let[obj,setObj]=useState({name:"vasanth",age:21})
  return(
    <div>
        <h1>{data[0]}</h1>
        <h1>{data[1]}</h1>
        <h1>{data[2]}</h1>
        <h1>{data[3]}</h1>
        <h1>{data[4]}</h1>
        <h1>{obj.name}</h1>
        <h1>{obj.age}</h1>
    </div>
  )
}
export default Statearry