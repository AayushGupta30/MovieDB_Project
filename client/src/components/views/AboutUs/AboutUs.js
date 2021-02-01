import { Divider } from 'antd';
import React from 'react'
import './style.css';
const Photo1 = require('../../../assets/images/img1.jpeg');
const Photo2 = require('../../../assets/images/img2.jpeg');
const Photo3 = require('../../../assets/images/img3.jpeg');
const Photo4 = require('../../../assets/images/img4.jpeg');
const Photo5 = require('../../../assets/images/wpu.jpg');
// import './img1.jpeg';
function AboutUs() {
    return (
        <div>
          <header>
    <div className="overlay">
      <h1>Our Team</h1>
      <h3>Welcome to aur Application!</h3>
      <p>We hope you are happy with the website. We are a group of young and budding web-developers,working and learning together, for this WTL project. This was our first hands-on experience on MERN stack. Feel free to contact us. Thanks You!</p>
      
    </div>
  </header>
  <div className="bottom">
    <div className="container">
      <div className="box">
        <div className="imgBx">
          <img src={Photo1} />
        </div>
        <div className="content">
          <h2>Aayush Gupta</h2>
          <p><br />Roll Number PA60<br />Batch A4<br />Division A<br /><br /><button>aayush.gupta3009@gmail.com</button></p>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src={Photo2} />
        </div>
        <div className="content">
          <h2>Spriha Shekhar</h2>
          <p><br />Roll Number PA31<br />Batch A2<br />Division A<br /><br /><button>sprihashashi@gmail.com</button></p>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src={Photo3} />
        </div>
        <div className="content">
          <h2>Jahnavi Dandgawhane</h2>
          <p><br />Roll Number PA18<br />Batch A2<br />Division A<br /><button>jahnavidandgawhane@gmail.com</button>jahnavidandgawhane@gmail.com</p>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src={Photo4} />
        </div>
        <div className="content">
          <h2>Chirag Bhatta</h2>
          <p><br />Roll Number PA54<br />Batch A4<br />Division A<br /><br /><button>chirag.7.bhatta@gmail.com</button>chirag.7.bhatta@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
        </div>

    )
}

export default AboutUs