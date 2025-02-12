import { useState } from "react"; 

import { v4 as uuidv4 } from 'uuid';

import "./TodoList.css";




export default function TodoList() {

let [todos , setTodos] = useState([{task: "sample" , id: uuidv4()}]); 
let [newTodo, setNewTodo] = useState("");  
 

let addNewTask = () => { 
setTodos([...todos  , { task: newTodo, id: uuidv4()} ]); 
setNewTodo("");

};





let  updateTodoValue = (event) => {
    setNewTodo(event.target.value);
} ;

    return(
        <div className="box"> 


        <input placeholder="add a task"  
         value={newTodo}    
          onChange={updateTodoValue} ></input> 
        <br /> 
        <br /> 
        <button onClick={addNewTask}>Add Task</button>
   
        <br /> 
        <br /> 
        <br />  
        <hr />
        <h4>The Task i Want to Do</h4>  
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task.toUpperCase()}</li> 
                
            
            ))}
        </ul> 
      
        </div>
    );
} 