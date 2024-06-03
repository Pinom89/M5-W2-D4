import CommentArea from './CommentArea';

import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBRipple,
    MDBCardText,
    MDBBtn,
    MDBCol
     
  } from 'mdb-react-ui-kit';

export default  function SingleBook({film } ) {
const [selected, setSelected] = useState(false)

    return (
        <MDBCol md='4' >
            <MDBCard className='mt-4 misura-card' style={ selected ? {border: '3px solid red'} : {border:'none'}} onClick={() => setSelected(!selected)} >
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={film.img} fluid alt={film.title} />
                <b>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </b>    
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{film.title}</MDBCardTitle>
                    <MDBCardText>
                    Categoria {film.category}
                    </MDBCardText>
                    <MDBBtn href='#'>€ {film.price}</MDBBtn>
                </MDBCardBody>
                
            </MDBCard>
            {selected === true && <CommentArea film={film} />}
        </MDBCol>   
    
    )
}