import TaskForm from "../../components/taskForm/TaskForm";

import TaskList from "../../components/taskList/TaskList";
import { useState ,useEffect} from "react";
import  *  as api from "../../services/tasks2.service";

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true);
  const steps = ["Enter a title", "click on button"];
  const [tasks, setTasks] = useState([]);
    const [loading,setLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [searchValue, setSearchValue] = useState("")
 
// 3ème forme de useEffect
 /*  useEffect(() => {
      const fetchData = async () => {
       setLoading(true)
       if (searchValue.length === 0) {
         console.log("tasks empty")
         setTasks([])
       setLoading(false)
       } else {
         const result = await api.fetchTasksByFilter(searchValue)
          console.log("tasks form api : " + searchValue)
         setTasks(result)
         setLoading(false)
       }
     }
     console.log("searchValue", searchValue)
      fetchData()
   }, [searchValue])


*/

  useEffect(() => {
    async function fetchData(){
        try{
        setLoading(true);
        const res = await api.fetchTasks();
        setTasks(res);
        setLoading(false);
    } catch(e){
        setLoading(false);
        console.log(e);
        setIsError(true);
    }
        
    
      }
    fetchData()
   
  },[]);
  
  /*function updateTask(title, _id) {
    console.log(title + _id);
    const res = tasks.map((task) =>
      task._id === _id ? { ...task, title } : task
    );

    setTasks(res);
  }
  function addTask(title, duration) {
    const newTask = { _id: tasks.length + 1 + "", title, duration };
    const res = tasks.concat(newTask);
    setTasks(res);
    console.log(tasks);
  }

  function deleteTask(_id) {
    console.log(_id);

    const res = tasks.filter((t) => t._id !== _id);
    setTasks(res);
  }*/
  const addTask = async (title, duration) => {
    try {
      setLoading(true)
      const newTask = await api.addTask({
        title,duration
      })
      setTasks([...tasks, newTask])
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }
  const deleteTask = async (id) => {
    try {
      setLoading(true)
      await api.deleteTask(id)
      const newTasks = tasks.filter((task) => task._id !== id)
      setTasks(newTasks)
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }

  const updateTask = async (id, title, duration) => {
    try {
      setLoading(true)
      const newTask = await api.updateTask(id, {
        title,duration
      })
      const newTasks = tasks.map((task) => (task._id === id ? newTask : task))
      setTasks(newTasks)
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }



  function sayHello() {
    alert("Hello");
  }
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    //fragment
    <>
      <ol>
        {steps.map(function (elem, i) {
          return <li key={i}>{elem}</li>;
        })}
      </ol>

      <TaskForm sayHello={sayHello} addTask={addTask} />

      <input
        type="text"
        name="title"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      /> 
      {/*            {loading ? <h4>Loading...</h4> :
                (
                    <>

            <Task/>
            <Task/>
            <Task/>
                    </>
                )}*/}
      {loading && <div>Loading</div>}
      {isError && <div>Error message</div>}
      <button onClick={() => toggleVisibility()}> TOGGLE visibility </button>
      {!loading && (
        <>
          {isVisible && (
            <TaskList
              updateTask={updateTask}
              deleteTask={deleteTask}
              tasks={tasks}
            />
          )}
        </>
      )}
    </>
  );
}

export default TaskPage;
