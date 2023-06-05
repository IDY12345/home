import React from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import './Home.css'
import './Main.css'
function Home() {
 const print= ()=>
  {
    console.log("Home");
  }
  const About=()=>
  {
    <div class="About1">
      <h2>We are Seva Traders.</h2>
      <h3>Ba Ba Black Sheep,Have You any Wool?</h3>
      <h3>Yes Sir Yes Sir Three Bags Full</h3>
      <h3>Ba Ba Black Sheep,Have You any Wool?</h3>
      <h3>Yes Sir Yes Sir Three Bags Full</h3>
      <h3>Ba Ba Black Sheep,Have You any Wool?</h3>
      <h3>Yes Sir Yes Sir Three Bags Full</h3>
      <h3>Ba Ba Black Sheep,Have You any Wool?</h3>
      <h3>Yes Sir Yes Sir Three Bags Full</h3>
    </div>
  }
  return (
    <div class="Navbar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <div class="firmname">
          <img class="logo" src="/assets/sevalogo.png" alt=""/>
        <p class="Seva">Seva Traders</p>
        </div>          
        <button class="Home">Home</button>
        <button class="About">About</button>
        <button class="Customer-Portal">Customer Portal</button>
        <button class="Contact">Contact Us</button>
        <div class="search-support">
            <h2><i class="fas fa-search" id="icon"></i></h2>
            <input class="search"/>
        </div>
        <div class="social">
            <a href='https://www.instagram.com'><h2><i class="fa-brands fa-instagram" id="instagram"></i></h2></a>
            <a href='https://www.linkedin.com'><h2><i class="fa-brands fa-linkedin" id="linkedin"></i></h2></a>
            <a href='https://www.twitter.com'><h2><i class="fa-brands fa-twitter" id="twitter"></i></h2></a>
        </div>
    </div>
  )
}

export default Home