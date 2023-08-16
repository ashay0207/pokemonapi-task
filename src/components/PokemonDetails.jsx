// src/components/PokemonDetails.js
import React from 'react';
import './pokemonDetails.css'

const PokemonDetails = ({ details }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`;

//   console.log("details:", details);
  return (
    <div className="pokemon-details">
      <h2>{details.name}</h2>
      <img src={imageUrl} alt={details.name} />
      <p>Height: {details.height} metres</p>
      <p>Weight: {details.weight} grams</p>
      <p>Base Experience: {details.base_experience}</p>
      <h3>Abilities:</h3>
      <ul>
        {details.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Types:</h3>
      <ul>
        {details.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
