import React from 'react';
import './photo.css'
import background from '../assets/image/Capturenivya.png';
import photo from '../assets/image/background.jpg';
import  Styles  from './photo.module.css';


 

const Portfolio = () =>{

  

    return(

        <>

<section id="header">
<div className="container text-center">
<div className="user-box">

<h1>NIVYA S</h1>
<p>Associate  </p>
</div>  
</div>
<a href="#about"> 
<div className="scroll-btn">
<div className="scroll-bar"><span> </span></div>
</div>
</a>
</section>

{/* user infoo------- */}
<section>
{/* <section id="user-info">

<div className="nav-bar">
<nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#"><img src={photo} alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa fa-bars"></i>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#top">HOME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">ABOUT ME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#resume">RESUME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#services">SERVICES</a>
      </li>
        <li className="nav-item">
        <a className="nav-link" href="#contact">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</section> */}

<div className="about container" id="about">
<div className="row">
<div className="col-md-6 text-center">
<img src= {background} className="profile-img"/>    
</div>
<div className="col-md-6">
<h3>WHO AM I ?</h3>
<p>
Here, talk about yourself- the skills that you possess. Mention all the technologies you are familiar about and talk about your passion, hobbies and interest. Keep it very crisp, sharp and to the point; as it leaves the first impression on the recuriter or tthe person visiting your website.
</p>
    
<div className="skills-bar">
<p>Cyber Security</p>
<div className="progress">
<div className="progress-bar" style={{ width: '80%' }}>80%</div>    
</div>
    
<p>HTML,CSS, JavaScript</p>
<div className="progress">
<div className="progress-bar"style={{ width: '85%' }}>85%</div>    
</div>
    
<p>Wordpress</p>
<div className="progress">
<div className="progress-bar" style={{ width: '75%' }}>75%</div>    
</div>
    
<p>Graphics Design</p>
<div className="progress">
<div className="progress-bar" style={{ width: '50%' }}>50%</div>    
</div>
</div>
</div>
</div>  
</div>

<div className="social-icons">   
<ul>
<a href="#"><li><i className="fa fa-linkedin"></i></li></a>    
<a href="#"><li><i className="fa fa-twitter"></i></li></a>    
<a href="#"><li><i className="fa fa-medium"></i></li></a>    
<a href="#"><li><i className="fa fa-github"></i></li></a>    
<a href="#"><li><i className="fa fa-behance"></i></li></a>    
</ul>
</div>


<div className="container">
  <div className="row">
    <div className="col-md-6">
      <h3 className="text-center">My Experiences</h3>
      <ul className="timeline">
        <li>
          <h4><span>20__ - </span> Back End Developer</h4>
          <p>
           
            Mention your role, projects, and work during your employment.

            <br />
            <b>Company</b> - xyz company Pvt Ltd
            <br />
            <b>Duration</b> - 1yr [20__ to 20__]
            <br />
            <b>Location</b> - India
          </p>
        </li>

        <li>
          <h4><span>20__ - </span> Front End Developer</h4>
          <p>
            Mention your role, projects, and work during your employment.
            <br />
            <b>Company</b> - xyz company Pvt Ltd
            <br />
            <b>Duration</b> - 1yr [20__ to 20__]
            <br />
            <b>Location</b> - India
          </p>
        </li>

        <li>
          <h4><span>2021 - </span> Front End Developer</h4>
          <p>
            Mention your role, projects, and work during your employment.
            <br />
            <b>Company</b> - xyz company Pvt Ltd
            <br />
            <b>Duration</b> - 1 month [March 2021 to April 2021]
            <br />
            <b>Location</b> - India
          </p>
        </li>
      </ul>
    </div>

    <div className="col-md-6">
      <h3 className="text-center">My Education</h3>
      <ul className="timeline">
        <li>
          <h4><span>2022 - </span> Bachelor Of Technology</h4>
          <p>
            Describe your higher education and your chosen field.
            <br />
            <b>Institute</b> - CGC Landran
            <br />
            <b>Session</b> - 2018 - 2022
            <br />
            <b>Aggregate</b> - 80.00%
          </p>
        </li>

        <li>
          <h4><span>2018 - </span> Intermediate (HSC)</h4>
          <p>
            Describe your high school education and your stream.
            <br />
            <b>Institute</b> - Holy Child School
            <br />
            <b>Session</b> - 2016 - 2018
            <br />
            <b>Aggregate</b> - 84.8%
          </p>
        </li>

        <li>
          <h4><span>2016 - </span> High School (Matric)</h4>
          <p>
            Briefly describe your schooling and provide matriculation details.
            <br />
            <b>Institute</b> - Holy Child School
            <br />
            <b>Session</b> - 2015 - 2016
            <br />
            <b>Aggregate</b> - 91.1%
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>

{/* 
<!---------------Social Icons----------------> */}

<div className="social-icons">   
<ul>
<a href="#"><li><i className="fa fa-linkedin"></i></li></a>    
<a href="#"><li><i className="fa fa-twitter"></i></li></a>    
<a href="#"><li><i className="fa fa-medium"></i></li></a>    
<a href="#"><li><i className="fa fa-github"></i></li></a>    
<a href="#"><li><i className="fa fa-behance"></i></li></a>    
</ul>
</div>
{/* <!-------------Resume-------------> */}



<div className="services" id="services">
  <div className="container">
    <h1 className="text-center">My Offered Services</h1>
    <p className="text-center">
      Subscribe ABC YouTube Channel to watch more videos on website Development
    </p>

    <div className="row">
      <div className="col-md-4">
        <div className="services-box">
          <i className="fa fa-rocket"></i><span>Graphics</span>
          <p>
            Subscribe ABC YouTube Channel to watch more videos on website Development. Press the bell icon to get updates of new videos. Here you can share your experience about the particular service/domain.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="services-box">
          <i className="fa fa-line-chart"></i><span>Marketing</span>
          <p>
            Subscribe ABC YouTube Channel to watch more videos on website Development. Press the bell icon to get updates of new videos. Here you can share your experience about the particular service/domain.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="services-box">
          <i className="fa fa-laptop"></i><span>Development</span>
          <p>
            Subscribe ABC YouTube Channel to watch more videos on website Development. Press the bell icon to get updates of new videos. Here you can share your experience about the particular service/domain.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Contact --> */}
<div className="contact" id="contact">
  <div className="container text-center">
    <h1>Contact Me</h1>
    <p className="text-center">
      Subscribe ABC YouTube Channel to watch more videos on website Development.
    </p>

    <div className="row">
      <div className="col-md-4">
        <i className="fa fa-phone"></i>
        <p>+1 0123456789</p>
      </div>
      <div className="col-md-4">
        <i className="fa fa-envelope"></i>
        <p>abc123@gmail.com</p>
      </div>
      <div className="col-md-4">
        <i className="fa fa-internet-explorer"></i>
        <p>www.abc.com</p>
      </div>
    </div>
    <button type="button" className="btn btn-primary">
      <i className="fa fa-download"></i> Resume
    </button>
    <button type="button" className="btn btn-primary">
      <i className="fa fa-rocket"></i> Hire Me
    </button>
  </div>
  <div className="footer text-center">
    <p>Made with <i className="fa fa-heart-o"></i> by NIVYA S</p>
  </div>
</div>

</section>


{/* <!-------------------Smooth Scroll-------------------> */}
<script src="smooth-scroll.js"></script>
    
  <script>
	var scroll = new SmoothScroll('a[href*="#"]');
</script>  
    






        </>

    )

}

 

export default Portfolio