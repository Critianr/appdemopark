import React from 'react';
import '../assets/css/header.css';
import {NavLink} from 'react-router-dom';

const Header = () =>{
    return(
      <header className="header">
    <nav className="navbar navbar-expand">
  <div className="container-fluid">

  <ul className="navbar-nav"> 
    <li className="nav-item">
    <i className="nav-link fas fa-address-card text-black" href="#"></i>
    </li>
    <li className="nav-item">
    <i className="nav-link far fa-bell text-black" href="#"></i>
    </li>
    <li className="nav-item">
      {/* <a class="nav-link fas fa-address-book text-black " href="#"> */}
        <i className="nav-link fas fa-address-book text-black"></i>
        {/* </a> */}
    </li>
  </ul>
  
  <NavLink to="/index" className="navbar-brand text-black">
    CONTROL PARKING
  </NavLink>
       <ul className="nav navbar-nav ml-auto " >
            <li className="nav-item">
                <strong className="nav-link text-black" >About</strong>
            </li>
        </ul>
  </div>
</nav>
</header>
    );
}

export default Header;