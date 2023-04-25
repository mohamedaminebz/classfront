import Task from "../task/Task";
 
 
function TaskList(props) {
   
const tasks = props.tasks
    return (
        tasks.map((element,index) =>{
            return(

            
            <Task updateTask={props.updateTask} deleteTask={props.deleteTask} _id={element._id} title={element.title} duration={element.duration} key={index} />
            
            )
    }
    )
    )
}

export default TaskList;



