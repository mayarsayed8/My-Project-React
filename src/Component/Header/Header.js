import React from 'react'
import {Link} from 'react-router-dom'
import  './Header.css'

const Header =()=> {
    return (
           <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <Link  className="navbar-brand" to="/">Front End Library</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav ml-auto ">
            <li  className="nav-item active">
            <Link  to="/"  className="nav-link"> 
            <i className="fa fa-home" aria-hidden="true"/> 
            Home
            </Link>
            </li>
            <li className="nav-item active">
            <Link  to="/chart"  className="nav-link">
            <i className="fa fa-line-chart" aria-hidden="true"/> 
            chart
            </Link>
           </li>
            <li className="nav-item active">
            <Link  to="/Courses"  className="nav-link">
            <i className="fa fa-question" aria-hidden="true"/>
            Courses 
            </Link>
        </li>
        </ul>
        </div>
        </nav>

  
    )
}
export default Header;