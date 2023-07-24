// import React from 'react';
import img from './images/img.jpg';
import './index.css';
// import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (

    <div>
      <div className='card'>
      <img className='profile' src={img} alt="profile" />
      <h1 className='my-name'>Zeeshan Haider</h1>
      <p className='my-passion'>FrontEnd Developer</p>
      <div className='icons'>
        <button className='email-btn'> Email <i className="fa-solid fa-envelope"></i></button>
        <button className='linkedin-btn'> Linkedin <i className="fa-brands fa-linkedin"></i></button>
      </div>

      <div className='about'>
        <h1>About</h1>
        <p>Greetings! I am a dedicated Bachelor of Science in Computer Science (BScs) student with a strong passion for front-end development. Currently in my sixth semester, I am actively expanding my knowledge and honing my skills in creating captivating user interfaces and delightful user experiences.</p>
      </div>

      <div className='footer'>
      <i className="fa-brands fa-square-twitter"></i>
      <i className="fa-brands fa-square-facebook"></i>
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-github"></i>
      </div>

    </div>
    </div>
    

  );
}

export default App;
