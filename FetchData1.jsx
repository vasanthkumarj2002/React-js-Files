import axios from "axios"
import { useEffect, useState } from "react"
const FetchData1=()=>{
  let[count,setCount]=useState([])
  useEffect(()=>{ 
      axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      console.log("Data is Successfully fetched");
      console.log(response.data);
      setCount(response.data)
    }).catch(()=>{
      console.log("Data not Found");
    })  
  },[])
  return(
        <div>
          {count.map((x)=>{
            return(
              <div>
                <h1>{x.id}</h1>
                <h1>{x.username}</h1>
              </div>
            )
          })} 
    </div>
  )
}
export default FetchData1