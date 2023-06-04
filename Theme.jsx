import style from "./theme.module.css"
const Theme=()=>{

  let dark=()=>{
    document.body.style.background="black"
    document.body.style.color="white"
      }

      let light=()=>{
        document.body.style.background="white"
        document.body.style.color="black"
          }
return(
  <div>
    <div id={style.theme}>
      <h1>dark and light</h1>
      <input type="radio" name="a" onClick={dark} />
      <label htmlFor="">Dark</label>
      <input type="radio" name="a" onClick={light} />
      <label htmlFor="">Light</label>
    </div>
  </div>
)
}
export default Theme