import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const user=useSelector((state:any)=>state.user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" width="50%" height="10%"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="search">
        <input type="text" className="form-control" placeholder="🔍search" />
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-door-fill"></i></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-chat-quote" style={{height:"100%"}}></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-heart"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
              <img src={user.profilePicture} alt="" />
          </a>
        </li>
       
      
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar