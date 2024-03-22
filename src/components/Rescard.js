
import { CDN_URL } from "../utils/constants";
const Rescard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  })=> {
    return (
       <div className="rescard">
           <img className="resfoodimg" alt="res-logo" src={
            CDN_URL +
           cloudinaryImageId
         }/>
           <h2>{name}</h2>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{area}</h4>
          <span>
           <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
           <h4>{lastMileTravelString}</h4>
           <h4>{costForTwoString}</h4>
         </span>
       </div>
    );
 }

 export default Rescard