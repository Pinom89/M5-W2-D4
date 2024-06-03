import  { useState } from 'react';
import './App.css';
import AllTheBooks from './components/AllTheBooks.jsx';
import Navbar from './components/Navbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import Welcome from './components/Welcome.jsx';
import fantasy from './json/fantasy.json';
import history from './json/history.json';
import horror from './json/horror.json';
import romance from './json/romance.json';
import scifi from './json/scifi.json';
import { MDBBtn } from 'mdb-react-ui-kit';




function App() {

  let [generes, setGeneres] = useState('standard');

  let bookstotali = [].concat(fantasy, history, horror, romance, scifi);
  //console.log(bookstotali);
 

 
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
    
            <div className='d-flex justify-content-center align-items-center'>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('fantasy')}>
        Fantasy
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('horror')}>
        Horror
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('scifi')}>
        Scifi
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('history')}>
        History
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('romance')}>
        Romance
      </MDBBtn>
      </div>
    
    

      {generes === 'standard' && <AllTheBooks films={bookstotali} />}
      {generes === 'fantasy' && <AllTheBooks films={fantasy} />}
      {generes === 'horror' && <AllTheBooks films={horror} />}
      {generes === 'scifi' && <AllTheBooks films={scifi} />}
      {generes === 'history' && <AllTheBooks films={history} />}
      {generes === 'romance' && <AllTheBooks films={romance} />}
    

    <MyFooter/>
    </div>
  );
}

export default App;
