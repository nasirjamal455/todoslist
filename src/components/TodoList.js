import React from "react";
import {useSelector} from 'react-redux';

import Todo from "./Todo"
const TodoList =()=> {
    const todos = useSelector(state=>state.Todos.todos);
    return(
        <div className ="todo-container">
            <ul className ="todo-list">
                {todos.map((todos)=> (
                    <Todo itemId={todos.id} todos={todos}  text= {todos.text } key={todos.id}/>
                ))}
            </ul>
        </div>
    )
}
export default TodoList