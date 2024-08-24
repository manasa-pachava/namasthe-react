import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component
{
    constructor(props){
      super(props)
    }

    

    render(){
        return (
            <div>
                <h1>About Class</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is app for ordering food in hyderbad</h2>
                <UserClass name={"Manasa"} location={"Nandigama"}/>
            </div>
        )
    }
}

export default About