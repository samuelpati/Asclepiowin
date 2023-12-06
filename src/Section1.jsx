import fondo from '/fondo.png';
import logo from '/logo.png';
function Section1(props) {

  return (
    <>
 <section className="main" id="main">
    <div className="container p-3" >
      <div className="row mt-5 p-3 shadow rounded-start-5" style={{background: props.background}}>
        <div className="col-md-6">
          <img className="img-INICIAL img-fluid rounded" src={props.imagen} alt=""/>
        </div>
        <div className="col-md-6 mt-5 p-5" style= {{textAlign: 'center'}}>
          <h1 style={{color: props.color}}>Objetivo</h1>
          <p style={{color: props.color}}>El objetivo del proyecto Asclepio es dar información a los jóvenes de cómo tratar a las personas
            con esta discapacidad auditiva, ya que muchas tienen miedo de tratar con este tipo de personas
            por su discapacidad porque no saben cómo hacerlo de manera correcta.</p>
        </div>
      </div>
    </div>
  </section>


    </>
  );
}

export default Section1;