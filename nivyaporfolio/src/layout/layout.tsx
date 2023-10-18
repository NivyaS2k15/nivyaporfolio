
import React from 'react'
import { Outlet, Link } from "react-router-dom";

// import './photo.css'
const Layout = () => {


  return (
    <>
      <section id="user-info">

        <div className="nav-bar">
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">            
              <Link to="/" className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Home</Link>

                <li className="nav-item">
                  <a className="nav-link" href="#top">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">ABOUT ME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resume">RESUME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">SERVICES</a>
                </li>
                <li className="nav-item">
                  {/* <Link to="/contact" className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</Link> */}
                </li>
              </ul>
            </div>
            <Link to="/contact" className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</Link>

          </nav>
        </div>
      </section>

      <Outlet />
    </>
  );
};

export default Layout;