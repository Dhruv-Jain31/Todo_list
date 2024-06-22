// this is the components that renders todo's i.e puts them on the DOM

/*  todos = [
    {
      title: "go to gym"
      description: "sweat it out"
      }
    ]
*/

import PropTypes from 'prop-types';

export function Todos ({todos}) {

    return <div>
        {todos.map(function(todo, index) { // iterates over all the todos and map it to div
            return <div key = { index }>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired
};