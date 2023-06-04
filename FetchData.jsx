import { Fragment, useState } from "react"
import content from "./usersData.json"
const FetchData=()=>{
  let[user, setUser]=useState(content)
  return(
    <div>
      {/* <h1>{user[0].login}</h1> */}
        {user.map((x)=>{
        return(
        <Fragment key={x.id}>
          <h1>{x.id}</h1>
          <h1>{x.login}</h1>
          <img src={x.avatar_url} />
          </Fragment>
        
        )
      })}
    </div>
  )
}
export default FetchData