import Rescard from "./Rescard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import {SWIGGY_URL} from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
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

   const onlineStatus = useOnlineStatus();

   if(onlineStatus=== false) 
      return (
      <h1> Looks like you're offline!! please check your internet connection</h1>
      )
  
    return listOfRestaurents.length === 0 ? (
    <Shimmer/> ): (
       <div className="body">
          <div className="filter flex">
            <div className="searchbar m-4 p-4">
               <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                  setsearchText(e.target.value)
               }}></input>
               <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                 const filterSearch=listOfRestaurents.filter((res)=>res.info.name.toLowerCase().includes( searchText));
                 setfilteredRes(filterSearch)
               }}>Search</button>
            </div>
            <div className="searchbar m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 m-4" onClick={()=>{const fillistOfRestaurents = listOfRestaurents.filter((item) => item.info.avgRating > 4.0);
         setfilteredRes(fillistOfRestaurents)}}>Top Rated Restaurents</button>
         </div>
          </div>
          <div className="flex flex-wrap">
          {filteredRes.map((restaurant) => {
         return <Rescard key={restaurant.info.id} {...restaurant} />;
       })}
          </div>
 
       </div>
    )
 }

 export default Body;