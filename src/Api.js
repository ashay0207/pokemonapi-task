// src/api.js
import axios from 'axios';

export const fetchPokemonList = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');
  return response.data.results;
};

export const fetchPokemonDetails = async (pokemonName) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return response.data;
};
