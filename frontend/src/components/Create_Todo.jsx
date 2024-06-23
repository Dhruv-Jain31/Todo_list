
export function Create_Todo(){
    return <div>
        <input style = {{
            padding: 10,
            margin: 10
        }}
        type = "text" placeholder = "title"></input><br></br>

        <input style = {{
            padding: 10,
            margin: 10
        }}
        type = "text" placeholder = "description"></input><br></br>

        <button style = {{
            padding: 10,
            margin: 10
        }} onClick = {function(){
            fetch("http://localhost:3000/todos")
            .then(async function(response){
                const json = await response.json();
                alert("To do added successfully")
            })
        }}>Add a todo</button>
    </div>
}