import React from "react";
import '../assets/css/dashboar.css';
import {NavLink} from 'react-router-dom';
// const style={"width: 4.5rem;"}
const Dashboar = () =>{
    return(

  <div className="d-flex flex-column flex-shrink-0  text-white bg-dark dashboar" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
      <span className="fs-4 title-panel">Panel</span>
    </a>
    <hr /> 
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" >
        <NavLink to="/index"  className="nav-link text-white text-decoration-none"  aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use href="#home"/></svg>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/busqueda"  className="nav-link text-white text-decoration-none" >
          <svg className="bi me-2" width="16" height="16"><use href="#speedometer2"/></svg>
          Gestion de Tickets           
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/tickets"  className="nav-link text-white text-decoration-none">
          <svg className="bi me-2" width="16" height="16"><use href="#table"/></svg>
          Tickets Generados
        </NavLink>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <p className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" width="32" height="32" class="rounded-circle me-2" />
        <strong>mdo</strong>
      </p>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><strong className="dropdown-item" href="#">New project...</strong></li>
        <li><strong className="dropdown-item" href="#">Settings</strong></li>
        <li><strong className="dropdown-item" href="#">Profile</strong></li>
        <li><hr className="dropdown-divider" /></li>
        <li><strong className="dropdown-item" href="#">Sign out</strong></li>
      </ul>
    </div>
  </div> 


    );
}

export default Dashboar;