import { useRef } from "react"
const Uncontrolled=()=>{
let name=useRef()
let email=useRef()
let salary=useRef()
let password=useRef()

let click=(e)=>{
  e.preventDefault()
  let x=name.current.value
  console.log(x);
  let y=email.current.value
  console.log(y);
  let z=salary.current.value
  console.log(z);
  let r=password.current.value
  console.log(r);
}
  return(
    <div>
         <label htmlFor=""  >Name</label>
         <input type="text" ref={name}/><br /><br />
         <label htmlFor="">Email</label>
         <input type="email" ref={email}/><br /><br />
         <label htmlFor="">salary</label>
         <input type="number" ref={salary}/><br /><br />
         <label htmlFor="">Password</label>
         <input type="Password" ref={password}/><br /><br />
         <button onClick={click}>submit</button>
    </div>
  )
}
export default Uncontrolled