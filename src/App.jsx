import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import PokemonList from './components/PokemonList/PokemonList';
import './styles/views/_App.scss'; // Importar estilos de App

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
          src="https://i.pinimg.com/originals/34/c1/e5/34c1e5d371d64a581b1902ec5c4509f4.png"
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
