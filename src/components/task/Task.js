import "./task.css";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Task({ title, duration, deleteTask, _id, updateTask }) {
  const [titleToUpdate, setTitleUpdate] = useState(title);
  const [isUpdate, setIsUpdate] = useState(false);
  function handleUpdate() {
    setIsUpdate(true);
  }
  function handleUpdateTask() {
    setIsUpdate(false);
    updateTask(titleToUpdate, _id);
  }

  const handleDelete = () => {
    deleteTask(_id);
  };
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitleUpdate(e.target.value);
    navigate(`/TaskDetails/${_id}`);
  };
  if (isUpdate === false) {
    return (
      <div
      data-test={`task ${title}`} 
        className="task"
        style={{
          backgroundColor: "red",
        }}
      >
        <div className="title" onClick={handleTitle}>
          <NavLink to={`/TaskDetails/${_id}`}>{title}</NavLink>
        </div>
        <br />

        <div>{duration}</div>
        <br />
        {/*     {props.details &&
            <div>
                Level {props.details.level}
            </div>} */}

        <div className="actions">
          <button type="button" onClick={handleDelete}>
            Delete
          </button>

          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="task"
        style={{
          backgroundColor: "orange",
        }}
      >
        <div className="title">{title}</div>

        <br />
        <form action="" className="form">
          <input
            type="text"
            name="titleToUpdate"
            value={titleToUpdate}
            onChange={handleTitle}
          />

          <br></br>
          <button type="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </form>
      </div>
    );
  }
}

export default Task;
