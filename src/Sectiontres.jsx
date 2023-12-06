
import fondo from '/fondo.png';
import lila from '/lila.png';
import glossick from '/glossyck.png';
import hawk from '/hawk.png';

function Sectiontres() {

    return (
        <>
        <br/>
        <br/>
        <br/>
            <section>

                <div className="container text-center ">


                    <div className="row">

                    </div>
                    <div className="col-12 col-lg-12 col-md-12 mt-5" >
                        <img src={lila} alt="" style={{width: '400px' , height: '400px'}}/>
                    </div>
                    <div className="col-12 col-lg-12 col-md-12 mt-4">
                        <img src={glossick} alt="" style={{width: '80px' , height: '80px'}}  />
                            <img src={hawk} alt="" style={{width: '80px' , height: '80px'}}/>
                            </div>
                    </div>
            </section>


        </>
    );
}

export default Sectiontres;