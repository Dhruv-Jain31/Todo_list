
export function Create_Todo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    return <div>
        <input style = {{
            padding: 10,
            margin: 10
        }}
        type = "text" placeholder = "title" onChange={function(event){
            const value = event.target.value;  // event.target targets to this title DOM
            setTitle(value);
        }}></input><br></br>

        <input style = {{
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
            fetch("http://localhost:3000/todos",{
                method: "POST",
                body: JSON.stringify({
                    title: "title",  // sending the global state title and description
                    description: "description"
                }),
                headers: {
                    "ContentType" : "applicaton/json"
                }
            })
            .then(function(response){
                return response.json(); // this is again returns a promise
            })
            .then(function(res){
                alert("Todo added successfully")
                return res.json();
            })
            .catch(function(error){
                alert("Error in adding todo")
                console.error("Error adding the todo", error);
            })

        }}>Add a todo</button>
    </div>
}