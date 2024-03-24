import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
   let [btnNameReact,setbtnNameReact]=useState("Login")
    return (
       <div className="header">
          <div className="logo">
             <img className="logo" src={LOGO_URL}/>
          </div>
          <div className="navitems">
           <ul>
             <li>Home</li>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Cart</li>
             <button className="login-button" onClick={()=>
               {btnNameReact ==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")}}>{btnNameReact}</button>
           </ul>
          </div>
 
       </div>
    )
 }

 export default Header;