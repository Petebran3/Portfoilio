import React from "react";
import "./about.css"
const About = () =>{
    return(
        <>
         <h1>About Me</h1>
        <div className="about-section">
           
       
        <img src="./pics/peezo.jpg" alt="pete"/>
        
        <img 
      src="https://i.postimg.cc/ZRVMzRM1/resume.png"
      alt="resume"
      /></div>
      <div>
    <p>Dedicated Coding Apprentice with six months of experience learning front- end and back-end development, version control, agile training, and react. While also enhancing my professional development skills, such as public speaking, meeting etiquette, email etiquette, and work-life balance.</p>
       
        </div>
        <div>
        <h2>My Skills</h2>
        <div className="cards">
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./pics/publicn.jpeg" alt="public speaking" />
    </div>
    <div className="flip-card-back">
      <h1>Public Speaking</h1>
      <p></p>
      
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./pics/html.png" alt="html" />
    </div>
    <div className="flip-card-back">
      <h1>HyperText Markup Language</h1>
      <p></p>
      
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./pics/teamp.jpeg" alt="team player" />
    </div>
    <div className="flip-card-back">
      <h1>Team Player</h1>
      <p></p>
      
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./pics/css.png" alt="css" />
    </div>
    <div className="flip-card-back">
      <h1>Cascading Style Sheets</h1>
      <p></p>
      
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./pics/js.png" alt="js" />
    </div>
    <div className="flip-card-back">
      <h1>JavaScript</h1>
      <p></p>
      
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./pics/mysql.png" alt="mysql" />
    </div>
    <div className="flip-card-back">
      <h1>MySQL</h1>
      <p></p>
      
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="./pics/comm.png" alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1>Great Communicator</h1>
      <p></p>
      
    </div>
  </div>
</div>
</div>
      </div>
      </>
    );
}

export default About;