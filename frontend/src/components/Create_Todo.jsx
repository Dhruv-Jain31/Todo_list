
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
            fetch("http://localhost:3000/todos"),{
                method: "POST",
                body:{
                    title: "title",
                    description: "description",
                }
            }
            .then(async function(response){
                const json = await response.json();
                alert("To do added successfully")
            })
        }}>Add a todo</button>
    </div>
}