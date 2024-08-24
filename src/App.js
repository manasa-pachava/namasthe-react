import React, {lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Body from  "./components/Body"
import Header from "./components/Header"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"

//lazy loading-->on demand loadingy

const Grocery = lazy(()=>import("./components/Grocery") )


const AppLayout = () =>
{
   return (
   <UserContext.Provider value={{loggedInUser:"Manasa Pachava"}}>
   <div className="app">
    <Header/>
   <Outlet/>
    
   </div>
   </UserContext.Provider>
   )

}

const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
           path:"/",
           element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
          },
          {
             path:"/contact",
             element:<Contact/>
          },
          {
            path:"/grocery",
            element: <Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
          },
          {
            path:"/restaurent/:resId",
            element:<RestaurantMenu/>
          }
      ],
      errorElement:<Error/>
   },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)