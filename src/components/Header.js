import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   let [btnNameReact,setbtnNameReact]=useState("Login")
    return (
       <div className="header">
          <div className="logo">
             <img className="logo" src={LOGO_URL}/>
          </div>
          <div className="navitems">
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About Us</Link></li>
             <li><Link to="/contact">Contact Us</Link></li>
             <li>Cart</li>
             <button className="login-button" onClick={()=>
               {btnNameReact ==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")}}>{btnNameReact}</button>
           </ul>
          </div>
 
       </div>
    )
 }

 export default Header;