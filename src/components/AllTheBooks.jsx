import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import   './AllTheBooks.css';
import SingleBook from './SingleBook';
import { useState } from 'react';
import Cerca from './Cerca';


export default function Card({films}) {
  
  
        {/* creo tramite useState un valore di partenza vuoto in quanto la barra di ricerca è vuota e si valorizzerò tramite la funzione SetSearch che andrà a prendere
         il value del componente cerca
    */ }
    const [search, setSearch] = useState('');
  
    const handleInputChange = (e) => {
      setSearch(e.target.value);
    
    }
    return (
    <>
      <MDBContainer> 
            <MDBRow>
                {/* inserisco un componente cerca dove all'interno è presente il form*/ }
              <Cerca handleInputChange={handleInputChange} search={search} />
            </MDBRow>

            <MDBRow className='d-flex'>      
                {films
                .filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
                .map(film => (
                    <SingleBook  film={film}/>
                ))}         
            </MDBRow>
     </MDBContainer> 
    </>
  );
};
