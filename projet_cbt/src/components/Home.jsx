import React from 'react'
import ded1 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_1.jpeg";
import ded2 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_2.jpeg";
import ded3 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_3.jpeg";

class Home extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <>
           <div>

            <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="container marketing mt-5">

              <div className="row text-center">
                <div className="col-lg-4 mb-4">
                  <div className="bg-secondary rounded-circle d-inline-block" style={{width: '140px', height: '140px'}}></div>
                  <h2>Rubrique 1</h2>
                  <p>Accès rapide aux principales rubriques de notre institution.</p>
                  <p><a className="btn btn-secondary" href="/">Voir détails &raquo;</a></p>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="bg-secondary rounded-circle d-inline-block" style={{width: '140px', height: '140px'}}></div>
                  <h2>Rubrique 2</h2>
                  <p>Explorez nos missions, valeurs et histoire.</p>
                  <p><a className="btn btn-secondary" href="/mission-valeurs">Voir détails &raquo;</a></p>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="bg-secondary rounded-circle d-inline-block" style={{width: '140px', height: '140px'}}></div>
                  <h2>Rubrique 3</h2>
                  <p>Découvrez nos églises, œuvres et événements à venir.</p>
                  <p><a className="btn btn-secondary" href="/evenements">Voir détails &raquo;</a></p>
                </div>
              </div>

              <hr className="my-5"/>

              <div className="row featurette mb-5">
                <div className="col-md-7">
                  <h2 className="featurette-heading">Mission et Vision <span className="text-muted">De notre institution</span></h2>
                  <p className="lead">Découvrez l'essence de notre engagement et nos objectifs pour la communauté.</p>
                </div>
                <div className="col-md-5">
                  <div className="bg-light d-block mx-auto" style={{width: '500px', height: '500px'}}></div>
                </div>
              </div>

              <hr className="my-5"/>

              <div className="row featurette mb-5">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">Actualités et événements <span className="text-muted">Restez informés</span></h2>
                  <p className="lead">Toutes les informations importantes sur nos activités et nos événements récents.</p>
                </div>
                <div className="col-md-5 order-md-1">
                  <div className="bg-light d-block mx-auto" style={{width: '500px', height: '500px'}}></div>
                </div>
              </div>

              <hr className="my-5"/>

              <div className="row featurette mb-5">
                <div className="col-md-7">
                  <h2 className="featurette-heading">Faire un don <span className="text-muted">Soutenez notre cause</span></h2>
                  <p className="lead">Contribuez à nos projets et initiatives pour la communauté.</p>
                </div>
                <div className="col-md-5">
                  <div className="bg-light d-block mx-auto" style={{width: '500px', height: '500px'}}></div>
                </div>
              </div>

            </div>
          </div>
      </>    
    );
  }
}

export default Home
