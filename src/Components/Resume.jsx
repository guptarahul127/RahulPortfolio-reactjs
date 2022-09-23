import React from 'react'

function Resume() {
  return (
   
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Graduate of Electronics and communication with experience working across the web developer. I have built few project by myself and i
am looking for a role where i can grow from other experienced team members.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Rahul Gupta</h4>
              <p><em>Designed websites and develop a fluid and responsive website to betten
showcase their community. Created with HTML,CSS JavaScript
,Bootstrap framework and Reactjs.</em></p>
              <ul>
                <li>127,Somani Nager Airport Road, Indore</li>
                <li>9009076255</li>
                <li>gupta.rahul127@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of engineering in Electronic and Communication</h4>
              <h5>2010 - 2014</h5>
              <p><em>Bansal Group of Institute, Indore</em></p>
              <p>Proficient in fields of electronics like analog electronics, digital electronics, consumer electronics, embedded systems and power electronics.</p>
            </div>
            {/* <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div> */}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>2021 - Present</h5>
              <p><em>Aimfortech Solutions, Indore </em></p>
              <ul>
                <li>E-commerce Website: A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</li>
                <li>Movie-App:
Built a responsive movie-app by using React js. For movie-app </li>
                <li>Weather App
In this project I created a React weather app, which uses an API
from openweathermap</li>
                <li>https://ladhidh.store
§ Ladhidh is one-stop fresh grocery delivery shop. In here, you get nothing but the freshest nonveg & seafood, delivered
straight to your doorstep. Movie-App</li>
              </ul>
            </div>
            {/* <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume