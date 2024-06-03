import React from 'react'


export default function Cerca ({search, handleInputChange}) {
  { /* 
  In on change inserisco funzione handleInputChange che andrà a prendere il value del componente cerca ogni qualvolta verrà digirato un carattere sulla tastiera
  la funzione è stata messa come props passata da AllTheBooks 
  */ }
return (
<form className="search-form mt-4">
<input
  type="text"
  value={ search }



  onChange={handleInputChange}
  placeholder="Cerca un libro..."
/>
</form>
)
}