
const parent = React.createElement("div",
{id:"parent"},
[React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"hI am h1"),React.createElement("h2",{},"hI am h2")]),
React.createElement("div",
{id:"child2"},
[React.createElement("h1",{},"Manasa"),React.createElement("h2",{},"Manoj")])]);



//const heading = React.createElement("h1",{id:"heading"},"hello world");
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)