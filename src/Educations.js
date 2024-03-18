import React from 'react'
import  'bootstrap/dist/js/bootstrap.bundle';
function Educations() {
  return (
    <div>
      <div className='container-fluid'>
        <h1 className='text-center'>EDUCATIONS</h1>
      <div className="row">
        <div className='col'>
        <p>
  <button class="btn fw-semibold" style={{backgroundColor:"#e74c3c",width:"100%"}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    B.E CSE  @ KARPAGAM COLLEGE OF ENGINEERING,COIMBATORE
  </button>
</p>
<div>
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style={{width:"auto"}}>
        <h5>2021-2025</h5>    <br></br> <h6>CGPA:7.5(Up to IV) </h6>
     <ul class="list-group"> SKILLS GAINED
      <li className='list-group-item'><ul class="list-group">Programming Language:
        <li className='list-group-item'>
        C Programming
        </li>
        <li className='list-group-item'>
        Java Programming</li>
        <li className='list-group-item'>
        Python Programming
        </li>
        <li className='list-group-item'>MERN Stack
        </li>
        <li className='list-group-item'>
            HTML
        </li>
        <li className='list-group-item'>
            CSS
        </li>
        <li className='list-group-item'>
            Java Script
        </li>
        </ul>
        
      </li>
      <li className='list-group-item'>
        <ul class="list-group">Technical Skills
            <li className='list-group-item'>
                Problem Solving
            </li>
            <li className='list-group-item'>  
                Data Structures and Alogorithms
            </li>
            <li className='list-group-item'>
                Operating system
            </li>
        </ul>
      </li>

     </ul>
    </div>
  </div>
</div>
        </div>
        </div>
        <div className='row'>
            <div className='col'>
        <p>
  <button class="btn fw-semibold" style={{backgroundColor:"#e74c3c",width:"100%"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample2">
    HSE @ P.K.D MATRICULATION HIGHER SECONDARY SCHOOL,POLLACHI
  </button>
</p>
<div >
  <div class="collapse collapse-horizontal" id="collapseWidthExample2">
    <div class="card card-body" style={{width:"auto"}}>
    <h5>2019-2021</h5>    <br></br> <h6>PERCENTAGE:75%</h6>
    </div>
  </div>
</div>
</div>
      </div>
      </div>
    </div>
  )
}

export default Educations
