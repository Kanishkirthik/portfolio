import React from 'react'
import adv from './ADV.jpg'
import gws from './MERN.png'
function Projects() {
  return (
    <div>
       <div class="container-fluid  "data-aos="fade-up"
         data-aos-anchor-placement="center-bottom">
          <div class="row  ">
            <h2 class="text-center ">PROJECTS</h2>
            
            <div class="col-xl-3  text-center ">
              <div class="card align-self-center" style={{width:"auto",minHeight:"600px",maxHeight:"600px"}}>
                <img src={adv} class="card-img-top" alt="..." width={"250px"} height={"300px"}/>
                <div class="card-body">
                  <h5 class="card-title">ALCOHOLIC DETECTOR IN VEHICLE</h5>
                  <p class="card-text">The main aim of this project is to stop these alcohol consume and un consisous people  from driving by fixing two instruments in the car.<br
                  />
                  Technical Stack :Embedded C</p>
                <a href="pro.html" class="btn " style={{backgroundColor:"#e74c3c"}}>More info</a>
                </div>
              </div>
            </div>
            <div class="col-xl-3  text-center ">
              <div class="card align-self-center" style={{width:"auto",minHeight:"600px",maxHeight:"600px"}}>
                <img src={gws} class="card-img-top" alt="..."  width={"250px"} height={"300px"}/>
                <div class="card-body" style={{minHeight:"500px"}}>
                  <h5 class="card-title">GAIN WITH US</h5>
                  <p class="card-text">Developing an e-learning platform with advanced features can significantly enhance the learning experience and provide additional value for users.<br/>
                  Technical Stack :MERN</p>
                  <a href="https://gainwithus.netlify.app/" class="btn " style={{backgroundColor:"#e74c3c"}}>More info</a>
                </div>
              </div>
            </div>

          </div>

          </div>
         </div>
  )
}

export default Projects
