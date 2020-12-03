import React from "react";
import NavBar from "./navbar";


function About (props) {
    return (
        <div className="about-main">
          <NavBar />
          <div style={{fontFamily:'cursive'}}>
              <h1 style={{textAlign: 'left', marginLeft: '20px'}}>About Me</h1>
              <div style={{marginLeft: '20px',overflowY: 'auto'}}>
                <span>
                    <h3>Background</h3>
                    <p>
                        <pre>
                            I was born in Karachi, Pakistan and grew up in Toronto, Canada. Half way through high school I moved to Dallas, TX.<br/>
                            After graduating high school I started my college journey at UT Arlington. After a year there, I transferred to UT Austin<br/>
                            where I started studying electrical and computer engineering. I had been interested in programming since my computer science<br/>
                            courses in high school. This interest developed into a passion and led me to pursue a specialization in computer and<br/>
                            software engineering. Below are some of my interests and also my technical background. Thanks for visiting my website!                               
                        </pre>
                    </p>
                </span>
                <span>
                    <h3>Hobbies and Interests</h3>
                    <ul>
                        <li>Fitness</li>
                        <li>Guitar</li>
                        <li>Video Games</li>
                        <li>Movies/TV Shows</li>
                        <li>Web Development</li>
                    </ul>
                </span>
                <span>
                    <h3>Education</h3>
                    <p>Bachelor's Degree in Electrical and Computer Engineering from The University of Texas at Austin - Class of May 2020</p>
                </span>
                <span>
                    <h3>Work Experience</h3>
                    <span>
                        <p><pre><strong>Product Engineer, Texas Instruments - Dallas, TX</strong>                                               06/2020 - 12/2020</pre></p>
                        <p>
                            <pre>
                                • Wrote a data processing tool that generates a drift analysis of pre and post testing data packets using Python<br/>    
                                • Wrote an automation tool that fills online forms using the pywinauto module in Python<br/>    
                                • Designed a Failure Analysis Board using Allegro Schematic software<br/>    
                            </pre>
                        </p>
                    </span>
                    <span>
                        <p><pre><strong>3DXP Product Engineering Intern, Micron Technology - Boise, ID</strong>                                 06/2019 - 08/2019</pre></p>
                        <p>
                            <pre>
                                Designed a Post Processor for the next generation qualification tester using object-oriented programming in Python<br/>
                                • Aggregated the total number of failing bits in cells targeted during testing across multiple dies<br/>
                                • Automated script execution through a multi-threaded Apache NiFi data flow<br/>
                                • Inserted results into a Hadoop Database using SQL<br/><br/>
                                Created a Trim Manager using Python<br/>
                                • Generated a platform agnostic output that could be loaded onto a device under test<br/>
                                • Parsed text and excel files and retrieved data from the HYCU database to form the output<br/>
                            </pre>
                        </p>
                    </span>
                </span>
                <span>
                    <h3>Projects</h3>
                    <p>
                        <pre>
                        Web Development Portfolio<br/>
                            • Created a repository on GitHub that houses all my web development projects<br/>
                            • Programmed using HTML, CSS, and JavaScript<br/>
                            • Projects include a web calculator, an Etch-a-Sketch, and a book catalogue with more being added by the day<br/><br/>
                        Chat Room<br/>
                            • Designed a chat room using Java socket programming concepts<br/>
                            • Implemented private, group, and broadcast messaging services for users<br/>
                            • Created a friendly user interface using the JavaFX library<br/><br/>
                        Arcade Game<br/>
                            • Developed an obstacle dodging game using the TI TM4C microcontroller in C<br/>
                            • Implemented sprite controls with a slide potentiometer and buttons, collision detection, and audio output<br/><br/>
                        Word Ladder<br/>
                            • Created a graph to link user-given start and end words in a dictionary<br/>
                            • Performed both breadth-first and depth-first searches to construct a valid word ladder<br/><br/>
                        Blip Interpreter<br/>
                            • Wrote a programming language that would be interpreted using C++<br/>
                            • Implemented text output, boolean and arithmetic expressions using polish notation and conditional statements<br/>
                        </pre>
                    </p>
                </span>
                <span>
                    <h3>Skills</h3>
                    <p>
                        <pre>
                            Proficient in Java, Python, C, JavaScript, HTML, CSS, React.js<br/>
                            Familiar with C++, SQL, NPM, Hadoop, Bootstrap<br/>  
                        </pre>
                    </p>
                </span>
                <span>
                    <h3>Social Media Links</h3>
                    <a href='https://www.linkedin.com/in/sameer-mithani-648657148/' target='_blank'>LinkedIn</a>
                    <p>
                        Instagram: @sam_mithani<br/>
                    </p>
                </span>
              </div>              
          </div>
          <footer>
            <p style={{margin: 'auto', verticalAlign: 'text-bottom'}}>Created by Sameer Mithani</p>
          </footer>
        </div>
      );    
}

export default About;