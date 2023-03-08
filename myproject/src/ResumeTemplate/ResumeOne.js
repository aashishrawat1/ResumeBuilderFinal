import React from "react";
import './ResumeOne'
function ResumeOne() {
    return (
            <div class="container">
              <header>
                <h1>John Doe</h1>
                <p>Web Developer</p>
              </header>
              <section class="about">
                <h2>About Me</h2>
                <p>I am a web developer with 5 years of experience creating beautiful and functional websites. I specialize in front-end development, with a focus on responsive design and user experience.</p>
              </section>
              <section class="skills">
                <h2>Skills</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                </ul>
              </section>
              <section class="education">
                <h2>Education</h2>
                <h3>University of XYZ</h3>
                <p>Bachelor of Science in Computer Science</p>
                <p>Graduated: May 2016</p>
              </section>
              <section class="experience">
                <h2>Experience</h2>
                <h3>Web Developer, ABC Company</h3>
                <p>June 2016 - Present</p>
                <ul>
                  <li>Created responsive website designs using HTML, CSS, and JavaScript</li>
                  <li>Implemented user interface improvements using jQuery and Bootstrap</li>
                  <li>Developed custom WordPress themes for client websites</li>
                </ul>
              </section>
         </div>
    )
}
export default ResumeOne;