import React from 'react';
import './About.css'; // Import your CSS file
export default function About() {
  return (
    <div className="about">
      <div className="content">
        <h1>
          LET ME <span className="purple"> INTRODUCE </span> MY SELF
        </h1>
        <p>
          I fell in love with the world of{' '}
          <span className="purple"> programming </span>{' '}
        </p>
        <p>
          Languages I know :
          <span className="purple"> C, Java , Python ,Javascript</span>{' '}
        </p>

        <p>
          I also have a good understanding of :{' '}
          <span className="purple">
            {' '}
            DSA , Computer Architecture,
            <br /> Operating System , DBMS (SQL), Networking{' '}
          </span>{' '}
        </p>

        <p>
          {' '}
          My field of Interest's are building new{' '}
          <span className="purple"> Web Technologies </span>and 
          Products and also in areas related to
          <span className="purple"> AI and Machine Learning.</span>
        </p>
        <p>
          Whenever possible, I also apply my passion for developing products
          with <span className="purple"> Node.js </span> and Modern
          Javascript Library and Frameworks like{' '}
          <span className="purple">React.js </span>{' '}
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDcEo0ypWt0Q0lrRvR5HAuGV8Nsf_nL7DHQ&usqp=CAU"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
}