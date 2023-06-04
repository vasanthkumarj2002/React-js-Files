import axios from "axios"
import { useEffect, useState } from "react"

const FetchData2=()=>{
  let[count,setCount]=useState([])


  useEffect(()=>{
    axios.get("https://api.github.com/users").then((response)=>{
      console.log("Data is fetch");
      console.log(response.data);
      setCount(response.data)
    }).catch(()=>{
      console.log("Data not found");
    })
  },[])
  return(
    <div>
      {count.map((x)=>{
        return(
          <div>
            <h1>{x.id}</h1>
            <h1>{x.login}</h1>
            <h1>{x.avatar_url}</h1>
          </div>
        )
      })}
    </div>
  )
}
export default FetchData2