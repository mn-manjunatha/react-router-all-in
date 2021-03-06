import React from 'react';
import { Link,NavLink } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
    <nav>
        <NavLink to='/' exact activeStyle={{color:'green'}}>Home</NavLink>
        {" | "}
        <NavLink to='/user/mnm' exact activeStyle={{color:'green'}}>User mnm</NavLink>
        {" | "}
        <NavLink to='/user/rao' exact activeStyle={{color:'green'}}>User rao</NavLink>
        {" | "}
        <NavLink to='/about/' exact activeStyle={{color:'green'}}>About</NavLink>
        {" | "}
        <NavLink to='/event' exact activeStyle={{color:'green'}}>Event</NavLink>
        {" | "}
        <NavLink to='/parentChild' exact activeStyle={{color:'green'}}>Parent-Child</NavLink>
        {" | "}
        <NavLink to='/listkey' exact activeStyle={{color:'green'}}>List and Key</NavLink>
        {" | "}
        <Link to='/about/'> link about</Link>
    </nav>
  </header>
  )
  
  export default Header
  