
import fondo from '/fondo.png';
import logo from '/logo.png';



function Header(props) {

  return (
    <>
<section>

<div className="container text-center "  >


    <div className="row">


        <div className="col-xl-2 col-lg-12 col-md-12 "><img src={logo} alt="" style={{width: '200px' , height: '100px'}}/></div>
        <div  className="row d-flex flex-row-reverse" style={{flex: '50px'}}>
            <div className="text col-xl-3   mt-5" style={{ color: props.color}}>Equipo de trabajo</div>
            <div className="text col-xl-3   mt-5" style={{ color: props.color}}>Cómic</div>
            <div className="text col-xl-3    mt-5" style={{ color: props.color}}>Inicio</div>
            
        </div>
        <hr/>
        
    </div>
    
</div>
</section>


    </>
  );
}

export default Header;