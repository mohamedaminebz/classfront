import { Link, NavLink } from "react-router-dom";


function Menu() {
  return ( <>
  <NavLink to="/" style={({isActive})=>(isActive?{color: 'green'}:undefined)}>Home</NavLink>
  <br></br>
  <NavLink to="/task-page" style={({isActive})=>(isActive?{color: 'green'}:undefined)}>My tasks</NavLink>
  </> );
}

export default Menu