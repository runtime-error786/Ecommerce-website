import React from "react";
import {NavLink} from 'react-router-dom';
import './index.css';

function Menu()
{
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid">
  <a class="navbar-brand me-5"><NavLink to="/home"><img src="./BB.jpg"  style={{width:'150px',height:'70px'}}></img></NavLink></a>
    <a class="navbar-brand me-5"><NavLink to="/home" style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} >BestBuy</NavLink></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-5">
          <a class="nav-link active " aria-current="page"><NavLink style={{color:'black',textDecoration:'none',fontWeight:'bolder'}}>Home</NavLink></a>
        </li>
       
        <li class="nav-item me-5">
          <a class="nav-link active " aria-current="page"><NavLink style={{color:'black',textDecoration:'none',fontWeight:'bolder'}}>Total Bill</NavLink></a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black',textDecoration:'none',fontWeight:'bolder'}}>
           Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><NavLink  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} >Grossary</NavLink></a></li>
            <li><a class="dropdown-item"><NavLink  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} >Stationary</NavLink></a></li>
            <li><a class="dropdown-item"><NavLink  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} >Clothes</NavLink></a></li>
            <li><a class="dropdown-item"><NavLink  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} >Electric</NavLink></a></li>
            <li><a class="dropdown-item"><NavLink  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} >Glasses</NavLink></a></li>
            <li><a class="dropdown-item"><NavLink  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} ></NavLink></a></li>
            <li><hr class="dropdown-divider"/></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success me-5"  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}} >Sign in</button>
        <button class="btn btn-outline-success me-5"  style={{color:'black',textDecoration:'none',fontWeight:'bolder'}}>Rate us</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default Menu;