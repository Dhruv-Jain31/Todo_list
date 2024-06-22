
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

        <button>Add a todo</button>
    </div>
}