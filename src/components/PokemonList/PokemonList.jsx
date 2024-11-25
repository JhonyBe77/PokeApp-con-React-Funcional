import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import '../../styles/components/_PokemonList.scss';

const PokemonList = ({ pokemons }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;