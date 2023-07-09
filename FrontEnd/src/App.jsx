import './App.css'
import hero from './assets/img/hero-img.png';
import {  useLocation ,useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import NavbarAfterlogin from './NavbarAfterlogin';

import {useState } from 'react';
function App() {
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const navigate = useNavigate();
 function clickBTN(){
  if (userId) 
  navigate("/")
  else navigate("/Login")
 }

  return (
    <>
 
 
      {userId ? (
       <NavbarAfterlogin></NavbarAfterlogin>
      ) : (
        <Navbar></Navbar>
      )}
      


  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Welcome to FileRepo</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">Create your account and store your files and manage them in a secure way</h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <a href="#about" onClick={clickBTN} className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src={hero} className="img-fluid animated" alt=""></img>
        </div>
      </div>
    </div>

  </section>
    </>
  )
}

export default App
