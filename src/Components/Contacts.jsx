import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <>
      <div className="contacts">
        <h1>To Contact Me</h1>
        <ul>
          <li>Email: <span>somsubhrochakraborty07@gmail.com</span></li>
          <li>Phone: <span>9875468253</span></li>
          <li>
            Social Media:
            <ul>
              <li>Twitter: <span><a href="https://x.com/SomsubhroC87929?t=PCvluwyV0nS-55fv3baDmA&s=08 ">Twitter</a></span></li>
              <li>LinkedIn <span><a href="www.linkedin.com/in/somsubhro-chakraborty-915852247

">LinkedIn</a></span></li>
              {/* Add more social media links as needed */}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
