import React from 'react'
import kanish from "./717821p224_photo .jpg"
function About() {
  return (
    <div class="container-fluid   text-uppercase  " data-aos="flip-up">
    <div class="row justify-content-center">
     <div class=" col-xl-3  ">
       <div class="card  rounded " style={{width:"18rem"}}>
         <img src={kanish} class="card-img-top h-30 w-50 align-self-center rounded" alt="..."/>
         <div class="card-body ">
             <div class="justify-content-center text-center">
                 <a href = "kanishkrithik06@gmail.com?subject = Feedback&body = Message">
                   <i class="bi bi-envelope"></i></a>
                   <a href = "https://www.linkedin.com/in/kanish-kirthik-k-6b001b252/">
                     <i class="bi bi-linkedin"></i></a>
             </div>
           <a class="btn h-100 w-100" href="Resume.html" style={{backgroundColor:"#e74c3c"}}>CONTACT</a>
         </div>
       </div>
     </div>
    </div>
 </div>
  )
}

export default About