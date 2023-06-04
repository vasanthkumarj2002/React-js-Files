import { BrowserRouter, Route, Routes } from "react-router-dom"
import Studentcrud from "./Components/Studentcrud"
import Students from "./Components/Students"
import Editstudent from "./Components/Editstudent"
import Createstudent from "./Components/Createstudent"
import Homecrud from "./Components/Homecrud"
import Createusers from "./Components/Createusers"
import Users from "./Components/Users"
import Editusers from "./Components/Editusers"

const App=()=>{
  return(
    <div>
       <BrowserRouter>
       {/* <Studentcrud/> */}
       <Homecrud/>
       <Routes>
        <Route path="/creatstudent" element={<Createstudent/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/edit/:index" element={<Editstudent/>}/>

        <Route path="/createusers" element={<Createusers/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/editusers/:index" element={<Editusers/>}/>

       </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App