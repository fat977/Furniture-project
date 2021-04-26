import React, { Component } from 'react'
import $ from 'jquery'
import './navbar.css'
class Navbar extends Component {
    componentDidMount = () =>{
        $(function () {
           $(window).scroll(function(){
               $('nav').toggleClass('scrolled' , $(this).scrollTop()>50);
           });
      
        });
     
    }  
    render(){
        return (
            <div className ="header">
                 <nav className="navbar navbar-expand-md navbar-light  fixed-top bgColor ">
                    <a className="navbar-brand" href="#">Modern Home</a>
    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" style ={{color:'#17a2b8'}}></span>
                    </button>
    
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav mr-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                Sections
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#chair">Chairs</a>
                                    <a class="dropdown-item" href="#room">Rooms</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div class="form-group has-search mt-3 d-none d-xl-block">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search"/>
                        </div>
                    </div>
    
                  
                </nav> 
                <div className ="container">
                   <div id="text">
                         <h1 className ="text-white">Smart And <br/>Trendy</h1>
                        <button id ="button" type ="button" className ="btn">Details</button>
                   </div>
                </div>
                
            </div>
            
        )
    }
    
}

export default Navbar
