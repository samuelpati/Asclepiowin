import './header.css';
import imgInicio from '/logo.png'
import Header from './Header.jsx';
import Section1 from './Section1.jsx';
import Sectiondos from './Sectiondos.jsx';
import sectiondos from './sectiondos.css';
import Sectiontres from './Sectiontres.jsx';
import sectiontres from './sectiontres.css';
import Sectioncuatro from './Sectioncuatro.jsx';
import sectioncuatro from './sectioncuatro.css';
import Sectioncinco from './Sectioncinco.jsx';
import sectioncinco from './sectioncinco.css';





function App() {

  return (
    <>

      <Header color={'white'} />

      <Section1 background={'#3867a6'} color={'white'} imagen={imgInicio} />
     
      
      
      <Sectiondos title={'Comic'} color={'white'} />

      <Sectiontres />

      <Sectioncuatro color={'white'} />

      <Sectioncinco />



    </>
  );
}

export default App; 
