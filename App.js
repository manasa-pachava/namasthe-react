import React from "react"
import ReactDOM from "react-dom/client"

//JSX IS html LIKE SYNTAX (trapiled to java script)Babel is trasnpiller comnvertt ot java scripy that js engine will undertsnd

const Title = ()=> (<h1 className="heading">
    Title
 </h1>)

 const anotheelm= <span>vanakam</span>
 const elemnyrec = ()=>(<h2>
    {anotheelm}  
    hai mans a</h2>
    );

 //React component
 //class based components-old and functional component-new 

 //react functional component 
 //component composition
 const HeadingComponent = ()=> (
    <div id="container">
   <Title/>
   {elemnyrec()}
 <h1>functional component</h1>
    </div>
 )
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)