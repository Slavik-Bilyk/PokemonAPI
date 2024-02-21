import { useState } from 'react';
import { FaSearchDollar } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function PokemonForm ({onSubmit}) {
    
    const [pokemonName, setPokemonName] = useState('')

    const  handleNameChange = (e) => {
        setPokemonName(e.currentTarget.value.toLowerCase() );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pokemonName.trim() === '') {
            return "eeror"
        }

       onSubmit(pokemonName);

       setPokemonName('');
    }

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='pokemonName'
                    value={pokemonName}
                    onChange={handleNameChange}
                />
                <button type='submit'>
                    <FaSearchDollar />
                    search
                </button>
            </form>
        );
    }
