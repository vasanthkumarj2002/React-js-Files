import { useState } from "react"
import home from "./homecrud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Createusers=()=>{
  let[name,setName]=useState()
  let[email,setEmail]=useState()
  let[phone,setPhone]=useState()
  let[salary,setSalary]=useState()
  let[company,setCompany]=useState()
  let[qualification,setQualification]=useState()
  let[percentage,setPercentage]=useState()

  let nav=useNavigate()

let nameData=(e)=>{
  setName(e.target.value)
}
let emailData=(e)=>{
  setEmail(e.target.value)
}
let phoneData=(e)=>{
  setPhone(e.target.value)
}
let salaryData=(e)=>{
  setSalary(e.target.value)
}
let companyData=(e)=>{
  setCompany(e.target.value)
}
let qualificationData=(e)=>{
  setQualification(e.target.value)
}
let percentageData=(e)=>{
  setPercentage(e.target.value)
}

let formHandel=()=>{
  let data={name,email,phone,salary,company,qualification,percentage}
  axios.post("http://localhost:3000/users",data).then((response)=>{
     console.log("DATA CAN SAVE SUCCESSFULLY");
     console.log(response.data);
  }).catch(()=>{
    console.log("SOME THINK MISSING!!!!!!!!");
  })
  nav("/users")
}


  return(
    <section id={home.mainuser}>
      <form className={home.form}>
        <div className={home.header}>
          <h1>REGISTER</h1>
        </div>
         <div className={home.form_group}>
          <label htmlFor="">Full Name* :</label>
          <input type="text" value={name} onChange={nameData}/>
          <p className={home.ERROR}></p>
         </div>
         <div className={home.form_group}>
          <label htmlFor="">Email* :</label>
          <input type="email" value={email} onChange={emailData}/>
          <p className={home.ERROR}></p>
         </div>
         <div className={home.form_group}>
          <label htmlFor="">Phone* :</label>
          <input type="number" value={phone} onChange={phoneData}/>
          <p className={home.ERROR}></p>
         </div>
         <div className={home.form_group}>
          <label htmlFor="">Current Salary* :</label>
          <input type="number" value={salary} onChange={salaryData}/>
          <p className={home.ERROR}></p>
         </div>
         <div className={home.form_group}>
          <label htmlFor="">Company Name* :</label>
          <input type="text" value={company} onChange={companyData}/>
          <p className={home.ERROR}></p>
         </div>
         <div className={home.form_group}>
          <label htmlFor="">Qualification* :</label>
          <input type="text" value={qualification} onChange={qualificationData} />
          <p className={home.ERROR}></p>
         </div>
         <div className={home.form_group}>
          <label htmlFor="">Percentage* :</label>
          <input type="number" value={percentage} onChange={percentageData}/>
          <p className={home.ERROR}></p>
         </div>
         <button id={home.btn} onClick={formHandel}>Submit</button>
      </form>
    </section>

  )
}
export default Createusers