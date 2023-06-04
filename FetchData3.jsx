import axios from "axios"
import { useEffect, useState } from "react"
const FetchData3=()=>{
  let[count,setCount]=useState([])
  let[id,setId]=useState("")
  let[btn,setBtn]=useState("")

  useEffect(()=>{ 
      axios.get(`https://jsonplaceholder.typicode.com/users/${btn}`).then((response)=>{
      console.log("Data is Successfully fetched");
      console.log(response.data);
      setCount(response.data)
    }).catch(()=>{
      console.log("Data not Found");
    })  
  },[btn])

  let idData=(e)=>{
    setId(e.target.value)
  }
  let click=()=>{
    setBtn(id)
  }
  return(
        <div>
          <label htmlFor="">Enter ID</label>
          <input type="text" value={id} onChange={idData} />
          <button onClick={click}>submit</button>
          <h1>{count.username}</h1>
          <h1>{count.id}</h1>
              </div>
            )
          }
export default FetchData3