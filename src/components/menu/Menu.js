import { Link, NavLink } from "react-router-dom";


function Menu() {
  return ( <>
  <NavLink to="/" data-test="HomeNavLink" style={({isActive})=>(isActive?{color: 'green'}:undefined)}>Home</NavLink>
  <br></br>
  <NavLink to="/task-page" data-test="MyTasksNavLink" style={({isActive})=>(isActive?{color: 'green'}:undefined)}>My tasks</NavLink>
  </> );
}

export default Menu