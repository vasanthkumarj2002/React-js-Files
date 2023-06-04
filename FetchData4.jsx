import axios from "axios"
import { useEffect, useState } from "react"

const FetchData4=()=>{
  let[count, setCount]=useState([])
  let[userId,setUserId]=useState("")
  let[btn,setBtn]=useState("")

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`).then((response)=>{
      console.log("Data is fetch successfully fetched");
      console.log(response.data);
      setCount(response.data)
    }).catch(()=>{
          console.log("Data not Found");
    })
  },[btn])

 let userIdData=(e)=>{
        setUserId(e.target.value)
  }
  let fetch=()=>{
    setBtn(userId)
  }
  return(
    <div>
      <label htmlFor="">Enter userId</label>
         <input type="text" value={userId} onChange={userIdData} />
         <button onClick={fetch}>Fetch</button>
         <h1>{count.id}</h1>
         <h1>{count.title}</h1>
         <h1>{count.userId}</h1>
    </div>
  )
}
export default FetchData4