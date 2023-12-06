import fondo from '/fondo.png';
import alexa from '/alexa.png';
import samuel from '/samuel.png';
import juan from '/juan.png';

function Sectioncuatro(props) {

    return (
        <>
        <br/>
        <br/>
        <br/>
            <section>
                <div className="container text-center " style={{marginTop: '90px'}} >
                    <div className="row">
                        <div className="text-2 col-xl-10 col-lg-12 col-md-12 mx-auto" style={{ color:props.color}}>
                            Integrantes
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12  mt-5">
                            <img src={alexa} alt="" style={{width: '350px' , height: '350px'}}/>
                                <div className="info">
                                   
                                    <div style={{minHeight: '120px'}}>
                                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                            <div className="card card-body" style={{width: '300px'}}>
                                                Edad: 18
                                                Soy una persona extrovertida, sociable y energética
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 mt-5">
                            <img src={samuel} alt="" style={{width: '350px' , height: '350px'}}/>
                                <div className="info">
                                    
                                    <div style={{minHeight: '120px'}}>
                                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                            <div className="card card-body" style={{width: '300px'}}>
                                                Edad: 18
                                                Soy una persona extrovertida, sociable y energética
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 mt-5" >
                            <img src={juan} alt="" style={{width: '350px' , height: '350px'}}/>
                                <div className="info">
                                   
                                    <div style={{minHeight: '120px'}}>
                                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                            <div className="card card-body" style={{width: '300px'}}>
                                                Edad: 18
                                                Soy una persona extrovertida, sociable y energética
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </section>
    </>
            );
}

            export default Sectioncuatro;