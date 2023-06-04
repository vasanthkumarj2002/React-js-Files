import { useState } from "react"

const Controlled=()=>{
  let[name, setName]=useState("")
  let[email, setMail]=useState("")

  let nameData=(e)=>{
    setName(e.target.value)
  }

  let emailData=(e)=>{
    setMail(e.target.value)
  }

  let formHandel=(e)=>{
      console.log(e);
      e.preventDefault()
      console.log(name, email);
  }
  return(
    <div>
          <label htmlFor="">Name</label>
          <input type="text" onChange={nameData} /><br /><br />
          <label htmlFor="">Email</label>
          <input type="email" onChange={emailData} /><br /><br />
          <button onClick={formHandel}>Submit</button>
    </div>
  )
}
export default Controlled