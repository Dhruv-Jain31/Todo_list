// this is the component that renders todo's i.e puts them on the DOM

/*  todos = [
    {
      title: "go to gym"
      description: "sweat it out"
      }
    ]
*/

import PropTypes from 'prop-types';

export function Todos_Rerender ({todos}) {

    return <div>
        {todos.map(function(todo, index) { // iterates over all the todos and map it to div
            return <div key = { index }>
                <h2>Title: </h2>
                <b>{todo.title}</b>
                <h3>Description: </h3>
                <p>{todo.description}</p><br></br>
                <button style = {{
                    padding : '8px 16px',
                    margin : '8px',
                    backgroundColor: todo.completed == true ? 'green' : 'lightblue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    {todo.completed == true ? "Completed ✔" : "Mark as Complete"}
                    </button>
            </div>
        })}
    </div>
}

Todos_Rerender.propTypes = {
    todos: PropTypes.arrayOf(

//PropTypes.shape is a function that allows you to specify the structure (shape) of an object prop.
//PropTypes.shape takes an object as an argument.
//The keys of this object represent the properties of the object prop.
//The values are PropTypes validators that specify the expected type and requirements for each property.

        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            completed: PropTypes.bool
        })
    )
};