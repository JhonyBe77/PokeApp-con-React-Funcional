import React from 'react';

const PokemonCard = ({ pokemon }) => {

  const weightInKg = pokemon.weight / 10; 
  const heightInM = pokemon.height / 10;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        style={{ width: '100px', height: '100px' }}
      />
      <h3>{pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <p>
      Peso: {weightInKg} kg | Altura: {heightInM} m
      </p>
    </div>
  );
};

export default PokemonCard;