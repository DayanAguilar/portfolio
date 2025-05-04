import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="about-section">
                <h1 className="about-title">About Me</h1>
                <p className="about-text">
                    I am a proactive systems engineering student passionate about data science and artificial intelligence, with solid experience in full-stack development. I have contributed to projects ranging from intelligent chatbots and web dashboards to containerized and automated environments.
                </p>
                <p className="about-text">
                    My goal is to integrate data analysis, AI, and robust software engineering practices to generate real-world impact through innovative solutions.
                </p>
            </section>

            <section className="about-section">
                <h2 className="section-title">Experience</h2>
                <div className="experience-card">
                    <h3 className="experience-role">
                        <img
                            src="https://promero.com/wp-content/uploads/2019/05/Nice-InContact-Logo.png"
                            alt="Nice InContact Logo"
                            style={{
                                width: 24,
                                height: 24,
                                marginRight: 8,
                                verticalAlign: 'middle',
                            }}
                        />
                        Nice InContact Internship Program
                    </h3>
                    <p className="experience-time">6 months | August 2024 - January 2025</p>
                    <p>
                        Developed a suite of tools aimed at optimizing Jira operations by integrating frontend and backend systems through APIs. Utilized machine learning techniques with PyTorch and Scikit-Learn for predictive analytics and QA automation, significantly reducing operational time and improving efficiency.


                    </p>
                </div>
                <div className="experience-card">
                    <h3 className="experience-role">Fullstack Developer Intern</h3>
                    <p className="experience-time">GAMC Call Center | Mar 2024 - Present</p>
                    <p>Developing an AI-based chatbot for improving customer service. Responsible for front-end and back-end implementation, data processing, and AI integration.</p>
                </div>



                <div className="experience-card">
                    <h3 className="experience-role">QA Tester Intern</h3>
                    <p className="experience-time">TRES TI | 2021</p>
                    <p>Participated in manual testing and requirements validation for health software solutions using ISO/IEC standards.</p>
                </div>
            </section>

            <section className="about-section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    <div>
                        <h3 className="skill-category">Programming</h3>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="skill-category">Frameworks & Tools</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>FastAPI</li>
                            <li>Docker</li>
                            <li>Jenkins</li>
                            <li>GitHub Actions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="skill-category">Data & AI</h3>
                        <ul>
                            <li>Pandas</li>
                            <li>Scikit-learn</li>
                            <li>OpenAI API</li>
                            <li>Chatbot Development</li>
                            <li>Data Visualization</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
