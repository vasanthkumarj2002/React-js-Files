import { Link } from "react-router-dom"
import home from "./homecrud.module.css"
const Homecrud=()=>{
  return(
    <section id={home.nav}>
      <Link to={"/createusers"}>CREATE-USERS</Link>
      <Link to={"/users"}>USERS</Link>
    </section>
  )
}
export default Homecrud