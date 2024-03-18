import React from 'react'
import './index.css';
import kanish from "./717821p224_photo .jpg"
import './App.css';
import About from './About';
import CIcon  from '@coreui/icons-react';
import {cibLeetcode } from '@coreui/icons';
function Home() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <p className='fs-5 fw-semibold'>"Greetings and salutations! Delighted to have you here."</p>
            <h1>KANISH KIRTHIK K</h1>
           <h5> I am COMPETITIVE PROGRAMMER && MERN DEV</h5>
            <a  href="https://drive.google.com/file/d/1LoQ_IMkAxFXwsCMu9oYbDwkCuNG8mW_x/view?usp=sharing" className='btn' style={{backgroundColor:"#e74c3c"}}>Download CV</a>
            </div>
          <div className='col'>
            <h2>Let's Connects</h2>
            <div className='row'>
              <div className='col-xl-2'>
              <a href = "kanishkrithik06@gmail.com?subject = Feedback&body = Message">
                   <i class="bi bi-envelope"></i></a>
                   
              </div>
              <div className='col-xl-2'>
                 <a href = "https://www.linkedin.com/in/kanish-kirthik-k-6b001b252/">
              <i class="bi bi-linkedin">
              </i></a></div>
            </div>
            <h2>Coding Profile</h2>
            <div className='row'>
              <div className='col'>
                <a href='https://leetcode.com/Kanishkirthik/'><CIcon icon={cibLeetcode}  size="sm" width={"25px"}/></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
         
    </div>
  )
}

export default Home