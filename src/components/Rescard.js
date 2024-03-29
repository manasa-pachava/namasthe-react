
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const Rescard = ({info,cta
  })=> {
    const Lkink=cta.link
    return (
       <div className="rescard">
        <Link to={Lkink} target="_blank" style={{textDecoration:'none',color:'black'}}>
           <img className="resfoodimg" alt="res-logo" src={
            CDN_URL +
           info.cloudinaryImageId
         }/>
           <h2>{info.name}</h2>
           <h4>{info.cuisines.join(", ")}</h4>
           <h4>{info.areaName}</h4>
          <span>
           <h4><i className="fa-solid fa-star"></i>{info.avgRating}</h4>
           <h4>{info.sla.lastMileTravelString}</h4>
           <h4>{info.costForTwo}</h4>
         </span>
         </Link>
       </div>
    );
 }

 export default Rescard