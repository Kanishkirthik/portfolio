
import './App.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Skillsets from './skillsets';
import Projects from './Projects';
import Achivements from './Achivements';
import Educations from './Educations';


function App() {
  return (
    <>
  <Navbar/>
    <div className='container-fluid' style={{color:"#333333 ",backgroundColor:"#f9f9f9"}}>
      <Home/>
      <Educations/>
    <Skillsets/>
    <Projects/>
    <Achivements/>
    <h4 className='text-center'>© 2024 KANISH KIRTHIK</h4>
    </div>
    </>
  );
}

export default App;
