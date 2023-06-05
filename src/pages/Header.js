import React from 'react'
import './Header.css'

function Header() {
  return (
    <div class="header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <div class="firmname">
          <img class="logo" src="/assets/sevalogo.png" alt=""/>
        <p class="Seva">Seva Traders</p>
        </div>
        <div class="Phone-info">
            <h3><i class="fa-solid fa-phone" id="icon1"></i></h3>
            <p class="Number">+91 98756 48321</p>
        </div>
        <div class="mail">
            <h3><i class="fa fa-envelope" aria-hidden="true" id="mail"></i></h3>
            <p class="address">sevatraders@gmail.com</p>
        </div>
        <div class="social">
            <a href='https://www.instagram.com'><h2><i class="fa-brands fa-instagram" id="instagram"></i></h2></a>
            <a href='https://www.linkedin.com'><h2><i class="fa-brands fa-linkedin" id="linkedin"></i></h2></a>
            <a href='https://www.twitter.com'><h2><i class="fa-brands fa-twitter" id="twitter"></i></h2></a>
        </div>
    </div>
  )
}

export default Header