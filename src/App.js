// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from './Api'; // Make sure the correct path is used
import PokemonCard from './components/PokemonCard';
import PokemonDetails from './components/PokemonDetails';
import './App.css'


const App = () => {
  const [ pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();


  useEffect(() => {
    async function fetchData() {
      const list = await fetchPokemonList();
      setPokemonList(list);
    }
    fetchData();
  });

  const handleCardClick = (pokemonName) => {
    fetchPokemonDetails(pokemonName)
      .then((details) => {
        setSelectedPokemon(details);
      })

  };


  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <div className="pokemon-list">
        {selectedPokemon ? (
          <div className='buttonPoke'>
            <button onClick={() => setSelectedPokemon()}>Back to List</button>
            <PokemonDetails details={selectedPokemon} />
          </div>
        ) : (
          pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={{
                name: pokemon.name,
                imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`
              }}
              onCardClick={() => handleCardClick(pokemon.name)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
