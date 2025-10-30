export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Achievements</h2>
            <ul>
              <li>
                <strong>National Finalist</strong> @ IITM Boardroom Competition.
              </li>
              <li>
                <strong>Runner Up</strong> @ Mumbai Base Hyperthon.
              </li>
              <li>
                4th place @ National-level Minds in Motion competition at IIM, Rohtak.
              </li>
              <li>
                Successfully <strong>designed and deployed</strong> Shrine Connect website for a client.
              </li>
              <li>
                Awarded by the Elastic Team for implementing efficient Elastic Search.
              </li>
              <li>
                <strong>Finalist</strong> @ KJ Somaiya Devopia and Syrus Hackathon.
              </li>
              
            </ul>
          </div>
          <div className="skills-section">
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-list">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Technologies</h3>
                <div className="skill-list">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">MongoDB</span>
                  
                </div>
              </div>
              {/* <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-list">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">FastAPI</span>
                  <span className="skill-tag">Spring Boot</span>
                </div>
              </div> */}
              {/* <div className="skill-category">
                <h3>Database & Cloud</h3>
                <div className="skill-list">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Docker</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}