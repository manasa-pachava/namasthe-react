import Rescard from "./Rescard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";
 
//local state variable -->super powerful variable


const Body = () => {
   const [listOfRestaurents,setListOfRestaurents] = useState(restaurantList);
    return (
       <div className="body">
          <div className="filter">
          <button className="filter-btn" onClick={()=>{const fillistOfRestaurents = listOfRestaurents.filter((item) => item.data.avgRating > 4.0);
         setListOfRestaurents(fillistOfRestaurents)}}>Top Rated Restaurents</button>
          </div>
          <div className="rescon">
          {listOfRestaurents.map((restaurant) => {
         return <Rescard key={restaurant.data.id} {...restaurant.data} />;
       })}
          </div>
 
       </div>
    )
 }

 export default Body;