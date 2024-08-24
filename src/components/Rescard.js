
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const Rescard = ({info,cta
  })=> {
    const Lkink=cta.link
    const {loggedInUser}=useContext(UserContext)
   
    const dispatch = useDispatch()
    const handleAddItem = (item)=>{
      //dispatch an action
      dispatch(addItem(item))
    }

    return (
       <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <Link to={Lkink} target="_blank" style={{textDecoration:'none',color:'black'}}>
           <img className="rounded-lg" alt="res-logo" src={
            CDN_URL +
           info.cloudinaryImageId
         }/>
           <h2 className="font-bold py-4 text-lg">{info.name}</h2>
           <h4>{info.cuisines.join(", ")}</h4>
           <h4>{info.areaName}</h4>
          <span>
           <h4><i className="fa-solid fa-star"></i>{info.avgRating}</h4>
           <h4>{info.sla.lastMileTravelString}</h4>
           <h4>{info.costForTwo}</h4>
           <h4>User:{loggedInUser}</h4>
           
         </span>
         </Link>
         <span>
         <button className="text-white bg-black p-2 my-4 mx-3 rounded-xl" onClick={()=>handleAddItem(info)}>Add</button>
         </span>
       </div>
    );
 }

 export default Rescard