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
        <NavLink to='/lifecycle' exact activeStyle={{color:'green'}}>Life-Cycle</NavLink>
        {" | "}
        <NavLink to='/pureComponent' exact activeStyle={{color:'green'}}>Pure Component</NavLink>
        {" | "}
        <NavLink to='/refsDom' exact activeStyle={{color:'green'}}>Refs And DOM</NavLink>
        {" | "}
        <NavLink to='/propTypes' exact activeStyle={{color:'green'}}>Prop Types</NavLink>
        {" | "}
        <NavLink to='/higherOrderComponent' exact activeStyle={{color:'green'}}>Higher Order Component</NavLink>
        {" | "}
        <NavLink to='/lazyLoading' exact activeStyle={{color:'green'}}>Lazy Loading</NavLink>
        {" | "}
        <NavLink to='/memo' exact activeStyle={{color:'green'}}>Memo</NavLink>
        {" | "}
        <NavLink to='/reactRedux' exact activeStyle={{color:'green'}}>React Redux</NavLink>
        {" | "}
        <Link to='/about/'> link about</Link>
    </nav>
  </header>
  )
  
  export default Header
  