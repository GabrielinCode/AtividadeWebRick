
import { Search } from 'lucide-react';
import React, { useEffect } from 'react';
import { ChangeEvent, useState } from 'react';
import { Characters } from './Characters';


export function List (){
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);

  const baseUrl = 'https://rickandmortyapi.com/api/character';

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }  
  function handleCharacter(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const url = search ? `${baseUrl}?name=${search}` : baseUrl; 
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    search.length  > 0 ?   fetchCharacters() : setCharacters([]) ;
  
  }, [search]); 


  return(
    <>  
    <div className="my-12 px-3 py-1.5 border-gray border-2 rounded-sm text-sm flex items-center gap-3 bg-white">
      <input 
        onChange={handleSearchChange}
        type="text" 
        className="bg-transparent outline-none text-sm ring-0 border-0 p-0 focus:ring-0 w-96 text-black"  
        placeholder="Sobre quem você quer saber?"
      />
      <Search className='size-6 text-black'/>
    </div>
  
  {characters ? <div className="grid grid-cols-3 gap-4 max-h-96">{characters.map((item) => <Characters item={item} handleCharacter={handleCharacter}/>) }</div> : undefined}
  </>

    
  )
}