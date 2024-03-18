import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import kanish from "./717821p224_photo .jpg"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg "style={{backgroundColor:"#f9f9f9 ",color:"#333333"}}>
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav  text-uppercase ms-auto">
          <li class="nav-item ">
            <Link class="nav-link active " to={'/'}>Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to={'/Education'}>EDUCATIONS</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to={'/skillsets'}>Skill sets</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link  " to={'/Projects'}>Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link  " to={"/Achivements"}>Achivements</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar