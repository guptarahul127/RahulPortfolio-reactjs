import React from 'react'

function About() {
  return (

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>Graduate of Electronics and communication with experience working across the web developer. I have built few project by myself and i
am looking for a role where i can grow from other experienced team members.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/rahul.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
            Designed websites and develop a fluid and responsive website to betten
showcase their community. Created with HTML,CSS JavaScript,Bootstrap framework and Reactjs.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15 Jan 1989</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>NA</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9009076255</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Indore, India</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>32</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>UG</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>gupta.rahul127@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <div>
              <br></br>
              <br></br>
            </div>
            <p>
             Apart from above, i also know about MS-SQL which are using for ticketing system. 


            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About