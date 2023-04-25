
import { BrowserRouter as Router, Routes,Route, Outlet } from 'react-router-dom';
import TaskPage from "../../pages/taskpage/TaskPage";
import TaskDetails from "../../pages/taskpage/taskDetails/TaskDetails";

function TeacherRoutes( ) {
 
  return (
    <>
      <Outlet/>
    </>
  );
}

export default TeacherRoutes;
