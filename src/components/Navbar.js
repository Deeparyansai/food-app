
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navibar() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  const isAuthenticated = localStorage.getItem("authToken");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">HiFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {isAuthenticated &&
                <li className="nav-item">
                  <Link className="nav-link active fs-5" to="/">My Orders</Link>
                </li>
              }
            </ul>

            {isAuthenticated ?
              <div className='d-flex'>
                {/* Render additional buttons for authenticated users */}
                <div className='btn bg-white text-success mx-2'>
                  MyCart
                </div>
                <div className='btn bg-white text-danger mx-2' onClick={handleLogOut}>
                  Logout
                </div>
              </div>
              :
              <div>
                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navibar;

