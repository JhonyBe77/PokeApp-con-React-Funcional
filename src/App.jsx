import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import PokemonList from './components/PokemonList/PokemonList';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    // Comprobamos si el Pokémon ya existe en la lista
    const isAlreadySearched = searchResults.some((pokemon) => pokemon.name.toLowerCase() === query.toLowerCase());
    if (isAlreadySearched) {
      alert('El Pokémon ya está en la lista.');
      return;
    }

    try {
      // Hacemos la llamada a la API de PokeAPI con el nombre del Pokémon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) throw new Error('No se encontró el Pokémon');
      const data = await response.json();

      // Guardamos el Pokémon encontrado en los resultados
      setSearchResults((prevResults) => [...prevResults, data]);
    } catch (error) {
      console.error(error.message);
      alert('No se encontró el Pokémon. Inténtalo de nuevo.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Busca tu Pokémon</h1>
      <SearchForm onSearch={handleSearch} />
      <PokemonList pokemons={searchResults} />
    </div>
  );
};

export default App;
