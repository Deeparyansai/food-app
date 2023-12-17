
import React from 'react';
import { Link } from 'react-router-dom';
function Navibar() {
  return (
    <div>
    <nav  className="navbar navbar-expand-lg navbar-dark bg-success">
    <div  className="container-fluid">
     <Link  className="navbar-brand fs-1 fst-italic" to="/">HiFood</Link>
      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse" id="navbarNav">
        <ul  className="navbar-nav">
          <li  className="nav-item">
           <Link  className="nav-link active fs-2" aria-current="page" to="/">Home</Link>
          </li>
          <li  className="nav-item">
           <Link  className="nav-link fs-2" to="/login">Login</Link>
          </li>
         
          
        </ul>
      </div>
    </div>
  </nav>
  </div>
    
    
  );
}

export default Navibar;

