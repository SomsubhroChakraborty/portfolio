import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <div className="Navbar">
      <div className="container">
        {' '}
        <h2>Hi 👋,</h2>
        <p> I'm <span className="purple">Somsubhro Chakraborty</span></p> 
        <p><span className="purple">Tech Enthusiast</span> and a passionate<span className="purple"> Developer</span>  from India</p>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB14UZFhSYB5ijJHWDbSOjiGLyMn6m9gbbw&usqp=CAU" />
    </div>
  );
}