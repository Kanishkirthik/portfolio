import React from 'react'
import { useState } from 'react';

function Achivements() {
  const [showOverview, setShowOverview] = useState(false);
  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };
  const [showOverview2, setShowOverview2] = useState(false);
  const toggleOverview2 = () => {
    setShowOverview2(!showOverview2);
  };
  const [showOverview3, setShowOverview3] = useState(false);
  const toggleOverview3 = () => {
    setShowOverview3(!showOverview3);
  };
  return (
    <div>
      <div className='container-fluid'>
        <h1 className='text-uppercase text-center'>Achivements</h1>
        <div className='row rounded-3 mb-3' style={{height:"auto",backgroundColor:"#e74c3c"}}>
            <div className='col  align-self-center' onMouseEnter={toggleOverview} onMouseLeave={toggleOverview}>
              {!showOverview &&<h1 className='text-center text-capitalize fw-bolder '>3rd Runner-Up in  "Hacktrix 1.0" National Level Hackathon</h1>} 
              {showOverview &&<p className='text-white fw-bold fs-4'>
              Our team's innovative project, the "Alcohol Detector in Vehicles," garnered significant recognition, securing the esteemed position of 3rd Runner Up among numerous competitive entries from across the nation.
              </p>
              }
            </div>
        </div>
        <div className='row rounded-3 mb-3' style={{height:"auto",backgroundColor:"#e74c3c"}}>
            <div className='col  align-self-center' onMouseEnter={toggleOverview2} onMouseLeave={toggleOverview2}>
              {!showOverview2 &&<h1 className='text-center text-capitalize fw-bolder '>Special Award in  “IDEATHON”-2023</h1>} 
              {showOverview2 &&<p className='text-white fw-bold fs-4'>
              Receiving the Special Award at the Ideathon conducted by KPR Institute of Engineering and Technology, Coimbatore, validates the significance and potential impact of our project. Moving forward, we are committed to further refining and implementing our system, with the ultimate goal of making roads safer for everyone.
              </p>
              }
            </div>
        </div>
        <div className='row rounded-3' style={{height:"auto",backgroundColor:"#e74c3c"}}>
            <div className='col  align-self-center' onMouseEnter={toggleOverview3} onMouseLeave={toggleOverview3}>
              {!showOverview3 &&<h1 className='text-center text-capitalize fw-bolder '>Elite in "Programming in Java" in Nptel</h1>} 
              {showOverview3 &&<p className='text-white fw-bold fs-4'>
              Earning the Elite certification in "Programming in Java" from NPTEL is a significant milestone in my career journey. This achievement reflects my dedication to mastering Java programming and my commitment to excellence in the field of technology. I look forward to leveraging the knowledge and skills gained through this certification to make meaningful contributions to the ever-evolving field of software development.
</p>


              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Achivements
