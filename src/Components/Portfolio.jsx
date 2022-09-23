import React from 'react';

import img1 from '../img/portfolio/resonal-1.PNG'
import img2 from '../img/portfolio/Myntraclone.PNG'
import img3 from '../img/portfolio/Messanger.PNG'
import img4 from '../img/portfolio/CountrayAPI.PNG'



function Portfolio() {
  return (

    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>PERSONAL PROJECTS</h2>
          <p>The Personal Project is your project to do what you want to do. It could be seen as the exclamation mark that goes at the end of your MYP experience, an opportunity for you to indulge a passion and demonstrate the skills that you have developed through approaches to learning.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Clone</li>
              <li data-filter=".filter-card">API</li>
              <li data-filter=".filter-web">React</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img1} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Clone 1</h4>
                <p>CLone</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/resonal-1.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img2} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>API 1</h4>
                <p>API</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/Myntraclone.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img3} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>API 2</h4>
                <p>API</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/Messanger.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={img4} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>API 3</h4>
                <p>API</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/CountrayAPI.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/Netflix.PNG" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Clone 2</h4>
                <p>CLone</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/Netflix.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/Selling.PNG" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Clone 3</h4>
                <p>Clone</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/Selling.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/FoodAPI.PNG" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>React 1</h4>
                <p>React</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/FoodAPI.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/Todolist.PNG" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>React 2</h4>
                <p>React</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/Todolist.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>React 3</h4>
                <p>React</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  )
}

export default Portfolio