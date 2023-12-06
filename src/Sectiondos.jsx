import tarjet from '/TARJET.png'
import tar from '/TAR.png'
import tarje from '/TARJE.png'
import fondo from '/fondo.png';
function Sectiondos(props) {

    return (
        <>
       <section className="carrusel" id="carrusel">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5 p-3">

          <h1 className="letra p-3 mt-5" style={{texTalign: 'center' , color:props.color}}>{props.title} </h1>

          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={tarjet} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">

                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={tar} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">

                </div>
              </div>
              <div className="carousel-item">
                <img src={tarje} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">

                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>



        </div>
      </div>


    </div>



  </section>


    </>
  );
}

export default Sectiondos;