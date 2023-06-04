import axios from "axios"
import home from "./homecrud.module.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users=()=>{
let[content,setContent]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/users").then((response)=>{
      console.log("DATA CAN BE FETCHED");
      console.log(response.data);
      setContent(response.data)
    }).catch(()=>{
      console.log("DATA NOTE FOUND");
    })
  },[])

  let deleteData=(value)=>{
     axios.delete(`http://localhost:3000/users/${value}`)
     window.location.assign("/users")
  }
  return(
    <div id={home.users}>
      {content.map((x)=>{
        return(
          <section id={home.fetchusers}>
            <div className={home.header1}>
              <h1>USERS : {x.id}</h1>
            </div>
        <table id={home.usersdata}>
           <tr>
            <td>Full Name</td>
            <td>: {x.name}</td>
           </tr>
           <tr>
            <td>Email</td>
            <td>: {x.email}</td>
           </tr>
           <tr>
            <td>Phone</td>
            <td>: {x.phone}</td>
           </tr>
           <tr>
            <td>Current Salary</td>
            <td>: {x.salary}</td>
           </tr>
           <tr>
            <td>Company Name</td>
            <td>: {x.company}</td>
           </tr>
           <tr>
            <td>Qualification</td>
            <td>: {x.qualification}</td>
           </tr>
           <tr>
            <td>Percentage</td>
            <td>: {x.percentage}</td>
           </tr>
        </table>
        <div id={home.buttons}>
        <Link to={`/editusers/${x.id}`}>UPDATE</Link>
        <input type="submit" value={"DELETE"} id={home.delete} onClick={()=>{deleteData(x.id)}}/>
        </div>
          </section>
        )
      })}
    </div>
  )
}
export default Users