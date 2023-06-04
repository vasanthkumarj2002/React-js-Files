import { useState } from "react"
import Button from "./Button"
import Count from "./Count"

const Main=()=>{
  let[age,setAge]=useState(25)
  let[salary,setSalary]=useState(30000)

  let incerAge=()=>{setAge(age+1)}
  let incerSalary=()=>{setSalary(salary+500) }
  return(
    <div>
      <Count data={age}>Age</Count>
      <Button fun={incerAge}>IncrementAge</Button>
      <Count data={salary}>Salary</Count>
      <Button fun={incerSalary}>IncrementSalary</Button>

    </div>
  )
}
export default Main