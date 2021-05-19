import React from "react"
const Todo = ({text,setTodo,todos, todo,itemId})=>{
    const deleteHandler=()=>{
       setTodo(todo.filter(item=>item.id !== itemId))
    }
    const  completeHandler =async () =>{
        setTodo(todo.map(item=>{
            if(item.id===itemId){
                return{
                    ...item, completed :!item.completed
                    
                    
                }
            }
            return item
        }))
        console.log(todos )
    }
    return(
        <div className= "todo">
            <li className={`todo-item ${todos.completed ? "completed" : ""}`}>
            {text}
            </li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default  Todo