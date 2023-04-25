import "./taskform.css";
import { useState,useEffect } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("learn");
  const [duration, setDuration] = useState(0);
  const addTasks = "Add a Task";
  function renderHello() {
    return <p className="h1"> Hello</p>;
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleClick = () => {

      addTask(title, duration);
    
  };
  useEffect(() => {
document.title=title;
  });

  return (
    <form action="" className="form">
      <input type="text" name="title" value={title} onChange={handleTitle} />
      <br></br>
      <input
        type="number"
        name="duration"
        value={duration}
        onChange={handleDuration}
      />
      <br></br>
      <button type="button" onClick={handleClick}>
        {addTasks}
      </button>
      {renderHello()}
    </form>
  );
}

export default TaskForm;
