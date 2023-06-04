import { useCallback, useState } from "react"
import Button1 from "./Button1"
import Count1 from "./Count1"

const Main1=()=>{
  let[age,setAge]=useState(25)
  let[salary,setSalary]=useState(30000)

  let incerAge=useCallback(()=>{setAge(age+1)},[age])
  let incerSalary=useCallback(()=>{setSalary(salary+500) },[salary])
  return(
    <div>
      <Count1 data={age}>Age</Count1>
      <Button1 fun={incerAge}>IncrementAge</Button1>
      <Count1 data={salary}>Salary</Count1>
      <Button1 fun={incerSalary}>IncrementSalary</Button1>

    </div>
  )
}
export default Main1