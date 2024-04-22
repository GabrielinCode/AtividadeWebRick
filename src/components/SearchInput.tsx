
import { Search } from 'lucide-react';
import React, { useEffect } from 'react';
import { ChangeEvent, useState } from 'react';
import { Characters } from './Characters';


export function List (){
  const [search, setSearch] = useState<string>("");
  const [characters, setCharacters] = useState([]); // Use a more descriptive name

  const baseUrl = 'https://rickandmortyapi.com/api/character'; // Define base URL

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const url = search ? `${baseUrl}?name=${search}` : baseUrl; // Construct URL with query string
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data.results); // Update characters based on results
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [search]); // Update on search term change

  return(
    <>  
    <div className="my-12 px-3 py-1.5 border-gray border-2 rounded-sm text-sm flex items-center gap-3 bg-white">
      <input 
        onChange={handleSearchChange}
        value={search}
        type="text" 
        className="bg-transparent outline-none text-sm ring-0 border-0 p-0 focus:ring-0 w-96 text-black"  
        placeholder="Sobre quem você quer saber?"
      />
      <Search className='size-6 text-black'/>
    </div>
    <Characters/>
  </>

    
  )
}