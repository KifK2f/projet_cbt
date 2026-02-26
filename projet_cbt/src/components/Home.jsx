import React from 'react'
import ded1 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_1.jpeg";
import ded2 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_2.jpeg";
import ded3 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_3.jpeg";
import ded4 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_4.jpeg";
import ded5 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_5.jpeg";

class Home extends React.Component {

  render() {
    return (
      <div>

        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={ded1} className="d-block w-100" alt="Slide 1" style={{height: '32rem', objectFit: 'cover'}} />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Présentation institutionnelle</h1>
                  <p>Découvrez notre mission et notre vision.</p>
                  <p><a className="btn btn-lg btn-primary" href="/don">Faire un don</a></p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={ded2} className="d-block w-100" alt="Slide 2" style={{height: '32rem', objectFit: 'cover'}} />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Actualités à la une</h1>
                  <p>Restez informé des dernières nouvelles de la CBT.</p>
                  <p><a className="btn btn-lg btn-primary" href="/actualites">Voir actualités</a></p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={ded3} className="d-block w-100" alt="Slide 3" style={{height: '32rem', objectFit: 'cover'}} />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Prochains événements</h1>
                  <p>Ne manquez pas nos activités et rencontres à venir.</p>
                  <p><a className="btn btn-lg btn-primary" href="/evenements">Voir événements</a></p>
                </div>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

        {/* ================= ABOUT SECTION ================= */}
        <section className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">
                About Our Institution
              </h2>
              <p className="text-muted">
                Since 2021, our institution has been a place of faith, unity and growth.
                We guide believers and support communities with impactful programs.
              </p>
            </div>

            <div className="col-md-6">
              <div className="row g-3">

                <div className="col-6">
                  <div className="card bg-dark text-white rounded-4 p-4 border-0 h-100">
                    <h5>Professional Guidance</h5>
                    <p className="small">
                      Structured spiritual mentoring and leadership.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card bg-primary text-white rounded-4 p-4 border-0 h-100">
                    <h5>Community Programs</h5>
                    <p className="small">
                      Events and outreach activities for everyone.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="container mt-5 text-center">
          <h4 className="mb-4">A few facts in numbers</h4>

          <div className="row">
            <div className="col-md-3">
              <h2 className="fw-bold">12 000+</h2>
              <p className="text-muted">Hours of service</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">89%</h2>
              <p className="text-muted">Member retention</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">1,200+</h2>
              <p className="text-muted">Active members</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">125+</h2>
              <p className="text-muted">Annual events</p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="container mt-5 mb-5">
          <div className="row align-items-center">

            <div className="col-md-4">
              <h3 className="fw-bold">Our Services</h3>
              <p className="text-muted">
                Explore our programs, training, events and community services.
              </p>
              <a href="/services" className="btn btn-outline-dark rounded-pill">
                Explore More
              </a>
            </div>

            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
                <img
                  src={ded4}
                  className="w-100"
                  alt="Service 1"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>Training Programs</h5>
                  <p className="small text-muted">
                    Programs designed for all ages and abilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
                <img
                  src={ded5}
                  className="w-100"
                  alt="Service 2"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>Events & Activities</h5>
                  <p className="small text-muted">
                    Grow spiritually through impactful gatherings.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    );
  }
}

export default Home