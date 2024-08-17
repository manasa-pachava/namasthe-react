import React from "react"

class UserClass extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
       
    }

    async componentDidMount(){
        console.log("component mounted after cn structor and render")
        //APi Calls this method
        const data = await fetch("https://api.github.com/users/manasa-pachava")
        const json = await data.json()
        this.setState({
            userInfo:json
        })
        console.log(json)
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    componentwillUnmount(){
        console.log("component unmounted")
    }

    render(){
        const {name,location}=this.state.userInfo
        return (<div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: manasapachava99@gmail.com</h4>
         </div>
        )
    }


}
export default UserClass;