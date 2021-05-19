import React,{useState} from 'react'

function Form({setText ,text, setTodo, todo,setSelect}) {


   const inputHandler =(e)=>{
       setText(e.target.value)
   }
   const clickHandler =(e)=>{
    e.preventDefault()
    if(!text){
      return  alert("fields is empty")
    }
    setTodo([
        ...todo, {text:text, id:Math.random()*10, completed:false}
    ])
    
    setText("")
   }
   const selectOption = (e)=>{
    setSelect(e.target.value)
   }

    return (
        <div>
    <form>
      <input value= {text} onChange ={inputHandler} 
      type="text" className="todo-input" />
      <button onClick ={clickHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={selectOption} name="todos"  className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        </div>
    )
}

export default Form
