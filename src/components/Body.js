import Rescard from "./Rescard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import {SWIGGY_URL} from "../utils/constants";
 
//local state variable -->super powerful variable
//


const Body = () => {
   const [listOfRestaurents,setListOfRestaurents] = useState([]);
   const [filteredRes,setfilteredRes]=useState([])
   const [searchText,setsearchText]=useState("")
   useEffect(()=>{featchData()},[]);
   featchData = async () =>{
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
      setfilteredRes(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
   }

  
    return listOfRestaurents.length === 0 ? (
    <Shimmer/> ): (
       <div className="body">
          <div className="filter">
            <div className="searchbar">
               <input type="text" className="searchbox" value={searchText} onChange={(e)=>{
                  setsearchText(e.target.value)
               }}></input>
               <button onClick={()=>{
                 const filterSearch=listOfRestaurents.filter((res)=>res.info.name.toLowerCase().includes( searchText));
                 setfilteredRes(filterSearch)
               }}>Search</button>
            </div>
          <button className="filter-btn" onClick={()=>{const fillistOfRestaurents = listOfRestaurents.filter((item) => item.info.avgRating > 4.0);
         setfilteredRes(fillistOfRestaurents)}}>Top Rated Restaurents</button>
          </div>
          <div className="rescon">
          {filteredRes.map((restaurant) => {
         return <Rescard key={restaurant.info.id} {...restaurant} />;
       })}
          </div>
 
       </div>
    )
 }

 export default Body;