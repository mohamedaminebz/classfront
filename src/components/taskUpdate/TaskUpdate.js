import "./task.css"
import { useState } from 'react';
function Task({title,duration,deleteTask,_id}) {
 
    return (
        <div className="task"
            style={{
                backgroundColor:"orange"
            }}
        >
            <div className="title">
                {title}
            </div>
           
            <br/>
            <form action="" className="form">
            <input type="text" name="title" value={title} onChange={handleTitle} />
            
            <br></br>
            <button type="button" onClick={handleUpdate}>Update a task</button>
            
        </form>
           
           
        </div>
    )
}

export default Task;