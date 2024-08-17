import UserClass from "./UserClass";
import React from "react";
class About extends React.Component
{
    constructor(props){
      super(props)
    }

    

    render(){
        return (
            <div>
                <h1>About Class</h1>
                <h2>This is app for ordering food in hyderbad</h2>
                <UserClass name={"Manasa"} location={"Nandigama"}/>
            </div>
        )
    }
}

export default About