import React from "react";
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" name="username"/> 
        <input type="password" placeholder="password" name="password"/>   
      </form>
      
      <NavLink to= {{
            pathname: "/patient",
            superadmin: false
            }}>Login as Care Provider</NavLink>
      <NavLink to="/superpanel">Login as SuperAdmin</NavLink>
    </div>
  );
};

export default Home;
