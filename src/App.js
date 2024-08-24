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
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
//lazy loading-->on demand loadingy
import Cart from "./components/Cart"

const Grocery = lazy(()=>import("./components/Grocery") )


const AppLayout = () =>
{
   return (
      <Provider store={appStore}>
   <UserContext.Provider value={{loggedInUser:"Manasa Pachava"}}>
   <div className="app">
    <Header/>
   <Outlet/>
    
   </div>
   </UserContext.Provider>
   </Provider>
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
          },
          {
            path:"/cart",
            element:<Cart/>
          }
      ],
      errorElement:<Error/>
   },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)