// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"

import Item from "./Todo"

const TodoList = props => {
    return (
        <div className="todos">
            {props.todos.map(item => (
                <Item toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>Completed</button>
        </div>
    );
};
export default TodoList;