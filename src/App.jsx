import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import PokemonList from './components/PokemonList/PokemonList';
import './styles/views/_App.scss'; 
const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const isAlreadySearched = searchResults.some((pokemon) => pokemon.name.toLowerCase() === query.toLowerCase());
    if (isAlreadySearched) {
      alert('El Pokémon ya está en la lista.');
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) throw new Error('No se encontró el Pokémon');
      const data = await response.json();
      setSearchResults((prevResults) => [...prevResults, data]);
    } catch (error) {
      console.error(error.message);
      alert('No se encontró el Pokémon. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/127/571/non_2x/pokemon-logo-pokemon-icon-transparent-free-png.png"
          alt="Pokémon Logo"
          className="pokemon-logo"
        />
        <h1>Busca tu Pokémon</h1>
      </header>
      <SearchForm onSearch={handleSearch} />
      <PokemonList pokemons={searchResults} />
    </div>
  );
};

export default App;
