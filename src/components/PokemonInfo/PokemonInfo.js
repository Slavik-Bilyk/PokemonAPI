import React, { useState, useEffect } from 'react';
import PokemonFallbBackView from '../PokemonErrorWiew/PokemonErrorWiew';
import PokemonData from '../PokemonData/PokemonData';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return 
    }

      
      setStatus(Status.PENDING);

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Не вдалося отримати дані для ${pokemonName}`);
        })
        .then(data => {
          setPokemon(data);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Тут</div>;
  }

  if (status === Status.PENDING) {
    return <div>Завантаження...</div>;
  }

  if (status === Status.REJECTED) {
    return <PokemonFallbBackView />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonData pokemon={pokemon} />;
  }
}

export default PokemonInfo;
