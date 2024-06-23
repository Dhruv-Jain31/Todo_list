import { useState } from "react";
export function Create_Todo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    return <div>
        <input id="title" style = {{
            padding: 10,
            margin: 10
        }}
        type = "text" placeholder = "title" onChange={function(event){
            const value = event.target.value;  // event.target targets to this title DOM
            setTitle(value);
        }}></input><br></br>


        <input id="description" style = {{
            padding: 10,
            margin: 10
        }}
        type = "text" placeholder = "description" onChange={function(event){
            const value = event.target.value;
            setDescription(value);
        }}></input><br></br>

        <button style = {{
            padding: 10,
            margin: 10
        }} onClick = {function(){
            // app use checks whether the inputs are json and if headers are json it accepts it. else ignore
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,  // sending the global state title and description
                    description: description
                }),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added successfully")
                setTitle('');
                setDescription('');
            })
            .catch(function(error){
                console.error("Error in adding the todo: ", error);
            })

        }}>Add a todo</button>
    </div>
}