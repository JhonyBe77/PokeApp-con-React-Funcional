import React from 'react';

const PokemonCard = ({ pokemon }) => {
  const weightInKg = pokemon.weight / 10; 
  const heightInM = pokemon.height / 10;

  return (
    <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
      <img
        src={pokemon.sprites?.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h3>{pokemon.name}</h3>
      <p className="pokemon-id">ID: {pokemon.id}</p>
      <div className="pokemon-info">
        <p>Peso: {weightInKg} kg</p>
        <p>Altura: {heightInM} m</p>
      </div>
      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <span key={type.slot} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
