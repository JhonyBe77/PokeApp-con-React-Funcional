import React from 'react';
import '../../styles/components/_PokemonCard.scss';

const PokemonCard = ({ pokemon }) => {
  const weightInKg = pokemon.weight / 10;
  const heightInM = pokemon.height / 10;

  return (
    <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
      <div className="header">
        <h3>{pokemon.name}</h3>
        <span className="id">#{pokemon.id.toString().padStart(3, '0')}</span>
      </div>
      <div className="image">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="details">
        <div className="types">
          {pokemon.types.map((type) => (
            <span key={type.slot} className={`type ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="info">
          <p>Peso: {weightInKg} kg</p>
          <p>Altura: {heightInM} m</p>
        </div>
      </div>
      <div className="stats">
        <h4>Estadísticas Base</h4>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className="stat">
            <span className="label">{stat.stat.name}</span>
            <div className="bar">
              <div
                className="progress"
                style={{ width: `${(stat.base_stat / 255) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
