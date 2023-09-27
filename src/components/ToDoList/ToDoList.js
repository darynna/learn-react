import React from "react";
import './ToDoList.css'


export const ToDoList = ({todos, onDeleteToDo}) => {
return <ul>
    {todos.map(({id, text}) => (
        <li className="ToDoList_item" key={id}><p className="ToDoList_text">{text}</p>
        <button onClick={() => onDeleteToDo(id)}>Delete</button>
        </li>
    ))}
</ul>
};

