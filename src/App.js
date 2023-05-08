import React, { useState, useEffect } from "react"
import "./App.css"
import Hello from "./components/hello/Hello"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Menu from "./components/menu/Menu"

import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes"
import { me } from "./services/tasks2.service"
import Login from "./pages/login/Login"
import TaskPage from "./pages/taskpage/TaskPage"
import TaskDetails from "./pages/taskpage/taskDetails/TaskDetails"

function App() {
  const token = localStorage.getItem("token")

  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const user = await me()
        setUser(user)
        console.log("user: ", user)
      } catch (e) {}
    }
    fetchMe()
  }, [])
  if (token && user.role === "admin") {
    // private routes
    return (
      <div className="app">
        <Router>
     { /* <Menu />*/}
     <Menu />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/teachers/tasks" replace />}
            />
               <Route path="teachers" element={<TeacherRoutes />} >
             
         <Route path="tasks" element={<TaskPage />} />
        <Route path="tasks/:id" element={<TaskDetails />} /> 
           {/* <Route path="/hello" element={<Hello />} />
         
           <Route path="tasks" element={<TaskPage />} />
          <Route path="tasks/:id" element={<TaskDetails />} /> 
        */}
          </Route>
          </Routes>
        </Router>
      </div>
    )
  } else if (token && user.role === "user") {
    return (
      <div className="app">
        <Router>
          <Menu />
          {/* ... */}
        </Router>
      </div>
    )
  } else if (!token) {
    // public routes
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    )
  } else {
    return <div>loading...</div>
  }
}

export default App