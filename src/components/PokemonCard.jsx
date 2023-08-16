// src/components/PokemonCard.js
import React from 'react';
import './pokemonCard.css';

const PokemonCard = ({ pokemon, onCardClick }) => {
  return (
    <div className="pokemon-card" onClick={() => onCardClick(pokemon.name)}>
      <img src={pokemon.imageURL} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
