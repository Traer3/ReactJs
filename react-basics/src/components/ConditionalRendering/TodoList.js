import React from "react";

const TodoList = () => {

    const todos = [
        {id: 1, text: "Learn React"},
        {id: 2, text: "Practice JavaScript"},
        {id: 3, text: "Build a project"},
        {id: 4, text: "KYS"},
        {id: 5, text: "Order pizza"}
    ]
    return(
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};

export default TodoList;

